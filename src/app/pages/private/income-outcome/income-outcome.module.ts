import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeOutcomePageRoutingModule } from './income-outcome-routing.module';

import { IncomeOutcomePage } from './income-outcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeOutcomePageRoutingModule
  ],
  declarations: [IncomeOutcomePage]
})
export class IncomeOutcomePageModule {}
