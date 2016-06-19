/**
 * Created by Truong on 15-Jun-16.
 */
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
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
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; //true if navigated here
    
    constructor(private heroService: HeroService, private routeParams: RouteParams) {
        
    }

    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            // dấu + để conver sang dạng int
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.heroService.getHero(id).then(value => this.hero = value);
        } else {
            //Dành cho case add hero
            console.log("don't exist hero id");
            this.hero = new HeroObject();
            this.navigated = false;
        }
    }

    save() {
        this.heroService
            .save(this.hero)
            .then(
                value => {
                    this.hero = value; // saved hero, w/ id if new
                    this.goBack(value);
                }
            )
            .catch(
                error => {
                    this.error = error;
                }
            )
    }

    goBack(savedHero: HeroObject = null) {
        this.close.emit(savedHero);
        if (this.navigated)
            window.history.back();
    }
}