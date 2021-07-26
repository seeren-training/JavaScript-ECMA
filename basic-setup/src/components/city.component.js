import { CityListService } from '../services/cityList.service';

export class CityComponent {

    /**
     * @type {Element}
     */
    #tag;

    constructor() {
      this.render();
      CityListService.onAdd.push(() => this.render());
    }

    render() {
      this.#tag = document.querySelector('city');
      this.#tag.innerHTML = `
        <div class="none w-12 top-0 mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
        <span class="smaller icon material-icons">place</span>
        ${CityListService.last.name}
      `;
    }

}
