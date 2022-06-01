import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  //Injecting CartService service as private field cServe in cosntructor
  constructor(private cServ: CartService) { }

  shippinCosts = this.cServ.getShippingPrices();
  
  ngOnInit(): void {
  }

}
