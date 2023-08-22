import { Component, OnInit } from '@angular/core';
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
  eachOrder: Product[]  = []
  displayedColumns: string[] = ['position','name', 'quantity', 'price per product', 'total price'];
  totalPrice: number = 0
  constructor(private readonly productsService: ProductsService, private readonly route: ActivatedRoute  ){}

  ngOnInit(): void {
    this.productsService._myOrders.subscribe((data)=> {
      this.myOrders = data
    })

    this.myOrders.map((order) => {
      this.eachOrder.push(this.productsService.findById(order))
    })

    this.eachOrder.forEach((order)=> {
      this.totalPrice += order.price * order.ordered
      console.log(this.totalPrice)
    })


  }








}
