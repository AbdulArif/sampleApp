import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { BrowseComponent } from './browse.component';
const routes = [{ path: '', component: BrowseComponent }];
let BrowseRoutingModule = class BrowseRoutingModule {
};
BrowseRoutingModule = __decorate([
    NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule],
    })
], BrowseRoutingModule);
export { BrowseRoutingModule };
