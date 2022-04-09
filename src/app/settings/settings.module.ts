import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
// import { HttpClientModule } from '@angular/common/http'
import { SettingsRoutingModule } from './settings-routing.module'
import { SettingsComponent } from './settings.component'

@NgModule({
  imports: [NativeScriptCommonModule, 
            SettingsRoutingModule,
            NativeScriptFormsModule],
            // HttpClientModule],
  declarations: [SettingsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
