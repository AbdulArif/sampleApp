import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
let SearchComponent = class SearchComponent {
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
SearchComponent = __decorate([
    Component({
        selector: 'Search',
        templateUrl: './search.component.html',
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);
export { SearchComponent };
