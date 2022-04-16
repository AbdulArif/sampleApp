import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { BottomNavComponent } from './bottomNav.component'

const routes: Routes = [{ path: '', component: BottomNavComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BottomNavRoutingModule {}
