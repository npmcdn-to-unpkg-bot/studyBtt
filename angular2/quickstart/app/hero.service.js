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
//vì thằng Observable không có toPromise nên phải import hằng operator mà đã extend Observable
require('rxjs/add/operator/toPromise');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var core_1 = require('@angular/core');
var hero_data_1 = require('./hero.data');
// Linhlt : hàm injectable này là gì, sao comment vào vẫn chạy phà phà
// comment cái này lại thì bị lỗi skipitmyself
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        // gọi đến memory data
        this.heroesUrl = 'app/allheroes1'; // URL to web api
    }
    // Hàm này là hàm cũ, trước khi dùng data in memory
    // getHeroes() {
    //     return Promise.resolve(HEROES);
    // }
    HeroService.prototype.getHeroes = function () {
        //hàm http.get trả về một RxJS Observable (quản lí luồng bất đồng bộ dữ liệụ.
        // Dùng toPromise để convert nó về Promise. Nhưng thằng Observable lại không có hàm toPromise.
        // Chính vì thế nên ta sẽ dùng 1 'operator' mà đã extend từ thằng Observale bằng cách import rxjs...
        // Promise: http://freetuts.net/tim-hieu-promise-trong-javascript-es6-620.html
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; }, function (error) {
            console.log('reject me no r123', error);
            // return Promise.reject(error.message || error);
        })
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroesSlowlyBtt = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve(hero_data_1.HEROES), 2000);
        });
    };
    HeroService.prototype.getHeroesSlowly = function () {
        return new Promise(function (wtf) { return setTimeout(function () { return wtf(hero_data_1.HEROES); }, 2000); });
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes().then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
    };
    HeroService.prototype.post = function (hero) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.put = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.deleteHero = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    // hàm này kết hợp cả put và post, dùng cho heroDetailComponent
    HeroService.prototype.save = function (hero) {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    };
    HeroService.prototype.handleError = function (error) {
        console.log('An error occcured ', error);
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map