/**
 * Created by Truong on 15-Jun-16.
 */
//vì thằng Observable không có toPromise nên phải import hằng operator mà đã extend Observable
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {HEROES} from './hero.data';
import {HeroObject} from './hero.object';

// Linhlt : hàm injectable này là gì, sao comment vào vẫn chạy phà phà
// comment cái này lại thì bị lỗi skipitmyself
@Injectable()
export class HeroService {
    // gọi đến memory data
    private heroesUrl = 'app/allheroes1';  // URL to web api
    constructor(private http: Http) { }
    // Hàm này là hàm cũ, trước khi dùng data in memory
    // getHeroes() {
    //     return Promise.resolve(HEROES);
    // }

    getHeroes(): Promise<HeroObject[]> {
        //hàm http.get trả về một RxJS Observable (quản lí luồng bất đồng bộ dữ liệụ.
        // Dùng toPromise để convert nó về Promise. Nhưng thằng Observable lại không có hàm toPromise.
        // Chính vì thế nên ta sẽ dùng 1 'operator' mà đã extend từ thằng Observale bằng cách import rxjs...
// Promise: http://freetuts.net/tim-hieu-promise-trong-javascript-es6-620.html
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(
                response => response.json().data,
                function(error) {
                    console.log('reject me no r123', error);
                    // return Promise.reject(error.message || error);
                }
            )
            // .then(() => console.log("then (2)"))
            .catch(this.handleError);
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

    private post(hero: HeroObject): Promise<HeroObject> {
        let headers = new Headers({
            'Content-Type' : 'application/json'
        });

        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(hero: HeroObject) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    deleteHero(hero: HeroObject) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    // hàm này kết hợp cả put và post, dùng cho heroDetailComponent
    public save(hero): Promise<HeroObject> {
        if (hero.id) {
            return this.put(hero);
        }

        return this.post(hero);
    }

    private handleError(error: any) {
        console.log('An error occcured ', error);
        return Promise.reject(error.message || error);
    }
}