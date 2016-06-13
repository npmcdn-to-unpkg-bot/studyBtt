import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Hero} from './heroObject';
import {heroDetailComponent} from './hero.detail.component';
import {HeroService} from './hero.service';

@Component({
    //để dùng được hàm injector thì phải khai báo providers trong @Component
    providers: [HeroService],
    selector: 'hero',
    template: `
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
             [class.selectedHero]="hero === selectedHero"
            (click)="selectHero(hero)">
                <span class="badge">{{hero.id}} : </span>{{hero.name}}
            </li>
        </ul>
        <button (click)="UnselectHero()">UnselectedHero</button>
        
        <hero-detail [hero]="selectedHero"></hero-detail>
        `,
    styles: [`
    .selectedHero {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
    // phải khai báo directives để dùng, nếu không sẽ không hiện thẻ hero-detail
    directives: [heroDetailComponent]
})
export class heroComponent implements OnInit{
    //nên gọi hàm getHeroes ở hàm ngOnInit này, không nên gọi ở hàm constructor, hàm đấy chỉ để khởi tạo biến
    // tránh những logic phức tạp ở đó
    ngOnInit() {
        this.getHeroes();
    }

    public heroes:Hero[];
    // khởi tạo luôn ở trong hàm constructor này, để không phải new nhiều lần heroService
    constructor(private heroService:HeroService) {
    };

    getHeroes() {
        // khi đã dùng promise ở component service thì không thể truyền trực tiếp như thế này
        // this.heroes = this.heroService.getHeroes();

        this.heroService.getHeroesSlowlyBtt().then(value => {this.heroes = value});
    }

    selectedHero:Hero;

    selectHero(hero:Hero) {
        this.selectedHero = hero
    };

    UnselectHero() {
        this.selectedHero = null;
    };
}