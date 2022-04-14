import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallComponent } from './apiCall.component';
import { ApiCallRoutingModule } from './apiCall-routing.module';
let ApiCallModule = class ApiCallModule {
};
ApiCallModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ApiCallRoutingModule,
        ],
        declarations: [ApiCallComponent]
    })
], ApiCallModule);
export { ApiCallModule };
