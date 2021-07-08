// eslint-disable-next-line no-unused-vars
import { Weather } from './weather.model';

export class City {

  /**
   * @type {String}
   */
  #name;

  /**
   * @type {Weather}
   */
  #weather;

  constructor(name) {
    this.#name = name;
  }

  /**
   * @param {String}
   */
  set name(name) {
    this.#name = name;
  }

  /**
   * @returns {String}
   */
  get name() {
    return this.#name;
  }

  /**
   * @param {Weather}
   */
  set weather(weather) {
    this.#weather = weather;
  }

  /**
   * @returns {Weather}
   */
  get weather() {
    return this.#weather;
  }

}
