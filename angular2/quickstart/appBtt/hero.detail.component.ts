/**
 * Created by Truong on 12-Jun-16.
 */
import {Component, Input, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {Hero} from './heroObject';
import {HeroService} from './hero.service';

@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label for="">name: </label>
            <input [(ngModel)]="hero.name" placeholder="Name biết thế đéo nào duodwjc">
            <button (click)="goBack()">Back</button>
        </div>
    </div>
    `
})

export class heroDetailComponent implements OnInit {
    @Input()
    hero:Hero;

    constructor(private heroService: HeroService, private routeParams: RouteParams) {

    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
    }

    goBack() {
        window.history.back();
    }
}