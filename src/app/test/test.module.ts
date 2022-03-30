import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule } from '@nativescript/angular'
import { TestComponent } from './test.component';

import { TestRoutingModule } from './test-routing.module'

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [TestComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TestModule { }
