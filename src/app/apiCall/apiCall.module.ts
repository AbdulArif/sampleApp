import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallComponent } from './apiCall.component';
import { ApiCallRoutingModule } from './apiCall-routing.module'


@NgModule({
  imports: [
    CommonModule,
    ApiCallRoutingModule,
    
  ],
  declarations: [ApiCallComponent]
})
export class ApiCallModule { }
