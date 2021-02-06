import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextpagePage } from './nextpage.page';

const routes: Routes = [
  {
    path: '',
    component: NextpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextpagePageRoutingModule {}
