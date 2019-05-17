import { NgModule } from "@angular/core";
import { ContextComponent } from './context.component';
import { ContextRoutingModule } from './context.routing.module';

@NgModule({
    declarations: [
        ContextComponent
    ],
    imports: [
        ContextRoutingModule
    ]
})

export class ContextModule { }