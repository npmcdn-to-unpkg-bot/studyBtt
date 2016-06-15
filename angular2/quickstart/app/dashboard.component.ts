/**
 * Created by Truong on 15-Jun-16.
 */
import {Component, OnInit} from '@angular/core';
import {HeroObject} from './hero.object';
import {HeroService} from "./hero.service";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    public heroesTop: HeroObject[];

    constructor(private heroService: HeroService, private router: Router) {

    }

    ngOnInit() {
        this.heroService.getHeroes().then(
            value => {
                this.heroesTop = value.slice(1,5)
            }
        )
    }

    gotoDetail(hero: HeroObject) {
        //lấy ra link mà đã compare với router HeroDetail ở app.component
        let link = ['HeroDetail', {id: hero.id}];
        //redirect đến link đã compare
        this.router.navigate(link);
    }
}