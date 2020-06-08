import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  addedItems;
  showForm:boolean = false;

  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit() {
    this.getAddedItems();
    
  }

  placeOrder(){
    this.showForm = true;
  }
  getAddedItems(){
    this.addedItems = this.cartService.getAddedItems();
   
  }
  removeFromCart(id){
    this.cartService.removeFromCart(id);
  }
  clearCart(){
    
    this.addedItems = this.cartService.clearCart();
  }
  onSubmit(form:NgForm){
    const name = form.value.username;
    window.alert("Hi "+name+ ", Your order has been initiated");
    this.addedItems = this.cartService.clearCart();
    this.route.navigate(['/']);

  }

}
