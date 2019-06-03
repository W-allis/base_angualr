import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app-routing.module';
import { Route, Router } from '@angular/router';
import { ExtendsMeta } from 'src/app/interface';
// import { AsyncRouterService } from 'src/app/service/asyncRouter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private activeTabIndex: number = 1
  placeHolder: string = 'block'
  routes: Route[] = routes
  nowActive: string
  // public asyncRouter = asyncRoutes

  constructor(
    public router: Router
    // public accessRoutes: AsyncRouterService
  ) { }

  ngOnInit() {
    this.router.config.forEach(route => {
      this.router.url.includes(route.path) && (this.nowActive = route.path)
    })
  }

  onTabClick(route) {
    this.nowActive = route.path
    // console.log($event)
  }

  onChange() {}

  filterRouteWithRedirect<T>(routes: T[]): any[] {
    // console.log(routes.filter((route: any) :boolean => !(<Route>route).redirectTo))
    return routes.filter((route: any) :boolean => !(<Route>route).redirectTo && !(<Route & {hidden: boolean}>route).hidden)
  }

}
