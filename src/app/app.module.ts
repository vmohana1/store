import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { EmployeeComponent } from './employee/employee.component';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CovidDetailsComponent } from './covid-details/covid-details.component';
import { SearchPipe } from './search.pipe';

const appRoutes: Routes = [
  {path: '', component: ProductComponent},
  {path:'employees', component:EmployeeComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'shopping-cart',  component: CartComponent},
  {path: 'covid-details', component: CovidDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductAlertComponent,
    EmployeeComponent,
    ProductDetailsComponent,
    CartComponent,
    CovidDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
