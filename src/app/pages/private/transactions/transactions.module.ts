import { NgModule } from '@angular/core';
import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';

@NgModule({
  imports: [SharedModule, TransactionsPageRoutingModule],
  declarations: [TransactionsPage, TransactionItemComponent],
})
export class TransactionsPageModule {}
