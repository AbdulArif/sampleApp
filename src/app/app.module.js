import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiseaseService } from './services/diseases.services';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        bootstrap: [AppComponent],
        imports: [AppRoutingModule,
            NativeScriptModule,
            HttpClientModule,
            NativeScriptHttpClientModule,
            NativeScriptUISideDrawerModule],
        declarations: [AppComponent],
        providers: [DiseaseService],
        schemas: [NO_ERRORS_SCHEMA],
    })
], AppModule);
export { AppModule };
