import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Transaction from 'src/app/model/transaction.model';
import { TransactionsService } from 'src/app/providers/services/transactions.service';

@Component({
  selector: 'app-income-outcome',
  templateUrl: './income-outcome.page.html',
  styleUrls: ['./income-outcome.page.scss'],
})
export class IncomeOutcomePage implements OnInit {
  isOutcome: boolean;
  incomeOutcomeForm: FormGroup;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.incomeOutcomeForm = new FormGroup({
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      isOutcome: new FormControl(false, Validators.required),
    });
  }

  getControl(control: string): FormControl {
    return this.incomeOutcomeForm.get(control) as FormControl;
  }

  onChangeFormType(): void {
    this.isOutcome = !this.isOutcome;
    this.incomeOutcomeForm.controls['isOutcome'].setValue(this.isOutcome);
  }

  onSubmit(): void {
    if (this.incomeOutcomeForm.invalid) return;

    let transaction: Transaction = this.mapTransactionObject();
    this.transactionsService.createTransaction(transaction);
  }

  mapTransactionObject(): Transaction {
    let price = +this.incomeOutcomeForm.controls['price'].value;
    let isOutcome = this.incomeOutcomeForm.controls['isOutcome'].value;
    let description = this.incomeOutcomeForm.controls['description'].value;
    let date = new Date();

    let transaction: Transaction = {
      price,
      isOutcome,
      description,
      date: date,
    };

    return transaction;
  }
}
