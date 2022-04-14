import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
let BrowseModule = class BrowseModule {
};
BrowseModule = __decorate([
    NgModule({
        imports: [NativeScriptCommonModule, BrowseRoutingModule],
        declarations: [BrowseComponent],
        schemas: [NO_ERRORS_SCHEMA],
    })
], BrowseModule);
export { BrowseModule };
