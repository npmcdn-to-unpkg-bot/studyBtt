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
 * Created by Truong on 14-Jun-16.
 */
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var hero_1 = require('./hero');
var hero_detail_component_1 = require('./hero.detail.component');
var dashboard_component_1 = require('./dashboard.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var heroApp = (function () {
    function heroApp() {
        this.title = "Tour of Heroes";
    }
    heroApp = __decorate([
        core_1.Component({
            selector: 'my-app',
            //để dùng được routerLink, phải add thêm <base href="/"> ở file html
            // route-outlet để hiển thị component mà đã match với router
            template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['Heroes']\">Heroes</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                hero_service_1.HeroService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/heroes',
                name: 'Heroes',
                component: hero_1.heroComponent //component mà router sẽ tạo khi navigating
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.dashboardComponent,
            },
            {
                path: '/detail/:id',
                name: 'HeroDetail',
                component: hero_detail_component_1.heroDetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], heroApp);
    return heroApp;
}());
exports.heroApp = heroApp;
//# sourceMappingURL=hero.app.js.map