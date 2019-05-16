import { RequestUtil } from 'src/app/utils/request.utils';
import { mock } from '../utils/mock.utils'

mock.readFile('./login.json')

export class UserApi {
  constructor(public request: RequestUtil) { }

  public getUser() {
    // return this.request.getJson()
  }
}