import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { RadRadialGaugeRoutingModule } from './radRadialGauge-routing.module'
import { RadRadialGaugeComponent } from './radRadialGauge.component'

@NgModule({
  imports: [NativeScriptCommonModule, RadRadialGaugeRoutingModule],
  declarations: [RadRadialGaugeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RadRadialGaugeModule {}
