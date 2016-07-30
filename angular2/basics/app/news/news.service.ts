/**
 * Created by Truong on 30-Jul-16.
 */
import 'rxjs/add/operator/toPromise';
import {Headers, Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {newsObject} from './news.object';

@Injectable()
export class NewsService {
    private listNews = 'https://server-newspaper.herokuapp.com/api/get-posts/10';

    constructor(private http:Http) {
    }

    getNews(): Promise<newsObject[]> {
        return this.http.get(this.listNews)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error occcured ', error);
        return Promise.reject(error.message || error);
    }
}