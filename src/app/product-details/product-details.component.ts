import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  params;
  cartExist= false;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  onNotify(productPrice){
    window.alert("We will notify you when the product is available");
  }

  addToCart(item){
    this.cartExist = this.cartService.addedItems.find(
      (s) => {
        return s.productId === item.productId;
      }
    );
    if(this.cartExist){
      window.alert("This product already added to cart")
      return;
    }
    this.cartService.addToCart(item);
    window.alert(item.productName +" added to Shopping cart successfully");
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.setProducts();
        this.product = this.productService.getProduct(params['id'])
      }
    )
  }
  setProducts(){
    this.productService.setProducts();
  }
  

}
