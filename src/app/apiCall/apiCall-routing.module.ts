import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ApiCallComponent } from './apiCall.component'

const routes: Routes = [{ path: '', component: ApiCallComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ApiCallRoutingModule {}
