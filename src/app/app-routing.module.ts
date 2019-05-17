import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from 'src/app/views/simple-layout/simple-layout.component';
import { LayoutComponent } from 'src/app/views/layout/layout.component';
import { DetachService } from './service/authGuard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: SimpleLayoutComponent, canDeactivate: [DetachService], loadChildren: './views/login/login.module#LoginModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/user' }
];

export const asyncRoutes: Routes = [
  { path: 'user', component: LayoutComponent, loadChildren: './views/user/user.module#UserModule' },
  { path: 'test', component: LayoutComponent, loadChildren: './views/test/test.module#TestModule' }
]

interface Array {
  concat(params: any): any
}

@NgModule({
  imports: [RouterModule.forRoot((<Array>routes).concat(asyncRoutes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }
