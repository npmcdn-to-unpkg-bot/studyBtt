/**
 * Created by Truong on 15-Jun-16.
 */
import {Component, OnInit} from '@angular/core';
import {HeroObject} from './hero.object';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Router} from "@angular/router-deprecated";

@Component({
    //để dùng được hàm injector thì phải khai báo providers trong @Component
    // providers: [HeroService],
    selector: 'my-hero',
    templateUrl: 'app/hero.component.html',
    // phải khai báo directives để dùng, nếu không sẽ không hiện thẻ hero-detail
    directives: [HeroDetailComponent],
    styleUrls: ['app/hero.component.css']
})

export class HeroComponent implements OnInit {
    public heroes:HeroObject[];
    public selectedHero;
    addingHero = false;
    error:any;

    ngOnInit() {
        this.getHeroes();
    }

    // khởi tạo luôn ở trong hàm constructor này, để không phải new nhiều lần heroService
    constructor(private heroService:HeroService, private router:Router) {

    }

    getHeroes() {
        // khi đã dùng promise ở component service thì không thể truyền trực tiếp như thế này
        // this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(value => {
            this.heroes = value
        });
    }

    selectHero(hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero:HeroObject) {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    }

    delete(hero:HeroObject, event:any) {
        event.stopPropagation();
        this.heroService
            .deleteHero(hero)
            .then(
                res => {
                    this.heroes = this.heroes.filter(h => h !== hero);
                    if (this.selectedHero === hero) {
                        this.selectedHero = null;
                    }
                }
            )
            .catch(error => this.error = error)
    }

    testclick(event: any) {
        console.log("Event : ", event);
    }
}