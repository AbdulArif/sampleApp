import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BottomNavigationRoutingModule } from './bottomNavigation-routing.module'
import { BottomNavigationComponent } from './bottomNavigation.component'

@NgModule({
  imports: [NativeScriptCommonModule, BottomNavigationRoutingModule],
  declarations: [BottomNavigationComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BottomNavigationModule {}
