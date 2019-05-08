import { Directive, Input, ElementRef, Renderer } from "@angular/core";
import { ThemeService } from '../service/theme.service';

@Directive({
  selector: '[Theme]'
})

export class ThemeDirective {
  
  private default: string = 'transparent';

  constructor(
    public theme: ThemeService, 
    public render: Renderer,
    public el: ElementRef
  ) {
    this.setThemeColor()
  }

  setThemeColor() {
    this.render.setElementStyle(this.el.nativeElement, 'backgroundColor', this.theme.themeColor || this.default)  
  }

}