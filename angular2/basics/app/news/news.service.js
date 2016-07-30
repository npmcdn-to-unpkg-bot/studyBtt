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
 * Created by Truong on 30-Jul-16.
 */
require('rxjs/add/operator/toPromise');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.listNews = 'https://server-newspaper.herokuapp.com/api/get-posts/10';
    }
    NewsService.prototype.getNews = function () {
        return this.http.get(this.listNews)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.handleError = function (error) {
        console.log('An error occcured ', error);
        return Promise.reject(error.message || error);
    };
    NewsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map