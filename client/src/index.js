#!/usr/bin/env node

/*
  chmod +x index.js
*/

/*
hacker-chat \
  --username mvcorsi
  --room sala01
*/

/*
node index.js \
  --username mvcorsi
  --room sala01
  --hostUri localhost
*/

import Events from 'events';
import CliConfig from './config/cli.js';
import { TerminalController } from "./controllers/TerminalController.js";
import EventManager from './eventManager.js';
import SocketClient from './socket.js';

const [,, ...commands] = process.argv;

const config = CliConfig.parseArgs(commands);

const componentEmitter = new Events();

const socketClient = new SocketClient(config);

await socketClient.initialize();

const eventManager = new EventManager({ componentEmitter, socketClient });

const events = eventManager.getEvents();

socketClient.attachEvents(events);

const data = {
  roomId: config.room,
  userName: config.username,
}

eventManager.joinRoomAndWaitForMessages(data);

const controller = new TerminalController();

await controller.initializeTable(componentEmitter);
