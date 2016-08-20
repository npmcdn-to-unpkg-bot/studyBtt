/**
 * Created by Truongbt on 20-Aug-16.
 */
import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';
import {HeroSearchService} from '../service/index';
import {Hero} from '../hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: ['hero-search.component.css'],
})

export class HeroSearchComponent implements OnInit {
    heroes:Observable<Hero[]>;
    // Push a search term into the observable stream.
    // A Subject is a producer of an observable event stream;
    // searchTerms produces an Observable of strings, the filter criteria for the name search.
    // Each call to search puts a new string into this subject's observable stream by calling next.
    private searchTerms = new Subject<string>();

    search(term:string):void {
        this.searchTerms.next(term);
    }

    constructor(private heroSearchService:HeroSearchService, private router:Router) {
    }

    ngOnInit():void {
        // Nếu ta truyền trực tiếp mỗi lần gõ phím đến HeroSearchService, thì sẽ có rất nhiều request HTTP
        // Điều này sẽ làm tốn tài nguyên của server và network
        // Ta có thể xâu chuỗi các Observable operator thành string Observable để giảm lượng request
        // Step :
        // 1. debounceTime(300) : tạm dừng 300ms trước khi chuyền string
        // 2. distinctUntilChanged : chắc chắn rằng ta chỉ gửi request khi mà filter text được thay đổi => tránh lặp lại request có cùng nội dung
        // 3. switchMap : gọi đến search service của ta với mỗi text search đã được truyền qua `debounce` và `distinctUntilChanged`
        // Nó sẽ hủy và loại bỏ những search observables trước đó, và chỉ trả về search service observable cuối cùng
        // 4. catch : chặn việc observable bị lỗi.
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([])
            )
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero:Hero):void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
