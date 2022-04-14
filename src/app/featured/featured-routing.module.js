import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { FeaturedComponent } from './featured.component';
const routes = [{ path: '', component: FeaturedComponent }];
let FeaturedRoutingModule = class FeaturedRoutingModule {
};
FeaturedRoutingModule = __decorate([
    NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule],
    })
], FeaturedRoutingModule);
export { FeaturedRoutingModule };
