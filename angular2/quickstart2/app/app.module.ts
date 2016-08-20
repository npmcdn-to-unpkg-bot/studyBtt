/**
 * Created by Truongbt on 19-Aug-16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule}     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {XHRBackend} from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService}               from './service/index';

import {routing} from './app.routing';
import {HeroService, HeroSearchService} from './service/index';
import {AppComponent}  from './app.component';
import {HeroesComponent}  from './hero/index';
import {DashboardComponent} from './dashboard/index';
import {HeroSearchComponent} from './hero-search/index';
import {HeroDetailComponent} from './hero-detail/index';

@NgModule({
    // méo hiểu, nhưng app nào cũng phải import thằng BrowerModule
    // the other modules that export material we need in this module

    // Notice that we also add the BrowserModule from @angular/platform-browser to the imports array.
    // This is the Angular Module that contains all the needed Angular bits and pieces to run our app in the browser.
    imports: [
        BrowserModule,
        // phải add FormModule ở đây để những chỗ khác có thể dùng form. cái này đã include ngModel
        FormsModule,
        routing,
        HttpModule
    ],
    // components and directives that belong to this module.
    // This array contains the list of all components, pipes, and directives 
    // that we created and that belong in our application's module.
    declarations: [
        AppComponent,
        HeroesComponent,
        // khai báo detail ở đây thì bên thằng heroes.component.html không cần import
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [
        // khai báo service ở đây thì bên thằng heroes.component không cần inject
        HeroService,
        HeroSearchService,
        {provide: XHRBackend, useClass: InMemoryBackendService}, // in-mem server
        {provide: SEED_DATA, useClass: InMemoryDataService}     // in-mem server data
    ],
    // identifies the root component that Angular should bootstrap when it starts the application.
    bootstrap: [AppComponent]
})
export class AppModule {
}
