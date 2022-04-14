import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NativeScriptHttpClientModule } from "@nativescript/angular";
import { ObservableArray } from "@nativescript/core";
import { Observable } from "rxjs";


//import {enableProdMode} from '@angular/core';



@Injectable(
        {
        providedIn: 'root'
    }
)
export class DiseaseService {

    public apiUrl = 'https://datariverapi.azurewebsites.net/api/Role/GetRoles'

    constructor(private http: HttpClient, private httpModule: HttpClientModule) {

    }
    
    getData():Observable<any[]> {

        const options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json'),
            //params: new HttpParams().append('userId',userId)

        }
        return this.http.get<any[]>(this.apiUrl, options);
    }


}