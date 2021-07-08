export class Weather {

    /**
     * @type {Number}
     */
    #temperature;

    /**
     * @type {String}
     */
    #description;

    /**
     * @type {Number}
     */
    #difference;

    /**
     * @type {Number}
     */
    #wind;

    /**
     * @type {Number}
     */
    #humidity;

    /**
     * @returns {Number}
     */
    get temperature() {
      return this.#temperature;
    }

    /**
     * @param {Number}
     */
    set temperature(temperature) {
      this.#temperature = temperature;
    }

    /**
     * @returns {String}
     */
    get description() {
      return this.#description;
    }

    /**
     * @param {Number}
     */
    set description(description) {
      this.#description = description;
    }

    /**
     * @param {Number}
     */
    set difference(difference) {
      this.#difference = difference;
    }

    /**
     * @returns {Number}
     */
    get difference() {
      return this.#difference;
    }

    /**
     * @param {Number}
     */
    set wind(wind) {
      this.#wind = wind;
    }

    /**
     * @returns {Number}
     */
    get wind() {
      return this.#wind;
    }

    /**
     * @param {Number}
     */
    set humidity(humidity) {
      this.#humidity = humidity;
    }

    /**
     * @returns {Number}
     */
    get humidity() {
      return this.#humidity;
    }

}
