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
 * Created by MSI on 20-Jun-16.
 */
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var userInput_component_1 = require('./userInput/userInput.component');
var hero_form_component_1 = require('./Forms/hero-form.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Basic Angular 2";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-basics',
            template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['UserInput']\">User Input</a>\n            <a [routerLink]=\"['Form']\">Form</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
            directives: [userInput_component_1.UserInputComponent, router_deprecated_1.ROUTER_DIRECTIVES, hero_form_component_1.HeroFormComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/userInput',
                name: 'UserInput',
                component: userInput_component_1.UserInputComponent
            },
            {
                path: '/form',
                name: 'Form',
                component: hero_form_component_1.HeroFormComponent
            },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map