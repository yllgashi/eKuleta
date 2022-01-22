import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertButton } from '@ionic/angular';
import Transaction from 'src/app/model/transaction.model';
import { DynamicComponentsService } from 'src/app/providers/services/dynamic-components.service';
import { TransactionsService } from 'src/app/providers/services/transactions.service';

@Component({
  selector: 'app-income-outcome',
  templateUrl: './income-outcome.page.html',
  styleUrls: ['./income-outcome.page.scss'],
})
export class IncomeOutcomePage implements OnInit {
  isOutcome: boolean;
  incomeOutcomeForm: FormGroup;
  constructor(
    private transactionsService: TransactionsService,
    private dynamicComponentsService: DynamicComponentsService
  ) {}

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
    this.transactionsService.createTransaction(transaction).subscribe((res) => {
      if (res.error) return;
      this.clearForm();
      this.showSuccessAlert();
    });
  }

  clearForm(): void {
    this.incomeOutcomeForm.reset();
  }

  showSuccessAlert(): void {
    let buttons: AlertButton[] = [
      {
        text: 'Cancel',
        handler: () => {},
      },
    ];

    this.dynamicComponentsService.showAlert({
      header: 'Success',
      message: 'Transaction added',
      buttons,
    });
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
