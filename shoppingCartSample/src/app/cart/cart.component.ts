import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //INJECTING CartService so that the CartComponent can use it by adding it to constructor
  //Dependecy injection
  constructor(private cService:CartService) { }

  //items property to store products in the cart, gets getItems() from the cService
  items = this.cService.getItems();

  ngOnInit(): void {
  }

}
