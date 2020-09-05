import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from "./shared/star.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import {ProductDetailGuard} from "./products/product-detail-gaurd";
import { ProductModule } from './products/product.module';
//import {ProductService} from "./products/product.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard]},
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
