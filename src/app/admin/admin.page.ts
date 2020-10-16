import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ToastController } from '@ionic/angular';
import { Gudang } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  gudangs: Gudang[];
  
  constructor(
    private homeService: HomeService,
    private alertCtrl: AlertController,
    private toastController: ToastController
  ) { }
  

  ngOnInit() {
    this.gudangs = this.homeService.getAllGudangs();
  }

  ionViewWillEnter(){
    this.gudangs = this.homeService.getAllGudangs();
  }

  ubah(gudangs: Gudang, slidingItem: IonItemSliding){
    slidingItem.close();
  }

  async hapus(gudangId:string, slidingItem: IonItemSliding) {
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Hapus Barang',
      message: 'Apakah anda yakin untuk menghapus barang ini ?',
      buttons:[
        {
          text: 'Tidak',
          role: 'cancel'
        },
        {
          text: 'Ya, Hapus',
          handler: () => this.deleteData(gudangId)
        }
      ]
      
    });

    await alert.present();
  }

  deleteData(gudangId:string){
    this.homeService.deleteGudang(gudangId);
    this.presentToast();
    this.ionViewWillEnter();
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Barang Telah Dihapus.',
      duration: 1500
    });
    toast.present();
  }

}
