import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from 'src/app/views/simple-layout/simple-layout.component';
import { LayoutComponent } from 'src/app/views/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: SimpleLayoutComponent, loadChildren: './views/login/login.module#LoginModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/user' }
];

const asyncRoutes: Routes = [
  { path: 'user', component: LayoutComponent, loadChildren: './views/user/user.module#UserModule' },
  { path: 'test', component: LayoutComponent, loadChildren: './views/test/test.module#TestModule' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes.concat(asyncRoutes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }
