import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PRIMARY_OUTLET } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public myDateOfBirth: String;

  constructor(public toastController: ToastController, private alertCtrl: AlertController) {}

  ionViewDidEnter() {
    this.myDateOfBirth = "2000-03-31";
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'This is a button!',
      subHeader: 'Not much else to it.',
      message: 'Thanks for pressing!',
      buttons: ['Alrighty I\'m done then']
    });

    await alert.present();
  }

  pressMe() {
    this.presentAlert();
  }

  async submitInfo() {
    const alert = await this.alertCtrl.create({
      header: "Great to know!",
      subHeader: 'I can\'t actually store this information.',
      message: 'But feel free to share in person!',
      buttons: ['PCE']
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cheers mate.',
      duration: 2000,
      color: PRIMARY_OUTLET
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}