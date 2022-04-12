import { Component, OnInit } from '@angular/core';
import { DiseaseService } from '../services/diseases.services';

@Component({
  selector: 'app-apiCall',
  templateUrl: './apiCall.component.html',
  styleUrls: ['./apiCall.component.css']
})
export class ApiCallComponent implements OnInit {

  constructor(
    public diseaseService: DiseaseService
  ) { 
  }

  ngOnInit() {

    console.log('hello ..............')
    this.diseaseService.getData().subscribe(
      {
        next: (res:any)=>{ console.log(res)},
        error: (err:any)=>{console.log(err)}
      }
    );

  }



}
