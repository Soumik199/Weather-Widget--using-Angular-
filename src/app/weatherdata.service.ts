import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http:HttpClient) { }
   url="https://api.openweathermap.org/data/2.5/weather?q=Durgapur&appid=e57ef84dc36d4cad13552e19edd73fdd"
  weatherInf(){
    return this.http.get(this.url);
  }
}
