import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Gudang } from 'src/app/home/home.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  loadedGudang;
  
  editImageUrl: string;
  editBrand: string;
  editModel: string;
  
  editBaseClock: string;
  editBoostClock: string;
  editCore: string;
  editThread: string;

  editSpeed: string;
  editUkuran: string;

  editChipset: string;
  editProcessor: string;

  editPrice: string;
  editStock: string;

  private editGudang = {
    type: '',
    imageUrl: '',
    brand: '',
    model: '',
    deskripsi: {
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',

      speed: '',
      ukuran: '',

      chipset: '',
      processor: '',
    },
    harga:  '',
    stok: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
      private gudangsService: HomeService,
      private router: Router,
      private toastController: ToastController,
      private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('gudangId')){
        const gudangId = paramMap.get('gudangId');
        this.loadedGudang = this.gudangsService.getGudang(gudangId);

        this.editImageUrl = this.loadedGudang.imageUrl;
        this.editBrand = this.loadedGudang.brand;
        this.editModel = this.loadedGudang.model;

        
        this.editBaseClock = this.loadedGudang.baseClock;
        this.editBoostClock = this.loadedGudang.boostClock;
        this.editCore = this.loadedGudang.core;
        this.editThread = this.loadedGudang.thread;

        this.editSpeed = this.loadedGudang.speed;
        this.editUkuran = this.loadedGudang.ukuran;

        this.editChipset = this.loadedGudang.chipset;
        this.editProcessor = this.loadedGudang.processor;

        this.editPrice = this.loadedGudang.price;
        this.editStock = this.loadedGudang.stock;

      }else {
        return;
      }
    });
  }



  
  editItem(){

    //ctrl click editItem below

    this.gudangsService.editGudang(
        this.loadedGudang.id,
        this.editImageUrl,
        this.editBrand,
        this.editModel,
        
        this.editBaseClock,
        this.editBoostClock,
        this.editCore,
        this.editThread,

        this.editSpeed,
        this.editUkuran,

        this.editChipset,
        this.editProcessor,

        this.editPrice,
        this.editStock,
    );
    this.router.navigate(['/admin']);
    this.editToast();
  }

  async confirmEdit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Item',
      message: 'Simpan Perubahan ?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ya',
          handler: () => this.editItem()
        }
      ]
    });

    await alert.present();
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Deskripsi Item Telah Diubah.',
      duration: 1500,
    });
    toast.present();
  }

}
