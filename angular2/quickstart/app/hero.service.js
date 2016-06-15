"use strict";
var hero_data_1 = require('./hero.data');
// @Injectable()
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(hero_data_1.HEROES);
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
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map