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
var core_1 = require('@angular/core');
var news_service_1 = require('./news.service');
var NewsComponent = (function () {
    function NewsComponent(newsService) {
        this.newsService = newsService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService.getNews().then(function (value) {
            _this.listNews = value;
            console.log(_this.listNews[0].title);
        });
    };
    NewsComponent = __decorate([
        core_1.Component({
            //để dùng được hàm injector thì phải khai báo providers trong @Component
            // providers: [HeroService],
            selector: 'news',
            templateUrl: 'app/news/news.component.html',
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map