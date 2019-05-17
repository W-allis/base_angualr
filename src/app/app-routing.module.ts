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

interface Array {
  concat(params: any): any
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
