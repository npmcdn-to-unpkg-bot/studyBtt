/**
 * Created by Truong on 23-Jun-16.
 */
import {Component} from '@angular/core';
import {CustomPipe} from './custom.pipe.component';

@Component({
    moduleId: module.id,
    selector: 'my-pipe',
    templateUrl: 'pipe.component.html',
    pipes: [CustomPipe]
})

export class PipeComponent {
    private birthday = new Date(1988, 3, 15); // April 15, 1988
    clickMessage: string;
    toggle = true; // start with true == shortDate
// linhlt: hàm get format này là ntn, tại sao lại chạy 2 lần khi ấn button
    get format() {
        return this.toggle ? 'shortDate' : 'fullDate';
    }

    toggleFormat() {
        this.toggle = !this.toggle;
    }
}