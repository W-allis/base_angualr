import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { TokenService } from 'src/app/service/token.service';
import { Toast } from 'ng-zorro-antd-mobile';

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

  // private deepAssgin(): { [key: string]: any } {
  //   let i: number = 1,
  //       target: { [key: string]: any } = arguments[0] || { }


  //   return target
  //   // for ()    
  // }

  private requestHandler<T>(options: Options): Options {
    const headers: Options = {
      headers: {
        'assecc-token': this.token.getToken()
      },
      observe: 'response'
    }
    // this.deepAssgin<T>(options, { headers: { 'access-token': this.token.getToken() } })
    return headers
  }
 
  private responseHandler(response: HttpResponse<any>): any {
    console.dir(response)
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

  getJson(url: string, options?: Options): Observable<any> {
    return this.http.get(url, this.requestHandler<Options>(options))
      .pipe(map(this.responseHandler))
      .pipe(catchError(this.errorHandler))
  }

  postJson(url: string, body: { [key: string]: any }, options?: Options): Observable<any> {
    return this.http.post(url, body || null, this.requestHandler<Options>(options))
      .pipe(map(this.responseHandler))
      .pipe(catchError(this.errorHandler))
  }

  deleteJson(url: string, options?: Options): Observable<any> {
    return this.http.delete(url, this.requestHandler<Options>(options))
      .pipe(map(this.responseHandler))
      .pipe(catchError(this.errorHandler))
  }

  updateJson(url: string, body: { [key: string]: any }, options?: Options): Observable<any> {
    return this.http.put(url, body || null, this.requestHandler<Options>(options))
      .pipe(map(this.responseHandler))
      .pipe(catchError(this.errorHandler))
  }
}