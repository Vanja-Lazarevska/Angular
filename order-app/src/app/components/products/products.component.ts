import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title: string = 'Choose your favorite'
  products: Product[] = []


  constructor(private readonly productsService: ProductsService){}
  ngOnInit(): void {
      this.products = this.productsService.getAllProducts()
    }
  }



