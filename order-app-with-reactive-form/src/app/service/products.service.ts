import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PRODUCTS } from '../db/products';
import { Product } from '../interfaces/product.interface';
import { ProductToAdd } from '../interfaces/productToAdd-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private _products: Product[] = PRODUCTS

  _myOrders: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([])
  
  getAllProducts = () => {
    return this._products
  }

  decrementInStock = (orderId: number)  => {
    this._products.map((order)=> {
      if(order.id === orderId && order.stock !== 0) {
      order.stock  = order.stock - 1
      order.ordered = order.ordered + 1
       return order
      }

      return order
    })

  }

  setMyOrder = (order: number) => {
    const previousValues = this._myOrders.getValue()
    if(previousValues.includes(order)) {
      return
    }
    this._myOrders.next([...previousValues, order])
  }

  findById = (orderId: number): Product  => {
   const foundOrder = this._products.find((product)=> product.id === orderId)

   if(!foundOrder){
    console.log('No order')
   }
   return foundOrder as Product
  }


  addProductInDb = (product: ProductToAdd) => {
    const index = this._products.length
    const idOfProduct = index + 1
    const newProductToAdd: Product = {
      id: idOfProduct,
      ...product,
      ordered: 0
    }
    this._products.push(newProductToAdd)

  }

   
}
