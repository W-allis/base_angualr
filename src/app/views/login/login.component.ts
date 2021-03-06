import { Component, OnInit } from '@angular/core';
import { LoginApi } from 'src/app/api/login.api';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';


interface User {
  name: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  model: User = {
    name: 'p-shizj',
    password: '1q2w3e!@#' 
  }

  constructor(
    public api: LoginApi,
    public token: TokenService,
    public router: Router
  ) {
    this.model.name = '123'
    setTimeout(_ => {
      this.model.name = '321'
    }, 1000)
  }

  ngOnInit() {
  }

  handleLogin() {
    this.router.navigateByUrl('/user')
    // this.api.login(this.model).subscribe(res => {
    //   console.dir(res)
    //   this.token.setToken(res.headers.get('access-token'))
    // }, error => {
    //   console.error(error)
    // })
  }

}
