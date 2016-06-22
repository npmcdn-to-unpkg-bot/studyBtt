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
 * Created by MSI on 20-Jun-16.
 */
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this.active = true;
        this.submitted = false;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new hero_1.HeroObject(18, 'Dr IQ', this.powers[1], 'Chuck Overstreet');
    }
    HeroFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    //phải thêm biến active vì khi ấn nút rs form, sau đó nhập vào box name
    // => input đó không còn là pristine => khi ấn new hero phát nữa thì sẽ bị hiện message error
    // When NgIf is false, Angular physically removes the element subtree from the DOM.
    // It destroys components in the subtree, along with their state, potentially freeing up substantial resources
    // and resulting in better performance for the user.
    //Linh lt : không hiểu chỗ này, sao form lại được tạo lại ????
    HeroFormComponent.prototype.newHero = function () {
        var _this = this;
        this.model = new hero_1.HeroObject(42, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 2000);
    };
    HeroFormComponent = __decorate([
        core_1.Component({
            selector: 'hero-form',
            templateUrl: 'app/Forms/hero-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map