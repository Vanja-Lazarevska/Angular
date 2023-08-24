import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    MyOrdersComponent,
    NotFoundComponent,
    ProductCardComponent,
    NavbarComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatButtonModule, 
    MatIconModule, 
    MatToolbarModule, 
    CommonModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
