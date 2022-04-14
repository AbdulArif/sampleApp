import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
let BrowseComponent = class BrowseComponent {
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
BrowseComponent = __decorate([
    Component({
        selector: 'Browse',
        templateUrl: './browse.component.html',
        styleUrls: ['./browse.component.css']
    }),
    __metadata("design:paramtypes", [])
], BrowseComponent);
export { BrowseComponent };
