"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var sample_service_1 = require("../services/sample.service");
var router_deprecated_1 = require("@angular/router-deprecated");
var StartpageComponent = (function () {
    function StartpageComponent(router, sampleService) {
        this.router = router;
        this.sampleService = sampleService;
        this.sample = [];
    }
    StartpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sampleService.getSome().then(function (sample) { return _this.sample = sample.slice(1, 5); });
    };
    StartpageComponent.prototype.gotoDetail = function (sample) {
        var link = ["SampleDetail", { id: sample.id }];
        this.router.navigate(link);
    };
    StartpageComponent = __decorate([
        core_1.Component({
            selector: "startpage",
            templateUrl: "app/startpage/startpage.component.html",
            styleUrls: ["app/startpage/startpage.component.css"]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, sample_service_1.SampleService])
    ], StartpageComponent);
    return StartpageComponent;
}());
exports.StartpageComponent = StartpageComponent;
//# sourceMappingURL=startpage.component.js.map