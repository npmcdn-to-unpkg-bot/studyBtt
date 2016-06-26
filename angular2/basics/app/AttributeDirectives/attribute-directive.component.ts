/**
 * Created by Truong on 23-Jun-16.
 */
import {Component} from '@angular/core';
import {HighlightDirective} from './highlight.directive';
@Component({
    selector: 'my-attribute-directive',
    templateUrl: 'app/AttributeDirectives/attribute-directive.component.html',
    directives: [HighlightDirective]
})
export class AttributeDirectiveComponent {
    deleteHero() {
        console.log('delete hero');
    }
}
