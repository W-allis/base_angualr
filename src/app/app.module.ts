import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { LayoutComponent } from './views/layout/layout.component';
import { HeaderComponent } from './views/layout/components/header/header.component';
import { SimpleLayoutComponent } from './views/simple-layout/simple-layout.component';
import { ThemeDirective } from './directives/theme.directive';
import { ThemeService } from './service/theme.service';
import { FooterComponent } from './views/layout/components/footer/footer.component';
import { AsyncRouterService } from './service/asyncRouter.service';
import { ExampleDirective } from 'src/app/directives/example.directive';
import { TestComponent } from './views/test/test.component';
import { CommonModule } from '@angular/common';
import { DetachService } from './service/authGuard.service';
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
    TestComponent,
    // SvgIconComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule
  ],
  exports: [
    // SvgIconComponent
  ],
  providers: [ThemeService, AsyncRouterService, DetachService],
  bootstrap: [AppComponent]
})
export class AppModule { }
