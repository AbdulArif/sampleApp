import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { TestComponent } from './test.component';
const routes = [{ path: '', component: TestComponent }];
let TestRoutingModule = class TestRoutingModule {
};
TestRoutingModule = __decorate([
    NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule],
    })
], TestRoutingModule);
export { TestRoutingModule };
