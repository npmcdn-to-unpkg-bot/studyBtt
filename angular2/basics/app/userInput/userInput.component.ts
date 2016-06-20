/**
 * Created by MSI on 20-Jun-16.
 */
import {Component} from '@angular/core';
import {KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4} from './keyup.component';

@Component({
    selector: 'user-input',
    templateUrl: '/app/userInput/userInput.component.html',
    directives: [KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4]
})

export class UserInputComponent {
    
}