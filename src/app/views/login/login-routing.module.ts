import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { Route } from '@angular/router';

const routes: Route[] = [
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {}