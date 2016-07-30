/**
 * Created by Truong on 30-Jul-16.
 */
import {Component, OnInit} from '@angular/core';
import {newsObject} from './news.object';
import {NewsService} from './news.service';

@Component({
    //để dùng được hàm injector thì phải khai báo providers trong @Component
    // providers: [HeroService],
    selector: 'news',
    templateUrl: 'app/news/news.component.html',
    // phải khai báo directives để dùng, nếu không sẽ không hiện thẻ hero-detail
})

export class NewsComponent implements OnInit {
    public listNews: newsObject[];

    ngOnInit() {
        this.getNews();
    }

    constructor(private newsService:NewsService) {
    }

    getNews() {
        this.newsService.getNews().then(value => {
            this.listNews = value;
            console.log(this.listNews[0].title);
        });
    }
}