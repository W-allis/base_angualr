import { NgModule } from "@angular/core";
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test.routing.module';
import { ExamplePipe } from '../../pipe/example.pipe';
import { ComponentsModule } from 'src/app/components/index.module';
import { UserApi } from 'src/app/api/user.api';

const Pipes = [
  ExamplePipe
]

@NgModule({
  declarations: [
    TestComponent,
    ...Pipes
  ],
  imports: [
    TestRoutingModule,
    ComponentsModule
  ],
  exports: [
    // ComponentsModule
  ],
  providers: [UserApi]
})

export class TestModule {} 