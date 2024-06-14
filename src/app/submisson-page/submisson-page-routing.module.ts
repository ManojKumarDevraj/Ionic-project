import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmissonPagePage } from './submisson-page.page';

const routes: Routes = [
  {
    path: '',
    component: SubmissonPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissonPagePageRoutingModule {}
