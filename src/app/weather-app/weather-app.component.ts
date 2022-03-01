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
       //console.log(this.weatherInf);
       //let p = this.weatherInf.weather[0].main;
       //console.log(p);
       this.weatherInf.temp_celcius = (this.weatherInf.main.temp - 273.15).toFixed(0);
       this.weatherInf.temp_min = (this.weatherInf.main.temp_min - 273.15).toFixed(0);
       this.weatherInf.temp_max = (this.weatherInf.main.temp_max - 273.15).toFixed(0);
       let sunsetTime = new Date(this.weatherInf.sys.sunset * 1000);
       this.weatherInf.sunset_time = sunsetTime.toLocaleTimeString();
       let currentDate = new Date();
       this.weatherInf.isDay = (currentDate.getTime() < sunsetTime.getTime());
     })
    }
    today: number = Date.now(); //Data pipe in the angular 

    ngOnInit(): void {}

    
      
}