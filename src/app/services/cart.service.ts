import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
addedItems=[];
  constructor() { }

  addToCart(item){
    this.addedItems.push(item);
  }

  getAddedItems(){
    return this.addedItems;
  }
  removeFromCart(id){
    for(var i = 0; i < this.addedItems.length; i++) {
      if(this.addedItems[i].productId == id) {
          this.addedItems.splice(i, 1);
          break;
      }
    }
    
  }
  clearCart(){
    this.addedItems = [];
    console.log(this.addedItems);
    return this.addedItems;
  }
}
