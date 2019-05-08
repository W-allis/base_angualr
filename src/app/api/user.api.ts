import { RequestUtil } from 'src/app/utils/request.utils';

export class UserApi {
  constructor(public request: RequestUtil) { }

  public getUser() {
    // return this.request.getJson()
  }
}