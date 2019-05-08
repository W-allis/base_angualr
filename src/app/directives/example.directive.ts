import { Directive, Input, HostListener } from "@angular/core";
import { ThemeService } from '../service/theme.service';

@Directive({
  selector: 'Exam'
})

export class ExampleDirective {
  
  private default: string = 'gray';

  @Input('Example') customerColor: string;
  constructor(public theme: ThemeService) {}

  @HostListener('click')
  handleClick() {
    this.theme.themeColor = this.customerColor || this.default
  }
}