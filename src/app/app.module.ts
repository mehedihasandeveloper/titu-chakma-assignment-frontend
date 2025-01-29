import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { InsertProductComponent } from './components/insert-product/insert-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductsComponent,
    CreateUserComponent,
    LoginPageComponent,
    InsertProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
