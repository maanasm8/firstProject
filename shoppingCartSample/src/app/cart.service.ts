import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //items property to store array of current products in the cart
  items:Product[] = [];

  //Add items to cart:
  addToCart(pr: Product){
    this.items.push(pr);
  }

  //Get In cart items
  getItems(){
    return this.items;
  }

  //clear the cart
  clearCart(){
    this.items = [];
    return this.items;
  }

  //getShippingPrices() uses HttpClient httpC's get method
  getShippingPrices(){
    return this.httpC.get<{type: string, price:number}[]>('/assets/shipping.json');
  }

  constructor(private httpC:HttpClient) { }
}
