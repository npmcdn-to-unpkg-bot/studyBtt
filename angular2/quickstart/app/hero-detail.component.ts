/**
 * Created by Truong on 15-Jun-16.
 */
import {Component, Input, OnInit} from '@angular/core';
import {HeroObject} from './hero.object';
import {HeroService} from "./hero.service";
import {RouteParams} from "@angular/router-deprecated";

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    // phải khai báo input thì mới nhận được biến hero từ file khác gọi sang
    @Input() hero: HeroObject;
    
    constructor(private heroService: HeroService, private routeParams: RouteParams) {
        
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id).then(value => this.hero = value);
    }

    goBack() {
        window.history.back();
    }
}