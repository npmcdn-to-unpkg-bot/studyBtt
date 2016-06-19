/**
 * Created by Truong on 15-Jun-16.
 */
// Imports for loading & configuring the in-memory web api
// phải fake data
import {XHRBackend} from '@angular/http';

import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';// import http ở main để những thằng component có thể dùng

import {AppComponent} from './app.component';

//add http vào 1 tham số thứ 2 của bootstrap có tác dụng như providers
bootstrap(AppComponent,
    [
        HTTP_PROVIDERS,
        {
            provide: XHRBackend,
            useClass: InMemoryBackendService
        }, // in-mem server
        {
            provide: SEED_DATA,
            useClass: InMemoryDataService
        }
    ]
);     // in-mem server data]);