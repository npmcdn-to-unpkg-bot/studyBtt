import { Component } from '@angular/core';
@Component({
    selector: 'key-up1',
    template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v1 {
    values = '';
    /*
     // without strong typing
     onKey(event:any) {
     this.values += event.target.value + ' | ';
     }
     */
    // with strong typing
    onKey(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
}
//////////////////////////////////////////
// có thể truy cập trực tiếp vào element với dấu #. Nhưng phải add 1 event để Angular update : (keyup)
@Component({
    selector: 'key-up2',
    template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
    values = '';
    onKey(value: string) {
        this.values += value + ' | ';
    }
}
//////////////////////////////////////////
// event fire when press Enter. we can change button shift
@Component({
    selector: 'key-up3',
    template: `
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
    values = '';
}
//////////////////////////////////////////
@Component({
    selector: 'key-up4',
    template: `
    <input #box
      (keyup.enter)="values=box.value"
      (blur)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v4 {
    values = '';
}

@Component({
    selector: 'eventStudy',
    template: `
        <input [value]="firstname" (input)="firstname=$event.target.value">
        <textarea [value]="firstname" (keyup)="firstname=$event.target.value"></textarea>
        <div [class.btt]="isClass" [style.width.px]="222">Class</div>
        <div [ngClass]="{active123: isActive, disabledbtt: isDisabled}">Ng Class</div>
        {{firstname}}
    `
})

export class EventComponent {
    public firstname = "truongbt";
    public isClass = true;
    public isActive = true;

    input(text:any) {
        console.log("event input");
    }
}