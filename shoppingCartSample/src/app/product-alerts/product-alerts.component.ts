import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//IMPORTING Product interface
import {Product} from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  /**
   * In the ProductAlertsComponent class definition, define a 
   * property named prod with an @Input() decorator. 
   * The @Input() decorator indicates that the property value passes 
   * in from the component's parent, ProductListComponent.
   */
  //This prod can now be used as variable in html/view, once set in the view with the containing variable
  //using [prod]="variable"
  @Input() prod!:Product;
  

  /**
   * @Output() allows the ProductAlertsComponent to emit an 
   * event when the value of the notify property changes.
   */
  @Output() notifyUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
