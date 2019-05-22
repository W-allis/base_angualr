import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SimpleLayoutComponent } from 'src/app/views/simple-layout/simple-layout.component';
import { LayoutComponent } from 'src/app/views/layout/layout.component';

declare interface Meta {
  title: string,
  icon: string,
  whiteList?: boolean
}

declare interface ExtendsMeta {
  meta?: Meta
}

const routes: (Route & ExtendsMeta)[] = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: SimpleLayoutComponent, canDeactivate: [], meta: { title: '登录', icon: 'wechat' }, loadChildren: './views/login/login.module#LoginModule' },
  { path: 'user', component: LayoutComponent, canDeactivate: [], meta: { title: '个人中心', icon: 'user' }, loadChildren: './views/user/user.module#UserModule' },
  { path: 'context ', component: LayoutComponent, canDeactivate: [], meta: { title: '内容', icon: 'zip' }, loadChildren: './views/context/context.module#ContextModule' },
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
