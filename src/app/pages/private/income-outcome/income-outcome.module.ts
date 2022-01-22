import { NgModule } from '@angular/core';
import { IncomeOutcomePageRoutingModule } from './income-outcome-routing.module';
import { IncomeOutcomePage } from './income-outcome.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, IncomeOutcomePageRoutingModule],
  declarations: [IncomeOutcomePage],
})
export class IncomeOutcomePageModule {}
