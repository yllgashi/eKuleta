import { NgModule } from '@angular/core';
import { StatisticsPageRoutingModule } from './statistics-routing.module';

import { StatisticsPage } from './statistics.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, StatisticsPageRoutingModule],
  declarations: [StatisticsPage],
})
export class StatisticsPageModule {}
