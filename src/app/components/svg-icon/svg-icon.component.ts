import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  @Input() svgClass: string;
  @Input() svgType: string;

  constructor() {
  }

  ngOnInit() {
  }

  get iconClass(): string {
    return this.svgClass ? `icon ${this.svgClass}` : `icon`
  }

  get iconType(): string {
    return `#icon-${this.svgType}`
  }

}
