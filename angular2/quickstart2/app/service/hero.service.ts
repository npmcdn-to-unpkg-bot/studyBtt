/**
 * Created by Truongbt on 19-Aug-16.
 */
import {Injectable} from '@angular/core';
//vì thằng Observable không có toPromise nên phải import hằng operator mà đã extend Observable
import 'rxjs/add/operator/toPromise';
import {Headers, Http} from '@angular/http';
import {Hero} from '../hero';
import {HEROESBTT} from '../mock-heroes';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';  // URL to web api
    constructor(private http:Http) {
    }

    //hàm http.get trả về một RxJS Observable (quản lí luồng bất đồng bộ dữ liệụ.
    // Dùng toPromise để convert nó về Promise. Nhưng thằng Observable lại không có hàm toPromise.
    // Chính vì thế nên ta sẽ dùng 1 'operator' mà đã extend từ thằng Observale bằng cách import rxjs...
    getHeroes():Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHeroesSlowly():Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROESBTT), 2000) // 2 seconds
        );
    }

    getHero(id:number):Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    save(hero:Hero):Promise<Hero> {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    // Add new Hero
    private post(hero:Hero):Promise<Hero> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Hero
    private put(hero:Hero):Promise<Hero> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(hero:Hero):Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
