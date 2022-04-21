import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { RadRadialGaugeComponent } from './radRadialGauge.component'

const routes: Routes = [{ path: '', component: RadRadialGaugeComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class RadRadialGaugeRoutingModule {}
