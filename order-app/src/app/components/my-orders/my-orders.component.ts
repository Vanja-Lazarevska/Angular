import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  title: string = 'My Orders'
  myOrders: number[]
  eachOrder: Product[]  =[]

  constructor(private readonly productsService: ProductsService, private readonly route: ActivatedRoute  ){}

  ngOnInit(): void {
    this.myOrders = this.productsService._myOrders

    this.myOrders.map((order) => {
      this.eachOrder.push(this.productsService.findById(order))
    }
    )

    console.log(this.eachOrder)
  }





}
