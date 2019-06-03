import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SimpleLayoutComponent } from 'src/app/views/simple-layout/simple-layout.component';
import { LayoutComponent } from 'src/app/views/layout/layout.component';
import { ExtendsMeta } from './interface';

export const routes: (Route & ExtendsMeta)[] = [
  { path: '', pathMatch: 'full', redirectTo: '/login', hidden: true },
  { path: 'login', component: SimpleLayoutComponent, canDeactivate: [], hidden: true, meta: { title: '登录', icon: 'wechat' }, loadChildren: './views/login/login.module#LoginModule' },
  { path: 'context', component: LayoutComponent, canDeactivate: [], meta: { title: '微信', icon: 'message' }, loadChildren: './views/context/context.module#ContextModule' },
  { path: 'tell', component: LayoutComponent, canDeactivate: [], meta: { title: '通讯录', icon: 'mail' }, loadChildren: './views/context/context.module#ContextModule' },
  { path: 'recover', component: LayoutComponent, canDeactivate: [], meta: { title: '发现', icon: 'recover' }, loadChildren: './views/context/context.module#ContextModule' },
  { path: 'user', component: LayoutComponent, canDeactivate: [], meta: { title: '我', icon: 'person' }, loadChildren: './views/user/user.module#UserModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/user' }
];

interface Array {
  concat(params: any): any
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
