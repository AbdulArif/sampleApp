import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { SettingsComponent } from './settings.component';
const routes = [{ path: '', component: SettingsComponent }];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = __decorate([
    NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule],
    })
], SettingsRoutingModule);
export { SettingsRoutingModule };
