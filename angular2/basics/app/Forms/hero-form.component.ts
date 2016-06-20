/**
 * Created by MSI on 20-Jun-16.
 */
import {Component} from '@angular/core';
import {NgForm} from '@angular/common';

import {HeroObject} from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/Forms/hero-form.component.html'
})

export class HeroFormComponent {
    active = true;
    submitted = false;

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new HeroObject(18, 'Dr IQ', this.powers[1], 'Chuck Overstreet');

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    //phải thêm biến active vì khi ấn nút rs form, sau đó nhập vào box name
    // => input đó không còn là pristine => khi ấn new hero phát nữa thì sẽ bị hiện message error
    //Linh lt : không hiểu chỗ này, sao form lại được tạo lại ????
    newHero() {
        this.model = new HeroObject(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 2000);
    }
}