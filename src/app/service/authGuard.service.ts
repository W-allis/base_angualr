import { CanActivate, CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

const permission = [
  {
    id: 'test',
    name: '测试',
    type: 'router',
    child: [{
      id: 'submit',
      name: '提交',
      type: 'el'
    }]
  }
]

export class AuthGuardService implements CanActivate, CanDeactivate<any> {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return true
  }

  canDeactivate(): Observable<boolean>|Promise<boolean>|boolean {
    return true
  }
}

interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  isFormDirty:() => boolean;
}
