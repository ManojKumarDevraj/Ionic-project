import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmissonPagePageRoutingModule } from './submisson-page-routing.module';

import { SubmissonPagePage } from './submisson-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmissonPagePageRoutingModule
  ],
  declarations: [SubmissonPagePage]
})
export class SubmissonPagePageModule {}
