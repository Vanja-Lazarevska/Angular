import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],

})
export class ProductCardComponent {

  @Input()
  product: Product 

  constructor(private readonly productsService: ProductsService){}

  handleClickOrder = (orderId: number) => {
  this.productsService.decrementInStock(orderId)

  this.productsService.setMyOrder(orderId)
  
  }
  
}
