/**
 * Created by Truong on 13-Jun-16.
 */
import {Injectable} from "@angular/core";

import {HEROES} from './mock-heroes';
import {Hero} from "./heroObject";

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowlyBtt() {
        return new Promise<Hero[]>(function (resolve, reject) {
            setTimeout(resolve(HEROES), 2000);
        });
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(
            wtf => setTimeout(
                () => wtf(HEROES),
                2000
            ) // 2 seconds
        );
    }
}