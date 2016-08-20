"use strict";
var router_1 = require('@angular/router');
var login_routing_1 = require('./login.routing');
var can_deactivate_guard_service_1 = require('./can-deactivate-guard.service');
var crisisCenterRoutes = [
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    {
        path: 'crisis-center',
        loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
    }
];
var appRoutes = login_routing_1.loginRoutes.concat(crisisCenterRoutes);
exports.appRoutingProviders = [
    login_routing_1.authProviders,
    can_deactivate_guard_service_1.CanDeactivateGuard
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map