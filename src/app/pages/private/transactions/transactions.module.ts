import { NgModule } from '@angular/core';
import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionItemComponent } from './transactions-list/transaction-item/transaction-item.component';

@NgModule({
  imports: [SharedModule, TransactionsPageRoutingModule],
  declarations: [TransactionsPage, TransactionsListComponent, TransactionItemComponent],
})
export class TransactionsPageModule {}
