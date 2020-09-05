import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import { ProductModule } from './products/product.module';
import { BrowserModule } from "@angular/platform-browser";
//import {ProductService} from "./products/product.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**',  redirectTo: 'welcome', pathMatch: 'full'},
      ]),
    ProductModule
  ],
  bootstrap: [AppComponent] // this is the only place where bootstrap array is used.
  // providers: [ProductService] Old Way of registering service, rather use @Injectable at source
})
export class AppModule { }
