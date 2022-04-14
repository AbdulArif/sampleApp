import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { FlexBoxComponent } from './flexBox.component';
const routes = [{ path: '', component: FlexBoxComponent }];
let FlexBoxRoutingModule = class FlexBoxRoutingModule {
};
FlexBoxRoutingModule = __decorate([
    NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule],
    })
], FlexBoxRoutingModule);
export { FlexBoxRoutingModule };
