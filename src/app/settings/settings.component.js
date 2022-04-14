import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
let SettingsComponent = class SettingsComponent {
    constructor(http) {
        this.http = http;
        this.appId = "HERE-APP-ID";
        this.appCode = "HERE-APP-CODE";
    }
    ngOnInit() {
        this.getWeather({ latitude: 37.7397, longitude: -121.4252 });
    }
    onDrawerButtonTap() {
        const sideDrawer = Application.getRootView();
        sideDrawer.showDrawer();
    }
    ngModel() {
    }
    getWeather(coordinates) {
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
            .pipe(map(result => result.dailyForecasts.forecastLocation))
            .subscribe(result => {
            this.weather = result.forecast;
        }, error => {
            console.error(error);
        });
    }
};
SettingsComponent = __decorate([
    Component({
        selector: 'Settings',
        templateUrl: './settings.component.html',
    }),
    __metadata("design:paramtypes", [HttpClient])
], SettingsComponent);
export { SettingsComponent };
