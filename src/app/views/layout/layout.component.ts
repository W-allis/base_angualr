import { Component, Renderer, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { routeAnimation } from 'src/app/animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routeAnimation]
})
export class LayoutComponent implements OnInit, AfterViewInit {
  routerChange: string = 'open'
  @ViewChild('route') route: ElementRef
  constructor(
    public el: ElementRef,
    public renderer: Renderer,
    public router: Router
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log(this.router)
    const main = this.el.nativeElement.querySelector('.main')
    const footerHeight = getComputedStyle(this.el.nativeElement.querySelector('.footer')).height
    const headerHeight = getComputedStyle(this.el.nativeElement.querySelector('.header')).height
    this.renderer.setElementStyle(main, 'paddingTop', headerHeight)
    this.renderer.setElementStyle(main, 'paddingBottom', footerHeight)
  }
}
