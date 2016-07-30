/**
 * Created by MSI on 20-Jun-16.
 */
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';// import http ở main để những thằng component có thể dùng
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {UserInputComponent} from './userInput/userInput.component';
import {HeroFormComponent} from './Forms/hero-form.component';
import {NewsComponent} from './news/news.component';
import {NewsService} from './news/news.service';

@Component({
    selector: 'my-basics',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['UserInput']">User Input</a>
            <a [routerLink]="['Form']">Form</a>
            <a [routerLink]="['News']">News</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [UserInputComponent, ROUTER_DIRECTIVES, HeroFormComponent],
    providers: [ROUTER_PROVIDERS, NewsService, HTTP_PROVIDERS]
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
    {
        path: '/news',
        name: 'News',
        component: NewsComponent
    }
])

export class AppComponent {
    public title = "Basic Angular 2";
}