import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
@Input() productPrice;
@Output() notifyUser = new EventEmitter();

notify(productPrice){
  
this.notifyUser.emit(productPrice);
}
  constructor() { }

  ngOnInit() {
  }

}
