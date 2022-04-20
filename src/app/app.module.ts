import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { HttpClientModule } from '@angular/common/http'
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DiseaseService } from './services/diseases.services'

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, 
    NativeScriptModule, 
    HttpClientModule,
    NativeScriptHttpClientModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIChartModule,
    NativeScriptUIDataFormModule],
  declarations: [AppComponent],
  providers:[DiseaseService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
