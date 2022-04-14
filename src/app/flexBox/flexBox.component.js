import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
let FlexBoxComponent = class FlexBoxComponent {
    constructor() { }
    ngOnInit() {
    }
    onDrawerButtonTap() {
        const sideDrawer = Application.getRootView();
        sideDrawer.showDrawer();
    }
};
FlexBoxComponent = __decorate([
    Component({
        selector: 'app-flexBox',
        templateUrl: './flexBox.component.html',
        styleUrls: ['./flexBox.component.css']
    }),
    __metadata("design:paramtypes", [])
], FlexBoxComponent);
export { FlexBoxComponent };
