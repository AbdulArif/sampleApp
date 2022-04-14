import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { SearchComponent } from './search.component';
const routes = [{ path: '', component: SearchComponent }];
let SearchRoutingModule = class SearchRoutingModule {
};
SearchRoutingModule = __decorate([
    NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule],
    })
], SearchRoutingModule);
export { SearchRoutingModule };
