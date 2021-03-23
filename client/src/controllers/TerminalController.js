import { ComponentsBuilder } from "../components/Components.js";

export class TerminalController {
  constructor() {

  }

  #onInputReceived(eventEmitter) {
    return function () {
      const message = this.getValue();

      console.log(message);

      this.clearValue();
    }
  }

  async initializeTable(eventEmitter) {
    console.log('initialize');

    const components = new ComponentsBuilder()
      .setScreen({ title: 'HackerChat - MVC'})
      .setLayoutComponent()
      .setInputComponent(this.#onInputReceived(eventEmitter))
      .build();

    components.input.focus();
    components.screen.render();  
  }
}