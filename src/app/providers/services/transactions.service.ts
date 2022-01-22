import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from 'src/app/model/response.model';
import Transaction from 'src/app/model/transaction.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: Transaction[] = [];
  constructor(private httpService: HttpService) {}

  getTransactions() {
    let queryParams = new HttpParams();

    return this.httpService.get<ResponseModel>('', {
      params: queryParams,
    });
  }

  createTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    return this.httpService.post<ResponseModel>('', transaction);
  }
}
