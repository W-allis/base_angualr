import { NgModule } from "@angular/core";
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { ExamplePipe } from '../../pipe/example.pipe';
import { ComponentsModule } from 'src/app/components/index.module';

const Pipes = [
  ExamplePipe
]

@NgModule({
  declarations: [
    UserComponent,
    ...Pipes
  ],
  imports: [
    UserRoutingModule,
    ComponentsModule
  ],
  exports: [
    // ComponentsModule
  ]
})

export class UserModule {} 