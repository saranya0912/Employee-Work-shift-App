import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {UserRegisterationService} from 'src/app/user-registeration.service';
import * as data from "../data.json";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message:any; 
  userTestStatus: ({ id: number; dayParts: string; time: string; sun: { id: string; value: number; }; mon: { id: string; value: number; }; tue: { id: string; value: number; }; wed: { id: string; value: number; }; thu: { id: string; value: number; }; fri: { id:string; value:number; }; sat: { id:string; value:number; }; } )[];
  midAdd= { sun: 0, mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0};
  dayAdd= { sun: 0, mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0};
  eveAdd= { sun: 0, mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0};
  days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; 
  totals = { sun: 0, mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0};
  totalEmployees = 0;
  shifts = data.WorkLoadData.length;

  sumTotals(...objs) {
    this.totals = { sun: 0, mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0};
    return objs.reduce((a, b) => {
      for (let k in b) {
        if (b.hasOwnProperty(k))
          a[k] = (a[k] || 0) + b[k];
      }
      return a;
    }, {});
  }

  calculateSum = () => {
    this.midAdd= { sun: 0, mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0};
    this.dayAdd= { sun: 0, mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0};
    this.eveAdd= { sun: 0, mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0};
       this.userTestStatus.forEach((item, index) => {
         for(var i=0; i<this.days.length; i++) {
           if(item.dayParts === "mid") {
            this.midAdd[this.days[i]] += item[this.days[i]].value;
           }
           if(item.dayParts === "day") {
            this.dayAdd[this.days[i]] += item[this.days[i]].value;
           }
           if(item.dayParts === "eve") {
            this.eveAdd[this.days[i]] += item[this.days[i]].value;
           }
         }
       });
       this.totals = this.sumTotals(this.midAdd, this.dayAdd, this.eveAdd);
       this.totalEmployees = this.calculateAvg()/this.shifts;
  };

  getImage(dayPart) {
    if(dayPart === "mid") return "moon-outline";
    else if(dayPart === "day") return "sunny-outline";
    return "cloudy-night-outline";
  }
  constructor(private service:UserRegisterationService,
              private router: Router
             ) {           
              this.userTestStatus=data.WorkLoadData;
              this.calculateSum();
             }

  go(){
    this.router.navigate(['nextpage']);
  }

  updateTotals(event:any){
    this.calculateSum();
  }

  calculateAvg() {
    return Object.keys(this.totals).reduce((sum,key)=>sum+parseFloat(this.totals[key]||0),0);
  }

  generate()
  {
    const min = 100;
    const max = 1000;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    this.totalEmployees = this.calculateAvg()/this.shifts;
    const dataobj = {
      id: id,
      totalEmployees: this.totalEmployees,
      ...this.totals
    };
    let resp = this.service.doRegisteration(dataobj);
    resp.subscribe((data)=> this.message=data);
  }
}
