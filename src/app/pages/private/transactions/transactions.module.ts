import { NgModule } from '@angular/core';
import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, TransactionsPageRoutingModule],
  declarations: [TransactionsPage],
})
export class TransactionsPageModule {}
