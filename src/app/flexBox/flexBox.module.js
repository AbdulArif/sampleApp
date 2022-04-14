import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxComponent } from './flexBox.component';
import { FlexBoxRoutingModule } from './flexBox-routing.module';
let FlexBoxModule = class FlexBoxModule {
};
FlexBoxModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FlexBoxRoutingModule
        ],
        declarations: [FlexBoxComponent],
        schemas: [NO_ERRORS_SCHEMA],
    })
], FlexBoxModule);
export { FlexBoxModule };
