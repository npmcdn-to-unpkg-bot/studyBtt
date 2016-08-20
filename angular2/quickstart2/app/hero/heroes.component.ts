import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from '../hero';
import {HeroService} from '../service/index';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['../app.component.css'],
})

export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes:Hero[];
    selectedHero:Hero;

    ngOnInit():void {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    constructor(private router: Router, private heroService:HeroService) {
    }

    getHeroes():void {
        // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    addHero(): void {
        this.addingHero = true;
        this.selectedHero = null;
    }

    deleteHero(hero: Hero, event: any): void {
        // chặn việc nhảy sang hàm onSelect. Vì hàm delete này nằm trong hàm onSelect
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }

    closeFormAdd(savedHero: Hero): void {
        console.log('close form add', savedHero);
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

}
