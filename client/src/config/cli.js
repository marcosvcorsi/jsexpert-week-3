const PROD_URL = 'https://hacker-chat-mvcorsi.herokuapp.com'

export default class CliConfig {
  constructor({ username, room, hostUri = PROD_URL }) {
    this.username = username;
    this.room = room;

    const { hostname, port, protocol } = new URL(hostUri);

    this.host = hostname;
    this.port = port;
    this.protocol = protocol.replace(/\W/, '');
  }

  static parseArgs(commands) {
    const cmd = new Map();

    for(const index in commands) {
      const command = commands[index]

      const commandPrefix = '--';

      if(!commands[index].includes(commandPrefix)) continue;

      const key = command.replace(commandPrefix, '');
      const value = commands[parseInt(index) + 1];

      cmd.set(key, value);
    }

    return new CliConfig(Object.fromEntries(cmd));
  }
}