import {Component} from '@angular/core';
@Component({
    selector: 'appBtt',
    template: '<h1>{{title}} My First Angular 2 App</h1>'
})
export class AppComponentBtt {
    title = 'Tour of Heroes';
    hero = 'Windstorm';
}