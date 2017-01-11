import {Component, Input, ContentChild, ElementRef, AfterContentInit} from '@angular/core';
import {NgControl} from '@angular/forms';

@Component({
  selector: 'field',
  templateUrl: './field.component.html'
})
export class FieldComponent implements AfterContentInit {

  @Input()
  label: string;

  @Input()
  error: string;

  @ContentChild(NgControl) control;

  constructor(private element: ElementRef) {
  }

  ngAfterContentInit() {
    // ugly hack, as we're reaching from the parent into the child by manipulating DOM directly
    // a directive on input would be a better solution
    const input = this.element.nativeElement.querySelector('input');
    input.className += ' form-control';
  }

}
