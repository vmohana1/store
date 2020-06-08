import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList:any;
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.showEmployees();
    
  }
  showEmployees(){
    this.generalService.getEmployeeDetails().subscribe((res:any) =>
      {
        this.employeeList = res.data;
      }
    )
    
  }

}
