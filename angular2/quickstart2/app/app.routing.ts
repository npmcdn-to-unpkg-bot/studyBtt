/**
 * Created by Truongbt on 20-Aug-16.
 */
import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent} from './hero/heroes.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const appRoutes:Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(appRoutes);
