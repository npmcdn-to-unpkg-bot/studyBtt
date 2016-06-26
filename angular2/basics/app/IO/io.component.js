"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Truong on 27-Jun-16.
 */
var core_1 = require('@angular/core');
var parent_component_1 = require('./parent.component');
var IoComponent = (function () {
    function IoComponent() {
        this.myFriend = 'truongbt';
    }
    IoComponent.prototype.handleMyEvent = function (arg) {
        console.log("in Component Demo handling myEvent", arg);
    };
    IoComponent = __decorate([
        core_1.Component({
            selector: 'io-demo',
            template: "\n        <div>Here is the main compnent that includes ParentComponent</div>\n        <io-demo [myname]=\"myFriend\" (myevent)=\"handleMyEvent($event)\"></io-demo>\n    ",
            directives: [parent_component_1.ParentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], IoComponent);
    return IoComponent;
}());
exports.IoComponent = IoComponent;
//# sourceMappingURL=io.component.js.map