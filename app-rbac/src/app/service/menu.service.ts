import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Menu} from "../model/menu";
import {catchError, tap} from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Api} from "../constant/api";
import {AppRbacHttpClient} from "../common/app-rbac-http-client";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: AppRbacHttpClient) { }

  listMenus(): Observable<Menu[]>{
    return this.http.getAry<Menu>(Api.MENU_TREE);
  }
}
