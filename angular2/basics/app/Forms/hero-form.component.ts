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
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new HeroObject(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}