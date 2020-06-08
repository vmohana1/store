import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productList = [];

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("https://ng-my-store-ed42c.firebaseio.com/.json");
  }
  setProducts(){
    this.http.get("https://ng-my-store-ed42c.firebaseio.com/.json").subscribe((data:any) => {
      this.productList = data;
    })
  }

  getProduct(id:string){
    const product = this.productList.find(
      (s) => {
        return s.productId === id;
      }
    );
    return product;
  }
}
