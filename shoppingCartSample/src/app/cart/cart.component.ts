import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //INJECTING CartService so that the CartComponent can use it by adding it to constructor
  //Dependecy injection
  constructor(private cService:CartService, private fService:FormBuilder) { }

  //items property to store products in the cart, gets getItems() from the cService
  items = this.cService.getItems();

  //Get User's name and address using FormBuilder group() method to set property checkOutForm
  //to a form model containing name and address fields of user
  checkOutForm = this.fService.group({
    name:'',
    address:'',
    phoneNo:'',
    creditCardInfo:'',
    expDate:'',
    cvv:''
  });

  //onSubmit() method to process the checkOutForm form.
  //Allows user to submit name and address and also uses clearCart() method
  //from the CartService service imported to reset the form and clear cart
  onSubmit():void{
    this.items = this.cService.clearCart();
    window.alert(`Your Order has been submitted! ${this.checkOutForm.value.name}`);
    this.checkOutForm.reset();

  }

  ngOnInit(): void {
  }

}
