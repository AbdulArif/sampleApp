import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule } from '@nativescript/angular'
import { FlexBoxComponent } from './flexBox.component';

import { FlexBoxRoutingModule } from './flexBox-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FlexBoxRoutingModule
  ],
  declarations: [FlexBoxComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FlexBoxModule { }
