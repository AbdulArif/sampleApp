import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { FeaturedRoutingModule } from './featured-routing.module';
import { FeaturedComponent } from './featured.component';
let FeaturedModule = class FeaturedModule {
};
FeaturedModule = __decorate([
    NgModule({
        imports: [NativeScriptCommonModule, FeaturedRoutingModule],
        declarations: [FeaturedComponent],
        schemas: [NO_ERRORS_SCHEMA],
    })
], FeaturedModule);
export { FeaturedModule };
