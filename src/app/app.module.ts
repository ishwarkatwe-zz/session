import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {InputComponent} from './input/input.component';
import {ChildComponent} from './input/child/child.component';
import {BroComponent} from './input/bro/bro.component';
import {UserbComponent} from './input/userb/userb.component';
import {AppService} from './app.service';
import {HttpInterceptorService} from './http-interceptor.service';
import { MasterComponent } from './master/master.component';
import { PipesComponent } from './pipes/pipes.component';
import { HighlightPipe } from './highlight.pipe';
import { AdvDirective } from './adv.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    InputComponent,
    ChildComponent,
    BroComponent,
    UserbComponent,
    MasterComponent,
    PipesComponent,
    HighlightPipe,
    AdvDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
