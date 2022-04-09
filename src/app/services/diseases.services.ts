import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//import {enableProdMode} from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class DiseaseService {
    
    public apiUrl= 'https://datariverapi.azurewebsites.net/api/Role/GetRoles'

    constructor (private http:HttpClient){

    }
    GetAllDiseases():Observable<any[]>{
        var temp= this.http.get(this.apiUrl)
        console.log(temp)
        return this.http.get<any[]>(this.apiUrl)
    }
}