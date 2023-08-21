import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'myOrders', component: MyOrdersComponent},
  {path: '**', component: NotFoundComponent}
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
