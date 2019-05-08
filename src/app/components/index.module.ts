import { NgModule } from "@angular/core";
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { IconsService } from 'src/app/icons/index.service';
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
    IconsService
  ],
  exports: [
    SvgIconComponent,
    LoadingComponent
  ]
})

export class ComponentsModule { }