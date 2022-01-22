import { Component, OnInit } from '@angular/core';
import Transaction from 'src/app/model/transaction.model';
import { TransactionsService } from 'src/app/providers/services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
})
export class TransactionsListComponent implements OnInit {
  transactions: Transaction[];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.transactionsService.getTransactions().subscribe((res) => {
      if(!res) return;
      // if (res.error) return;
      // this.transactions = res.data;
      this.transactions = res;
    });
  }
}
