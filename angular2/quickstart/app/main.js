"use strict";
/**
 * Created by Truong on 15-Jun-16.
 */
// Imports for loading & configuring the in-memory web api
// phải fake data
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_2 = require('@angular/http'); // import http ở main để những thằng component có thể dùng
var app_component_1 = require('./app.component');
//add http vào 1 tham số thứ 2 của bootstrap có tác dụng như providers
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_2.HTTP_PROVIDERS,
    {
        provide: http_1.XHRBackend,
        useClass: angular2_in_memory_web_api_1.InMemoryBackendService
    },
    {
        provide: angular2_in_memory_web_api_1.SEED_DATA,
        useClass: in_memory_data_service_1.InMemoryDataService
    }
]); // in-mem server data]);
//# sourceMappingURL=main.js.map