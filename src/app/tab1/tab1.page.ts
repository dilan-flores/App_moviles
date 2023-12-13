import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild(IonContent) content!: IonContent;
  constructor(private menuCtrl: MenuController, private navCtrl:NavController, private alertController:AlertController) {
    console.log('La instancia de Tab1Page se ha creado.');
  }

  onClick() {
    this.menuCtrl.toggle();
  }
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Haz terminado de ver mi perfil',
      subHeader: '........................',
      message: 'Graacias..!! 🧑‍💻',
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
