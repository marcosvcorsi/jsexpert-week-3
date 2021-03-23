import Events from 'events';
import { TerminalController } from "./controllers/TerminalController.js";

const componentEmitter = new Events();

const controller = new TerminalController();

await controller.initializeTable(componentEmitter);