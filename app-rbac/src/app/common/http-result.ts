import {Observable} from "rxjs";

export class HttpResult<T> extends Observable<T>{
  private _code: string;
  private _msg: string;
  private _timestamp: number;
  private _data: T;

  get data(): T {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get msg(): string {
    return this._msg;
  }

  set msg(value: string) {
    this._msg = value;
  }

  get timestamp(): number {
    return this._timestamp;
  }

  set timestamp(value: number) {
    this._timestamp = value;
  }
}
