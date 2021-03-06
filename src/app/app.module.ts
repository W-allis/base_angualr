import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule, IconComponent } from 'ng-zorro-antd-mobile';
import { LayoutComponent } from './views/layout/layout.component';
import { HeaderComponent } from './views/layout/components/header/header.component';
import { SimpleLayoutComponent } from './views/simple-layout/simple-layout.component';
import { ThemeDirective } from './directives/theme.directive';
import { ThemeService } from './service/theme.service';
import { FooterComponent } from './views/layout/components/footer/footer.component';
import { AsyncRouterService } from './service/asyncRouter.service';
import { ExampleDirective } from 'src/app/directives/example.directive';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuardService } from './service/authGuard.service';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ComponentsModule } from './components/index.module';
// import { ComponentsModule } from 'src/app/components/index.module';
// import { SvgIconComponent } from './components/svg-icon/svg-icon.component';

const Directives = [
  ThemeDirective,
  ExampleDirective
]

const Pipes = []

@NgModule({
  declarations: [
    ...Pipes,
    ...Directives,
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    SimpleLayoutComponent,
    FooterComponent,
    // SvgIconComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    ComponentsModule
  ],
  exports: [
    // SvgIconComponent
  ],
  providers: [ThemeService, AsyncRouterService, AuthGuardService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
