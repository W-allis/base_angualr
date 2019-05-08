import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgZorroAntdMobileModule, Toast } from 'ng-zorro-antd-mobile';
import { CommonModule } from '@angular/common';
import { LoginApi } from 'src/app/api/login.api';
import { RequestUtil } from 'src/app/utils/request.utils';
import { TokenService } from 'src/app/service/token.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgZorroAntdMobileModule
  ],
  providers: [
    RequestUtil,
    LoginApi,
    Toast,
    TokenService
  ]
})

export class LoginModule { } 