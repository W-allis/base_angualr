import { CanActivate, CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export class AuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return true
  }
}

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

interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  isFormDirty:() => boolean;
}

export class DetachService implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(user): Observable<boolean>|Promise<boolean>|boolean {
    console.log(user)
    return true
  }
}