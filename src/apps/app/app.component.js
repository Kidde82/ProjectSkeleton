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
var router_deprecated_1 = require("@angular/router-deprecated");
var sample_service_1 = require("../services/sample.service");
var startpage_component_1 = require("../startpage/startpage.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "The title";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<router-outlet></router-outlet>\n\t",
            styleUrls: ["app/app.component.css"],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                sample_service_1.SampleService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: "/startpage",
                name: "Startpage",
                component: startpage_component_1.StartpageComponent,
                useAsDefault: true
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map