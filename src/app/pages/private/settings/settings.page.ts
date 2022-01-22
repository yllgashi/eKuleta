import { Component, OnInit } from '@angular/core';
import { AlertButton, AlertInput } from '@ionic/angular';
import Currency from 'src/app/model/currency.model';
import { DynamicComponentsService } from 'src/app/providers/services/dynamic-components.service';
import { SettingsService } from 'src/app/providers/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(
    private dynamicComponentsService: DynamicComponentsService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {}

  onChangeCurrency(): void {
    let currencies: Currency[] = this.settingsService.getCurrencies();

    let inputs: AlertInput[] = currencies.map((e) => {
      return {
        name: e.name,
        type: 'radio',
        label: e.name,
        value: e.id,
        checked: false,
      };
    });

    let buttons: AlertButton[] = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        },
      },
      {
        text: 'Ok',
        handler: (data) => {
          console.log('Confirm Ok', data);
        },
      },
    ];

    this.dynamicComponentsService.showAlert({
      header: 'Change currency',
      inputs,
      buttons,
    });
  }

  onChangeColors(): void {}
}
