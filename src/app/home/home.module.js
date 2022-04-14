import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    NgModule({
        imports: [NativeScriptCommonModule, HomeRoutingModule],
        declarations: [HomeComponent],
        schemas: [NO_ERRORS_SCHEMA],
    })
], HomeModule);
export { HomeModule };
