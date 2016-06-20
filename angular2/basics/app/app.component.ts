/**
 * Created by MSI on 20-Jun-16.
 */
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {UserInputComponent} from './userInput/userInput.component';
import {HeroFormComponent} from './Forms/hero-form.component';

@Component({
    selector: 'my-basics',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['UserInput']">User Input</a>
            <a [routerLink]="['Form']">Form</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [UserInputComponent, ROUTER_DIRECTIVES, HeroFormComponent],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/userInput',
        name: 'UserInput',
        component: UserInputComponent
    },
    {
        path: '/form',
        name: 'Form',
        component: HeroFormComponent
    },
])

export class AppComponent {
    public title = "Basic Angular 2";
}