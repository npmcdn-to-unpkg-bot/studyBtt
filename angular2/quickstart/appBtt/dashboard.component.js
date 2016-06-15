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
 * Created by MSI on 15-Jun-16.
 */
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var dashboardComponent = (function () {
    function dashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    dashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (value) { _this.heroes = value.slice(1, 5); });
    };
    dashboardComponent.prototype.gotoDetail = function () {
    };
    dashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'appBtt/dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], dashboardComponent);
    return dashboardComponent;
}());
exports.dashboardComponent = dashboardComponent;
//# sourceMappingURL=dashboard.component.js.map