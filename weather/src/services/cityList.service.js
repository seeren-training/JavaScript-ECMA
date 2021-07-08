import { CityList } from '../models/city-list.model';
import { City } from '../models/city.model';

let cityList = new CityList(new City('Paris'));

export class CityListService {

    /**
     * @type {Array<Function>}
     */
    static onAdd = [];

    /**
     * @param {String} name
     */
    static add(cityName) {
      !cityList.find((city) => cityName === city.name)
      && cityList.push(new City(cityName))
      && CityListService.onAdd.forEach((listener) => listener());
    }

    /**
     * @param {City} city
     */
    static delete(targeCity) {
      cityList = new CityList(
        ...cityList.filter((city) => city.name !== targeCity.name),
      );
    }

    static get cityList() {
      return cityList;
    }

    static get last() {
      return CityListService.cityList[CityListService.cityList.length - 1];
    }

}
