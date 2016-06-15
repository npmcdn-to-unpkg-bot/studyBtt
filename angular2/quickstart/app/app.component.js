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
/**
 * Created by Truong on 15-Jun-16.
 */
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var hero_component_1 = require("./hero.component");
var hero_service_1 = require("./hero.service");
var dashboard_component_1 = require("./dashboard.component");
var hero_detail_component_1 = require("./hero-detail.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "My app Angular2";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //để dùng được routerLink, phải add thêm <base href="/"> ở file html
            // route-outlet để hiển thị component mà đã match với router
            template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['Dashboard']\">Dasboard</a>\n            <a [routerLink]=\"['Heroes']\">Heroes</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                //nhờ đã cắm service vào đây r, nên những component con không cần phải cắm vào provider nữa
                hero_service_1.HeroService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/heroes',
                name: 'Heroes',
                component: hero_component_1.HeroComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: '/detail/:id',
                name: 'HeroDetail',
                component: hero_detail_component_1.HeroDetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map