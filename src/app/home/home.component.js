import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
let HomeComponent = class HomeComponent {
    constructor() {
        // Use the component constructor to inject providers.
    }
    ngOnInit() {
        // Init your component properties here.
    }
    onDrawerButtonTap() {
        const sideDrawer = Application.getRootView();
        sideDrawer.showDrawer();
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'Home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
export { HomeComponent };
