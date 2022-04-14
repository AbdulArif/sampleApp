import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { HomeComponent } from './home.component';
const routes = [{ path: '', component: HomeComponent }];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = __decorate([
    NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule],
    })
], HomeRoutingModule);
export { HomeRoutingModule };
