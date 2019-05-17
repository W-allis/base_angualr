import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { TokenService } from 'src/app/service/token.service';
import { Toast } from 'ng-zorro-antd-mobile';
import { merge } from './merge.utils'

declare interface Handler {
  responseHandler(response): any
  errorHandler(error: HttpErrorResponse): Observable<HttpErrorResponse>
}

declare interface Options {
  [key: string]: any
}

@Injectable()
export class RequestUtil {
  constructor(
    public http: HttpClient,
    public router: Router,
    public token: TokenService,
    public toast: Toast
  ) {
    console.dir(http)
  }

  private requestHandler(options: Options): Options {
    const headers: Options = {
      headers: {
        'access-token': this.token.getToken() || ''
      },
      observe: 'response'
    }
    // console.log(options, merge.assign(options, headers))
    return merge.assign(options, headers)
  }
 
  private responseHandler(response: HttpResponse<any>): any {
    if (response.body.resCode !== 0) {
      Toast.info(response.body.errorMsg, 3000)
      // return throwError(response)
      throw response
    }
    return response
  }

  private errorHandler(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    console.error(error)
    if (error.status === 401) {
      this.token.removeToken()
      this.router.navigateByUrl('/login')
    }
    return throwError(error)
  }

  getJson(url: string, options?: Options): Observable<HttpResponse<any>|HttpErrorResponse> {
    return this.http.get(url, this.requestHandler(options))
      .pipe(map(this.responseHandler))
      .pipe(catchError(this.errorHandler))
  }

  postJson(url: string, body: { [key: string]: any }, options?: Options): Observable<HttpResponse<any>|HttpErrorResponse> {
    return this.http.post(url, body || null, this.requestHandler(options))
      .pipe(map(this.responseHandler))
      .pipe(catchError(this.errorHandler))
  }

  deleteJson(url: string, options?: Options): Observable<HttpResponse<any>|HttpErrorResponse> {
    return this.http.delete(url, this.requestHandler(options))
      .pipe(map(this.responseHandler))
      .pipe(catchError(this.errorHandler))
  }

  updateJson(url: string, body: { [key: string]: any }, options?: Options): Observable<HttpResponse<any>|HttpErrorResponse> {
    return this.http.put(url, body || null, this.requestHandler(options))
      .pipe(map(this.responseHandler))
      .pipe(catchError(this.errorHandler))
  }
}