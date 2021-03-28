/*
node index.js \
  --username mvcorsi
  --room sala01
  --hostUri localhost
*/

import Events from 'events';
import CliConfig from './config/cli.js';
import { TerminalController } from "./controllers/TerminalController.js";
import SocketClient from './socket.js';

const [,, ...commands] = process.argv;

const config = CliConfig.parseArgs(commands);

console.log(config);

const componentEmitter = new Events();

const socketClient = new SocketClient(config);

await socketClient.initialize();

// const controller = new TerminalController();

// await controller.initializeTable(componentEmitter);
