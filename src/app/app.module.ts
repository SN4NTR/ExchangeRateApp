import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ExchangeRateService} from "./exchange-rate/exchange-rate.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ConversionHistoryService} from "./conversion-history/conversion-history.service";
import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./app-routing.module";
import {RequestInterceptor} from "./request.interceptor";
import {HomeComponent} from "./home/home.component";
import {ConversionHistoryComponent} from "./conversion-history/conversion-history.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConversionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    ExchangeRateService,
    ConversionHistoryService,
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
