import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
let TestModule = class TestModule {
};
TestModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            TestRoutingModule
        ],
        declarations: [TestComponent],
        schemas: [NO_ERRORS_SCHEMA],
    })
], TestModule);
export { TestModule };
