import { Component } from '@angular/core';
import { Application, Dialogs, login } from '@nativescript/core';
let FeaturedComponent = class FeaturedComponent {
    constructor() {
        this.listPickerCountries = ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland",
            "China", "Czech Republic", "Germany", "Spain", "Ethiopia", "Croatia", "Hungary",
            "Italy", "Jamaica", "Romania", "Russia", "United States"];
        this.selectedListPickerIndex = 0;
        // Use the component constructor to inject providers.
    }
    ngOnInit() {
        // Init your component properties here.
    }
    onDrawerButtonTap() {
        const sideDrawer = Application.getRootView();
        sideDrawer.showDrawer();
    }
    displayAlertDialog() {
        // >> alert-dialog-code
        let options = {
            title: "Race selection",
            message: "Race chosen: Unicorn",
            okButtonText: "OK"
        };
        Dialogs.alert(options).then(() => {
            console.log("Race chosen!");
        });
        // << alert-dialog-code
    }
    confirmDialog() {
        let options = {
            title: "Login Form",
            message: "Enter your credentials",
            okButtonText: "Login",
            cancelButtonText: "Cancel",
            //neutralButtonText: "Neutral",
            userNameHint: "Enter your username",
            passwordHint: "Enter your password",
            userName: "john_doe",
            password: "123456"
        };
        login(options).then((loginResult) => {
            console.log(loginResult.result);
        });
    }
};
FeaturedComponent = __decorate([
    Component({
        selector: 'Featured',
        templateUrl: './featured.component.html',
        styleUrls: ['./featured.component.css']
    }),
    __metadata("design:paramtypes", [])
], FeaturedComponent);
export { FeaturedComponent };
