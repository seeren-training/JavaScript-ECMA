import { CityListService } from '../services/cityList.service';
import { WeatherService } from '../services/weather.service';

export class WeatherComponent {

    /**
     * @type {Element}
     */
    #tag;

    constructor() {
      this.render();
      CityListService.onAdd.push(async () => {
        CityListService.last.weather = await WeatherService.findByCity(CityListService.last);
        this.render();
      });
    }

    render() {
      const { last } = CityListService;
      this.#tag = document.querySelector('weather');
      this.#tag.innerHTML = `
      <temperature class="block w-12 vh-4 grey-50 v-middle">
          <span class="inline-block w-12 h-1 v-middle"></span>
          <span class="inline-block w-1 h-4 v-middle"></span>
          <div class="w-12 v-center center bigger">
              <span class="lighter">${last.weather?.temperature ?? '-'}<span class="lighter">°</span></span>
              <span class="block w-12 smaller">${last.weather?.description ?? '-'}</span>
          </div>
      </temperature>
      <humidity class="block w-12 vh-3 grey-50">
          <span class="inline-block fix w-1 vh-3 v-middle"></span>
          <div class="inline-block fix w-10 v-middle center">
              <p class="inline-block w-4 fix">
                  <span class="light icon material-icons">bubble_chart</span>
                  <br>
                  <span>${last.weather?.humidity ?? '-'}<span class="ui smaller"><span class="ui smaller"> %</span></span></span>
              </p>
              <p class="inline-block w-4 fix">
                  <span class="light icon material-icons">toys</span>
                  <br>
                  <span>${last.weather?.wind ?? '-'}<span class="smaller"><span class="smaller"> km/h</span></span></span>
              </p>
              <p class="inline-block w-4 fix">
                  <span class="light icon material-icons">import_export</span>
                  <br>
                  <span>${last.weather?.difference ?? '-'}</span>
              </p>
          </div>
      </humidity>
        `;
    }

}
