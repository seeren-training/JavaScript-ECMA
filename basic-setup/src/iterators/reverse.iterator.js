export class ReverseIterator {

    /**
     * @type {Array}
     */
    #subject;

    /**
     * @type {Number}
     */
    #index;

    /**
     *
     * @param {Array} subject
     * @param {Number} offset
     */
    constructor(subject, offset = 0) {
      this.#subject = subject;
      this.#index = subject.length - offset;
    }

    next() {
      this.#index -= 1;
      return this.#index >= 0
        ? { value: this.#subject[this.#index], done: false }
        : { done: true };
    }

}
