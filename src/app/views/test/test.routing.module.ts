import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';
import { Route } from '@angular/router';

const routes: Route[] = [
  { path: '', component: TestComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TestRoutingModule {}