import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


//import {enableProdMode} from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class DiseaseService {
    
    public apiUrl= 'https://datariverapi.azurewebsites.net/api/Role/GetRoles'

    constructor (private http:HttpClient, private httpModule:HttpClientModule){

    }
    // GetAllDiseases() {
    //     let promise = new Promise((resolve, reject) => {
    //         this.httpModule.request({
    //            url: 'https://datariverapi.azurewebsites.net/api/Role/GetRoles',
    //            method: 'GET'
    //         }).then((res) => {
    //             resolve(res)
    //         }, (err) => {
    //             reject(err)
    //         })
    //     })
    
    //     return promise;
    // }
    GetAllDiseases():Observable<any[]>{
        const options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
          }
        return this.http.get<any[]>("https://datariverapi.azurewebsites.net/api/Role/GetRoles",options)
    }
}