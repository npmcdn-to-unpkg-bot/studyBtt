/**
 * Created by Truong on 12-Jun-16.
 */
import {Component, Input} from '@angular/core';
import {Hero} from './heroObject';
@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label for="">name: </label>
            <input [(ngModel)]="hero.name" placeholder="Name">
        </div>
    </div>
    `
})

export class heroDetailComponent {
    @Input()
    hero: Hero;
}