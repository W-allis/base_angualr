import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/icons/index.service';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  constructor(public icons: IconsService) {
    console.dir(icons)
  }

  ngOnInit() {
  }

}
