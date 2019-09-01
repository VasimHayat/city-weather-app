import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';


const FORECAST_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast';
const OPEN_WEATHER_API_KEY = '7ec24178bacbeb8537ee4d6dbe6724db';
const FORECAST_API_URL = `${FORECAST_API_ENDPOINT}?appid=${OPEN_WEATHER_API_KEY}`;


@Injectable()
export class WForecastService {
  private unit:string = "metric";
  public locationLat:any = 28.68627380000001 ;
  public locationLng:any = 77.22178310000004;
  public locationName:string = "Delhi, India";

  constructor(private httpClient: HttpClient) { }
  
  setLocationDetail(lat:number,lng:number,locationName:string){
      this.locationLat = lat;
      this.locationLng = lng;
      this.locationName = locationName;
  }
  getWeatherData(city: string, countryCode: string) {
    return this.httpClient.get(FORECAST_API_URL, {
        params: { q: `${city},${countryCode}`, units: this.unit }
      }
    );
  }
  getWeatherDataByGeo() {
    return this.httpClient.get(FORECAST_API_URL, {
        params: {lat:this.locationLat,lon:this.locationLng, units: this.unit }
      }
    );
  }

  // getWeatherDataByGeo(lat: string, lon: string) {
  //   return this.httpClient.get(FORECAST_API_URL, {
  //       params: {lat:lat,lon:lon, units: this.unit }
  //     }
  //   );
  // }
}
