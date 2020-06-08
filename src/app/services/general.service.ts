import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  getEmployeeDetails(){
  return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  
  }

  getCovidDetails(){
    return this.http.get('https://api.covid19india.org/raw_data3.json');
  }
}
