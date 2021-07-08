import 'material-design-lite';

import { CityListService } from '../services/cityList.service';

const { componentHandler } = global;

export class CityListComponent {

    /**
     * @type {Element}
     */
    #tag;

    constructor() {
      this.render();
    }

    /**
     * @param {String} cityName
     */
    add(cityName) {
      /.{2,}/.test(cityName) && (CityListService.add(cityName) || this.render());
    }

    /**
     * @param {City} city
     */
    delete(city) {
      CityListService.delete(city) || this.render();
    }

    render() {
      this.#tag = document.querySelector('cities');
      this.#tag.innerHTML = `
        <span class="center mdl-layout-title">Cities</span>
        <nav class="mdl-navigation ui grey-900">
            <a class="bg-grey-300 mdl-navigation__link">
                ${CityListService.last.name}
                <span class="pink-500 icon material-icons">place</span>
            </a>
            ${Array.from(CityListService.cityList).map((city) => `
            <a class="city-item mdl-navigation__link">
                ${city.name} <span class="icon material-icons">highlight_off</span>
            </a>`).join('')}
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <div class="mdl-textfield__expandable-holder">
                    <input class="mdl-textfield__input" type="text" id="sample6" placeholder="City">
                    <label class="mdl-textfield__label" fcitiesor="sample-expandable">Expandable Input</label>
                </div>
            </div>
        </nav>
        <label class="mdl-button mdl-js-button mdl-button--icon mdl-button--fab mdl-button--colored" for="sample6">
            <i class="material-icons">add</i>
        </label>
        <br />
        &nbsp;`;
      Array.from(CityListService.cityList).forEach((city, index) => this.#tag.querySelectorAll('.city-item .material-icons')[index]
        .onclick = () => this.delete(city));
      this.#tag.querySelector('input')
        .onkeypress = (e) => !(e.code === 'Enter' && this.add(e.target.value));
      componentHandler.upgradeDom();
    }

}
