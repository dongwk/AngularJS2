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

  // private MENUS: Menu[] = [
  //   { id: 1, name: '角色'},
  //   { id: 2, name: '菜单'},
  //   { id: 3, name: '用户'},
  //   { id: 4, name: '元素'},
  //   { id: 5, name: '功能'},
  //   { id: 6, name: '用户组'},
  // ];

  getMenus(): Observable<Menu[]>{
    return this.http.getAry<Menu>(Api.MENUS);
  }
}
