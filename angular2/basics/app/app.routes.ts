/**
 * Created by Truong on 23-Jun-16.
 */
// import {provideRouter, RouterConfig} from '@angular/router-deprecated';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {UserInputComponent} from './userInput/userInput.component';
import {HeroFormComponent} from './Forms/hero-form.component';
import {AttributeDirectiveComponent} from './AttributeDirectives/attribute-directive.component';
import {PipeComponent} from './pipe/pipe.component';

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
        path: '/attribute-directive',
        name: 'AD',
        component: AttributeDirectiveComponent
    },
    {
        path: '/pipe',
        name: 'Pipe',
        component: PipeComponent
    }
])

export class APP_ROUTER {
}