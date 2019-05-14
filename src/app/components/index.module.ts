import { NgModule } from "@angular/core";
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { LoadingComponent } from './loading/loading.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SvgIconComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
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