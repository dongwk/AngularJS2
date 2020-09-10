import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {SessionHandle} from "./session/session-handle";
import {LoginUser} from "./model/login-user";
import {DatePipe} from "@angular/common";
import {DateUtils} from "./utils/date-utils";

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [
    DatePipe,
  ]
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // TODO 测试用户
    SessionHandle.loginUser = new LoginUser();
    SessionHandle.loginUser.nickname = 'zhangsan';
    SessionHandle.loginUser.token = 'fd953b76-7e1f-41f7-9f74-8256270e1cd7';
    SessionHandle.loginUser.loginDate = new Date();
    console.log('测试用户'
      +'\nnickname:'+SessionHandle.loginUser.nickname
      +'\ntoken:'+SessionHandle.loginUser.token
      +'\nloginDate:'+this.datePipe.transform(SessionHandle.loginUser.loginDate, 'yyyy-MM-dd HH:mm:ss')
    );
  }
}

