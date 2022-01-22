import { Injectable } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  AlertOptions,
  LoadingController,
  ModalController,
  ModalOptions,
  PopoverController,
  ToastController,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DynamicComponentsService {
  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController
  ) {}
  loader: HTMLIonLoadingElement;

  async showToast(text: string, duration: number = 3000) {
    let toast = await this.toastCtrl.create({
      message: text,
      duration: duration,
    });
    await toast.present();
  }

  async showError(text: string, title?: string) {
    let alert = await this.alertCtrl.create({
      header: title ? title : 'Fail',
      subHeader: text,
    });
    await alert.present();
  }

  async showAlert(options: AlertOptions) {
    let alert = await this.alertCtrl.create(options);
    await alert.present();
  }

  async showModal(props: ModalOptions) {
    let modal = await this.modalCtrl.create(props);
    await modal.present();
  }

  async closeModal() {
    this.modalCtrl.dismiss();
  }
}
