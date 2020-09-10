import {LoginUser} from "../model/login-user";

export class SessionHandle {
  private static _loginUser: LoginUser

  static get loginUser(): LoginUser {
    return this._loginUser;
  }

  static set loginUser(value: LoginUser) {
    this._loginUser = value;
  }
}
