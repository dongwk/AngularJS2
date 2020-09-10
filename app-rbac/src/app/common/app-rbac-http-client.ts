import {tap} from "rxjs/operators";
import {HttpClient, HttpXhrBackend} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root',
})
export class AppRbacHttpClient {

  constructor(
    private http: HttpClient) { }

  get<T>(url: string) : Observable<T> {
    return this.http.get<T>(url)
      .pipe(
        tap(heroes => console.log('fetched heroes'))
      );
  }

  getAry<T>(url: string) : Observable<T[]> {
    return this.http.get<T[]>(url)
      .pipe(
        tap(heroes => console.log('fetched heroes'))
      );
  }
}
