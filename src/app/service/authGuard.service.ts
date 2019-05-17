import { CanActivate, CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// import { asyncRoutes } from '../app-routing.module';


export const asyncRoutes: Routes = [
  // { path: 'context', component: LayoutComponent, loadChildren: './views/context/context.module#ContextModule' },
  // { path: 'user', component: LayoutComponent, loadChildren: './views/user/user.module#UserModule' },
]

export class AuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return true
  }
}

const permission = [
  {
    id: 'context',
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


@Injectable()
export class DetachService implements CanDeactivate<CanComponentDeactivate> {
  
  constructor(public router: Router) {}
  canDeactivate(user): Observable<boolean>|Promise<boolean>|boolean {
    console.log(user)
    const output: Routes = []
    asyncRoutes.forEach(item => {
      if (permission.findIndex(child => child.id === item.path) > -1) {
        output.push(item)
      }
    })
    // us
    return true
  }
}