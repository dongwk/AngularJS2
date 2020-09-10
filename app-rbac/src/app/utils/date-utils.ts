import {DatePipe} from "@angular/common";

export class DateUtils{
  private static datePipe = new DatePipe('en_US');

  static transform(date: Date, formart: string) : string {
    DateUtils.datePipe.transform(date, formart);
    return "this.datePipe.transform(date, formart)";
  }
}
