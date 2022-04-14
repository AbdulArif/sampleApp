import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ApiCallComponent } from './apiCall.component';
const routes = [{ path: '', component: ApiCallComponent }];
let ApiCallRoutingModule = class ApiCallRoutingModule {
};
ApiCallRoutingModule = __decorate([
    NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule],
    })
], ApiCallRoutingModule);
export { ApiCallRoutingModule };
