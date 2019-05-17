import { Component, OnInit } from '@angular/core';
import { merge } from '../../utils/merge.utils'
import { Router } from '@angular/router';

interface User {
  name: string
  speak?(word: string): void
}

interface Shape {
  width: number
  height: number
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private one: User = {
    name: 'alice'
  }

  private two: Shape = {
    width: 10,
    height: 10
  }

  constructor(private router: Router) {
    console.log(router)
    // console.log(merge.assign(this.one, this.two))
  }

  ngOnInit() {
  }

}
