import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

    constructor(private http: Http){

    }

    getWeather(city: string) {
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=2613731&APPID=1dfd8e25c1f130d1f38ca304bbc82bfd').map(res => res.json());
    }
}