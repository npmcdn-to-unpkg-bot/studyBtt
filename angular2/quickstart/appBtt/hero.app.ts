/**
 * Created by Truong on 14-Jun-16.
 */
import {Component} from '@angular/core';
import {HeroService} from './hero.service';
import {heroComponent} from './hero';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    //để dùng được routerLink, phải add thêm <base href="/"> ở file html
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['Heroes']">Heroes</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/heroes', // sẽ match với url
        name: 'Heroes', //tên chính thức của route, nó phải bắt đầu bằng chữ viết hoa
        component: heroComponent //component mà router sẽ tạo khi navigating
    }
])
export class heroApp {
    title = "Tour of Heroes123";
}