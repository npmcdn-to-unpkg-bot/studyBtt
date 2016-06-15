/**
 * Created by Truong on 15-Jun-16.
 */
import {Injectable} from '@angular/core';
import {HEROES} from './hero.data';
import {HeroObject} from './hero.object';

// @Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowlyBtt() {
        return new Promise<HeroObject[]>(function (resolve, reject) {
            setTimeout(resolve(HEROES), 2000)
        });
    }

    getHeroesSlowly() {
        return new Promise<HeroObject[]>(
            wtf => setTimeout(
                () => wtf(HEROES),
                2000
            )
        )
    }

    getHero(id: number) {
        return this.getHeroes().then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}