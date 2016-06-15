/**
 * Created by Truong on 14-Jun-16.
 */
import {Component} from '@angular/core';
import {HeroService} from './hero.service';
import {heroComponent} from './hero';
import {heroDetailComponent} from './hero.detail.component';
import {dashboardComponent} from './dashboard.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    //để dùng được routerLink, phải add thêm <base href="/"> ở file html
    // route-outlet để hiển thị component mà đã match với router
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
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
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboardComponent,
        // useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: heroDetailComponent
    }
])
export class heroApp {
    title = "Tour of Heroes123";
}