import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ChartRoutingModule } from './chart-routing.module'
import { ChartComponent } from './chart.component'

@NgModule({
  imports: [NativeScriptCommonModule, ChartRoutingModule],
  declarations: [ChartComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChartModule {}
