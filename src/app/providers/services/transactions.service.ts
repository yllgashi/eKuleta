import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseModel } from 'src/app/model/response.model';
import Transaction from 'src/app/model/transaction.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  // for test
  transactions$ = new BehaviorSubject<Transaction[]>([]);
  constructor(private httpService: HttpService) {}

  getTransactions() {
    let queryParams = new HttpParams();

    // return this.httpService.get<ResponseModel>('', {
    //   params: queryParams,
    // });
    return this.transactions$;
  }

  createTransaction(transaction: Transaction) {
    this.transactions$.next([...this.transactions$.getValue(), transaction]);
    return this.httpService.post<ResponseModel>('', transaction);
  }
}
