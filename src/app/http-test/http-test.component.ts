import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  private vastaus: any = {};
  private weather: any = {};
  private main: any = {};

  constructor(private http:Http) { }

  private getApi() {
    let apikey: string = "36cd118071d36720ebcb1419d6fccb27";

    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid='+apikey)
      .subscribe((res: Response) => {
      this.weather = res.json();
      this.main=this.weather.main;
      console.log(this.weather);
    }
    );
  }
  private getJson() {
    this.http.get("tsconfig.json")
      .subscribe((res: Response) => {
          this.vastaus =res.json();
          console.log(this.vastaus);
        }
      );
  }
  ngOnInit() {
    this.getJson();
    this.getApi();
  }

}
