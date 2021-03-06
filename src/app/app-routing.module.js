import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'browse',
        loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule),
    },
    {
        path: 'search',
        loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
    },
    {
        path: 'featured',
        loadChildren: () => import('~/app/featured/featured.module').then((m) => m.FeaturedModule),
    },
    {
        path: 'settings',
        loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
    },
    {
        path: 'test',
        loadChildren: () => import('~/app/test/test.module').then((m) => m.TestModule),
    },
    {
        path: 'flexBox',
        loadChildren: () => import('~/app/flexBox/flexBox.module').then((m) => m.FlexBoxModule),
    },
    {
        path: 'apiCall',
        loadChildren: () => import('~/app/apiCall/apiCall.module').then((m) => m.ApiCallModule),
    },
    {
      path: 'chart',
        loadChildren: () => import('~/app/chart/chart.module').then((m) => m.ChartModule),
      },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [NativeScriptRouterModule.forRoot(routes)],
        exports: [NativeScriptRouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
