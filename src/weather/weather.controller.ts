import { Controller, Get, Param, Render } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @Render('index')
  root() {
    // const currentLocation = this.weatherService.getCurrentLocation();
    // console.log(currentLocation);
    return { message: 'hello moto' };
  }

  @Get(':city')
  @Render('index')
  async getWeather(@Param('city') city: string): Promise<any> {
    return this.weatherService.getWeather(city);
  }
}
