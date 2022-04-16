import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BottomNavRoutingModule } from './bottomNav-routing.module'
import { BottomNavComponent } from './bottomNav.component'

@NgModule({
  imports: [NativeScriptCommonModule, BottomNavRoutingModule],
  declarations: [BottomNavComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BottomNavModule {}
