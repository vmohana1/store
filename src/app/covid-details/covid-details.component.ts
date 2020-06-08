import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-covid-details',
  templateUrl: './covid-details.component.html',
  styleUrls: ['./covid-details.component.css']
})
export class CovidDetailsComponent implements OnInit {
  covidDetails: any;
  searchTerm:string;
  loading = true;


  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.getCovidDetails();
  }

  getCovidDetails(){
    this.generalService.getCovidDetails().subscribe((data:any) => {
      this.covidDetails = data.raw_data;
      this.loading = false;
      console.log(this.covidDetails);
    })
  }

}
