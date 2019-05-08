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
  }

  ngOnInit() {
  }

  handleLogin() {
    this.api.login(this.model).subscribe(res => {
      console.dir(res)
      this.token.setToken(res.headers.get('access-token'))
      this.router.navigateByUrl('/user')
    }, error => {
      console.error(error)
    })
  }

}
