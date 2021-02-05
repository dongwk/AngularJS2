import { Component } from '@angular/core';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

  constructor() { }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
  }

}
