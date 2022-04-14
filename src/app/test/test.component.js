import { Component } from '@angular/core';
import { Router } from '@angular/router';
let TestComponent = class TestComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onItemTap() {
        this.router.navigate(['/home']);
    }
    onButtonTap(args) {
        console.log(args.eventName);
        const button = args.object;
        console.log(button.text);
    }
};
TestComponent = __decorate([
    Component({
        selector: 'app-test',
        templateUrl: './test.component.html',
        styleUrls: ['./test.component.css']
    }),
    __metadata("design:paramtypes", [Router])
], TestComponent);
export { TestComponent };
