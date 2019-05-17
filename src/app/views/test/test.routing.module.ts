import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { Route } from '@angular/router';
import { AuthGuardService } from 'src/app/service/authGuard.service';
import { Meta } from 'src/app/interface';

const routes: (Route & Meta)[] = [
  { path: '', component: TestComponent, canActivate: [AuthGuardService], title: '测试' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TestRoutingModule {}