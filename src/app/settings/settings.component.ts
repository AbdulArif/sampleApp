import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { map } from 'rxjs'

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  private appId: string;
  private appCode: string;
  public weather: any;
 
  constructor(private http: HttpClient) {
    this.appId = "HERE-APP-ID";
    this.appCode = "HERE-APP-CODE";  }

  ngOnInit() {
    this.getWeather({ latitude: 37.7397, longitude: -121.4252 });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  ngModel(){
    
  }
  public getWeather(coordinates: any) {
    let params = new HttpParams({
        fromObject: {
            "product": "forecast_7days_simple",
            "latitude": coordinates.latitude,
            "longitude": coordinates.longitude,
            "app_id": this.appId,
            "app_code": this.appCode
        }
    });
    this.http.get("https://weather.cit.api.here.com/weather/1.0/report.json", { params: params })
        .pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
        .subscribe(result => {
            this.weather = result.forecast;
        }, error => {
            console.error(error);
        });
}
}
