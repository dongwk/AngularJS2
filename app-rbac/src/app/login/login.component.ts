import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginControl = new FormControl('');

  model: any = {};
  returnUrl: string;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  login() {
    let suc = false;
    console.log("ddd");
    suc = this.authService.login(this.model.user, this.model.pass);
    console.log("ccc_"+suc);
    if (suc) {
      console.log("登录成功");
      alert("登录成功");
    } else {
      console.log("账号或密码有误");
      alert("账号或密码有误");
    }
  }
}
