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
 * Created by Truong on 12-Jun-16.
 */
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var heroObject_1 = require('./heroObject');
var hero_service_1 = require('./hero.service');
var heroDetailComponent = (function () {
    function heroDetailComponent(heroService, routeParams) {
        this.heroService = heroService;
        this.routeParams = routeParams;
    }
    heroDetailComponent.prototype.ngOnInit = function () {
        var id = +this.routeParams.get('id');
    };
    heroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', heroObject_1.Hero)
    ], heroDetailComponent.prototype, "hero", void 0);
    heroDetailComponent = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            template: "\n    <div *ngIf=\"hero\">\n        <h2>{{hero.name}} details!</h2>\n        <div><label>id: </label>{{hero.id}}</div>\n        <div>\n            <label for=\"\">name: </label>\n            <input [(ngModel)]=\"hero.name\" placeholder=\"Name bi\u1EBFt th\u1EBF \u0111\u00E9o n\u00E0o duodwjc\">\n            <button (click)=\"goBack()\">Back</button>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_deprecated_1.RouteParams])
    ], heroDetailComponent);
    return heroDetailComponent;
}());
exports.heroDetailComponent = heroDetailComponent;
//# sourceMappingURL=hero.detail.component.js.map