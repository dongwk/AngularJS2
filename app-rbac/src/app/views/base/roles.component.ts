import { Component } from '@angular/core';
import {Hero} from "../../hero";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@Component({
  templateUrl: 'roles.component.html'
})
export class RolesComponent {

  heroes: Hero[];

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
