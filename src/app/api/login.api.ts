import { RequestUtil } from 'src/app/utils/request.utils';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
// import { toBase64String } from '@angular/compiler/src/output/source_map';
import JsEncrypt from 'jsencrypt';

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDXuPfxQSHeGZdur1gYr4J1Q66IJvC8Ekyyr8hHPZgdHogH+pX7+2m2BN8PwfxdVUK/xW1p61nSCR0B2OCvxANyjN5YrKeRSML1X1ZKhqM6a6hiwsM1s26n1uK+qh92c+7UzuLyV2OORO9J35pYi3lafLLWcYlmp2Lh6QErr0TNiwIDAQAB'


@Injectable()
export class LoginApi {
  constructor(public request: RequestUtil) { }

  public login(params: { name: string, password: string }): Observable<any> {

    const rsa = new JsEncrypt()

    rsa.setPublicKey(publicKey)

    const password = rsa.encrypt(btoa(params.password))

    return this.request.postJson(environment.login + '/ldap/login', { name: params.name, password }, { headers: { 'header': 'token' } })
  }
}