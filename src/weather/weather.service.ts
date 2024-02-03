import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async getWeather(city: string): Promise<any> {
    const apiKey = '688237df04344461956194026240302';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    return this.httpService
      .get(apiUrl)
      .pipe(map((response) => response.data))
      .toPromise();
  }

  // getCurrentLocation(): string[] {
  //   navigator.watchPosition((position) => {
  //     return [position.coords.latitude, position.coords.longitude];
  //   });
  // }
}
