import { NgModule } from "@angular/core";
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    SvgIconComponent,
    LoadingComponent
  ],
  imports: [
  ],
  providers: [
    // RequireFunction
  ],
  exports: [
    SvgIconComponent,
    LoadingComponent
  ]
})

export class ComponentsModule { }