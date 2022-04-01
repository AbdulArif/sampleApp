import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { FlexBoxComponent } from './flexBox.component'

const routes: Routes = [{ path: '', component: FlexBoxComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class FlexBoxRoutingModule {}
