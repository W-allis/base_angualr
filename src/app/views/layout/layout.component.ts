import { Component, Renderer, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  constructor(
    public el: ElementRef,
    public renderer: Renderer
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const main = this.el.nativeElement.querySelector('.main')
    const footerHeight = getComputedStyle(this.el.nativeElement.querySelector('.footer')).height
    const headerHeight = getComputedStyle(this.el.nativeElement.querySelector('.header')).height
    this.renderer.setElementStyle(main, 'paddingTop', headerHeight)
    this.renderer.setElementStyle(main, 'paddingBottom', footerHeight)
  }
}
