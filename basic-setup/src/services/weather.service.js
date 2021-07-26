/* eslint-disable no-empty */
/* eslint-disable camelcase */
import { Weather } from '../models/weather.model';

export class WeatherService {

  /**
   * @param {City} city
   */
  static async findByCity(city) {
    const weather = new Weather();
    try {
      const json = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=40ef35710baae8ad63c4c76f77ae1b25`)
        .then((response) => response.json());
      const { speed } = json.wind;
      const { description } = json.weather[0];
      const {
        temp, humidity, temp_min, temp_max,
      } = json.main;
      weather.description = description;
      weather.temperature = temp;
      weather.wind = speed;
      weather.humidity = humidity;
      weather.difference = parseInt(temp_max - temp_min, 10);
    } catch (error) {
    }
    return weather;
  }

}
