import { EventEmitter, Injectable } from '@angular/core';
import { PRODUCTS } from '../db/products';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private _products: Product[] = PRODUCTS

  _myOrders: number[] = []
  
  getAllProducts = () => {
    return this._products
  }

  decrementInStock = (orderId: number)  => {
    this._products.map((order)=> {
      if(order.id === orderId && order.stock !== 0) {
      order.stock  = order.stock - 1
      order.count = order.count + 1
       return order
      }

      return order
    })

  }

  setMyOrder = (order: number) => {

    this._myOrders.push(order)
  }

  findById = (orderId: number): Product  => {
   const foundOrder = this._products.find((product)=> product.id === orderId)

   if(!foundOrder){
    console.log('No order')
   }
   return foundOrder as Product
    
  }
}
