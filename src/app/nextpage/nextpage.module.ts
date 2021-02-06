import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NextpagePageRoutingModule } from './nextpage-routing.module';

import { NextpagePage } from './nextpage.page';
import { MiAccordianComponent} from '../widgets/mi-accordian/mi-accordian.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextpagePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [NextpagePage, MiAccordianComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NextpagePageModule {}
