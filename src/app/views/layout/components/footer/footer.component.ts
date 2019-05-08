import { Component, OnInit } from '@angular/core';
// import { AsyncRouterService } from 'src/app/service/asyncRouter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private activeTabIndex: number = 1

  constructor(
    // public accessRoutes: AsyncRouterService
  ) { }

  ngOnInit() {
  }

  onTabClick() {}

  onChange() {}

}
