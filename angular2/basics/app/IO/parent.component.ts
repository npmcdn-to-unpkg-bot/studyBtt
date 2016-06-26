/**
 * Created by Truong on 27-Jun-16.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'io-demo',
    template: `
        <div (click)="fireMyEvent()">
            Here is Parent Component and here's 'myname': {{myname}}        
        </div>
    `
})

export class ParentComponent {
    @Input() myname: string;
    @Output() myevent = new EventEmitter();
    // This component displays the incoming “myname” in the view 
    // but when we try to access it in ParentComp constructor it is not yet defined. 
    // That is because input properties are not available until the view has rendered 
    // which happens after the constructor function runs.
    constructor() {
        console.log("Parent Component, myname not yet defined: ", this.myname);
    }

    fireMyEvent() {
        this.myevent.emit(['abc', 'def']);
    }
}