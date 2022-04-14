import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import {enableProdMode} from '@angular/core';
let DiseaseService = class DiseaseService {
    constructor(http, httpModule) {
        this.http = http;
        this.httpModule = httpModule;
        this.apiUrl = 'https://datariverapi.azurewebsites.net/api/Role/GetRoles';
    }
    getData() {
        const options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json'),
            //params: new HttpParams().append('userId',userId)
        };
        return this.http.get(this.apiUrl, options);
    }
};
DiseaseService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient, HttpClientModule])
], DiseaseService);
export { DiseaseService };
