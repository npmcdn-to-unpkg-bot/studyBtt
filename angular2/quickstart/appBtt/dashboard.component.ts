/**
 * Created by MSI on 15-Jun-16.
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from './heroObject';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'appBtt/dashboard.component.html'
})

export class dashboardComponent implements OnInit {
    heroes:Hero[] = [];

    constructor(private heroService:HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes().then(value => {this.heroes = value.slice(1, 5)});
    }

    gotoDetail() {

    }
}