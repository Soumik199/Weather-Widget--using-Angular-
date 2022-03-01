import { Component, OnInit } from '@angular/core';
import{ WeatherdataService } from '../weatherdata.service'


@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
  
})
export class WeatherAppComponent implements OnInit{
 
  weatherInf:any;
  constructor(private weatherdata:WeatherdataService ){

     this.weatherdata.weatherInf().subscribe((data)=>{
       this.weatherInf = data
       console.log(this.weatherInf);
     })
    }
    today: number = Date.now(); //Data pipe in the angular 
    ngOnInit(): void {}
}
