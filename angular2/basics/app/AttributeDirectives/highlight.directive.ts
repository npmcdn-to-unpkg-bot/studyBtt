/**
 * Created by Truong on 23-Jun-16.
 */
import {Directive, ElementRef, Input, HostListener, OnInit} from '@angular/core';
@Directive({
    selector: '[myHighlight]'
})

//ElementRef là một service cho phép ta truy cập trực tiếp vào DOM element thông qua nativeElement property
export class HighlightDirective {
    private _defaultColor = 'red';
    private el: HTMLElement;
    constructor(el: ElementRef) { this.el = el.nativeElement; }
    @Input('myHighlight') highlightColor: string;
    @HostListener('mouseenter') onMouseEnter() {
        console.log(this.highlightColor);
        this.highlight(this.highlightColor || this._defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}

