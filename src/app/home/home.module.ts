import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { HomePageRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import * as data from "../data.json";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild([{ path: '', component: HomePage}]),
    FontAwesomeModule
  ],
  declarations: [HomePage]
})
export class HomePageModule implements OnInit{
  weekdata: any[];

  constructor() {
    // console.log("data");
    // console.log(data.WorkLoadData[0].id);

   }

  ngOnInit() {
    // this.weekdata = data;
    console.log("data");
    console.log(data.WorkLoadData[0].id);
  }

}
