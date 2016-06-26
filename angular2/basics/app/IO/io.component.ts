/**
 * Created by Truong on 27-Jun-16.
 */
import {Component} from '@angular/core';
import {ParentComponent} from './parent.component';

@Component({
    selector: 'io-demo',
    template: `
        <div>Here is the main compnent that includes ParentComponent</div>
        <io-demo [myname]="myFriend" (myevent)="handleMyEvent($event)"></io-demo>
    `,
    directives: [ParentComponent]
})

export class IoComponent {
    myFriend: string;
    
    constructor() {
        this.myFriend = 'truongbt';
    }
    
    handleMyEvent(arg) {
        console.log("in Component Demo handling myEvent", arg);
    }
}