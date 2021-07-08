import { ReverseIterator } from '../iterators/reverse.iterator';

export class CityList extends Array {

  constructor(...items) {
    super(...items);
    this[Symbol.iterator] = () => new ReverseIterator(this, 1);
  }

}
