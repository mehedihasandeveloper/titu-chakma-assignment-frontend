import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertProductComponent } from './components/insert-product/insert-product.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  {path: 'product-crud-view', component: InsertProductComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'view-product', component: ViewProductsComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: '', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
