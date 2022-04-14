import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { SlideInOnTopTransition, } from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';
import { Application } from '@nativescript/core';
let AppComponent = class AppComponent {
    constructor(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    ngOnInit() {
        this._activatedUrl = '/home';
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => (this._activatedUrl = event.urlAfterRedirects));
    }
    get sideDrawerTransition() {
        return this._sideDrawerTransition;
    }
    isComponentSelected(url) {
        return this._activatedUrl === url;
    }
    onNavItemTap(navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: 'fade',
            },
        });
        const sideDrawer = Application.getRootView();
        sideDrawer.closeDrawer();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'ns-app',
        templateUrl: 'app.component.html',
    }),
    __metadata("design:paramtypes", [Router, RouterExtensions])
], AppComponent);
export { AppComponent };
