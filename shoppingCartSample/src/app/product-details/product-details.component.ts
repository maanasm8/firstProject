import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //Defining pro property as Product
  pro:Product  | undefined;

  //Injecting AtivatedRoute into constructor() by adding private route:ActivatedRoute
  /**
   * ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute 
   * contains information about the route and the route's parameters.
   * @param rou ActivatedRoute variable which contains info about route and it's params
   */
  /**
   * 
   * By injecting ActivatedRoute, you are configuring the component to use a service. 
   * The Managing Data step covers services in more detail.
   */
  //INJECTING CartService service by adding it to Constructor (Dependecy Injection)
  constructor(private rou:ActivatedRoute, private cartS:CartService) { }

  ngOnInit() {
    //EXTRACTING product id from current route 'rou'
    /**
     * To access the route parameters, we use route.snapshot, 
     * which is the ActivatedRouteSnapshot that contains information 
     * about the active route at that particular moment in time
     */
    const routeParam = this.rou.snapshot.paramMap;

    /**
     * The URL that matches the route provides the productId . Angular uses the 
     * productId to display the details for each unique product.
     */
    const productIDExtractedFromRoute = Number(routeParam.get('productId'));

    //Get the matching product that correspond with the id we got from rou and set it to pro property
    this.pro = products.find(pr => pr.id === productIDExtractedFromRoute) ;

  }

  //addToCart() method that adds the current product to cart
  addToCart(pr: Product){
    this.cartS.addToCart(pr);
    window.alert('Your product has been added to the cart!');
  }

}
