import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Currency from 'src/app/model/currency.model';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  currency$ = new BehaviorSubject<Currency>({
    id: 1,
    name: 'EURO',
    sign: 'EUR',
  });

  getCurrencies() {
    let currencies: Currency[] = [
      {
        id: 1,
        name: 'EURO',
        sign: 'EUR',
      },
      {
        id: 2,
        name: 'DOLLAR',
      },
    ];

    return currencies;
  }
}
