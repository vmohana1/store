import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService} from '../services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor(private productService: ProductService) { }
  products;
  loading = true;
  
  
  

  

  ngOnInit() {
    this.setProducts();
    this.getProducts();
    
  }
  getProducts(){
    this.productService.getProducts().subscribe((data:any) => {
      this.products = data;
      this.loading = false;
    })
  }
  setProducts(){
    this.productService.setProducts();
  }
  

}
