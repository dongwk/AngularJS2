import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Menu} from "../model/menu";
import {Api} from "../constant/api";
import {AppRbacHttpClient} from "../common/app-rbac-http-client";
import {Role} from "../model/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http: AppRbacHttpClient) { }

  listRoles(page: number, size: number): Observable<Role[]>{
    return this.http.getAry<Role>(Api.MENU_TREE);
  }
}
