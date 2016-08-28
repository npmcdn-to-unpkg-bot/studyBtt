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
 * Created by Truong on 23-Jun-16.
 */
// import {provideRouter, RouterConfig} from '@angular/router-deprecated';
var router_deprecated_1 = require('@angular/router-deprecated');
var userInput_component_1 = require('./userInput/userInput.component');
var hero_form_component_1 = require('./Forms/hero-form.component');
var attribute_directive_component_1 = require('./AttributeDirectives/attribute-directive.component');
var pipe_component_1 = require('./pipe/pipe.component');
var APP_ROUTER = (function () {
    function APP_ROUTER() {
    }
    APP_ROUTER = __decorate([
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
            {
                path: '/attribute-directive',
                name: 'AD',
                component: attribute_directive_component_1.AttributeDirectiveComponent
            },
            {
                path: '/pipe',
                name: 'Pipe',
                component: pipe_component_1.PipeComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], APP_ROUTER);
    return APP_ROUTER;
}());
exports.APP_ROUTER = APP_ROUTER;
//# sourceMappingURL=app.routes.js.map