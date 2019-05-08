import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from 'src/app/views/simple-layout/simple-layout.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { LayoutComponent } from 'src/app/views/layout/layout.component';
import { UserComponent } from 'src/app/views/user/user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: SimpleLayoutComponent, loadChildren: './views/login/login.module#LoginModule' },
  { path: 'user', component: LayoutComponent, loadChildren: './views/user/user.module#UserModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
