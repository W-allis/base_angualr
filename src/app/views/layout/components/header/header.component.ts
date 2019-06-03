import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = ''

  show: boolean = false
  menuHeight: number = 64

  initData: any[] = [{
    value: 1,
    label: '水果',
    children: [
      {
        value: 2,
        label: '苹果'
      }
    ]
  }, {
    value: 3,
    label: '零食',
    children: [
      {
        value: 4,
        label: '方便面'
      }
    ]
  }]

  constructor(public router: Router) {
    // this.title = 
  }

  ngOnInit() {
    // console.log(this.router)
    this.router.config.forEach(route => {
      this.router.url.includes(route.path) && (this.title = (<Route & { meta: any }>route).meta && (<Route & { meta: any }>route).meta.title)
    })
  }

  handleLeClick(e) {
    e.preventDefault()
    history.back()
  }

  handleRiClick(e) {
    e.preventDefault()
    this.show = !this.show
  }

  onMaskClick() {}

  onChange() {}

}
