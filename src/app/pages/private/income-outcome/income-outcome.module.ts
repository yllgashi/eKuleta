import { NgModule } from '@angular/core';
import { IncomeOutcomePageRoutingModule } from './income-outcome-routing.module';
import { IncomeOutcomePage } from './income-outcome.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DescriptionContainerComponent } from './description-container/description-container.component';

@NgModule({
  imports: [SharedModule, IncomeOutcomePageRoutingModule],
  declarations: [IncomeOutcomePage, DescriptionContainerComponent],
})
export class IncomeOutcomePageModule {}
