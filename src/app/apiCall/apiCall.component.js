import { Component } from '@angular/core';
import { DiseaseService } from '../services/diseases.services';
let ApiCallComponent = class ApiCallComponent {
    constructor(diseaseService) {
        this.diseaseService = diseaseService;
    }
    ngOnInit() {
        console.log('hello ..............');
        this.diseaseService.getData().subscribe({
            next: (res) => { console.log(res); },
            error: (err) => { console.log("This erroor is: " + err.error); }
        });
        this.getData();
    }
    getData() {
        this.diseaseService.getData().subscribe({
            next: (res) => { console.log(res); },
            error: (err) => { console.log(err); }
        });
    }
};
ApiCallComponent = __decorate([
    Component({
        selector: 'app-apiCall',
        templateUrl: './apiCall.component.html',
        styleUrls: ['./apiCall.component.css']
    }),
    __metadata("design:paramtypes", [DiseaseService])
], ApiCallComponent);
export { ApiCallComponent };
