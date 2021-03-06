import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
let SearchModule = class SearchModule {
};
SearchModule = __decorate([
    NgModule({
        imports: [NativeScriptCommonModule, SearchRoutingModule],
        declarations: [SearchComponent],
        schemas: [NO_ERRORS_SCHEMA],
    })
], SearchModule);
export { SearchModule };
