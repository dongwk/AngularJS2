import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  login(user: String, pass: String): boolean{
    if (user == "zhangsan" && pass == "123") return true;
    return false;
  }
}
