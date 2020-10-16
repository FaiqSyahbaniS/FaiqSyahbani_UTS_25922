import { Injectable } from '@angular/core';
// import { CPU, GPU, Mobo, RAM } from './home.model';
import { Gudang } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  private gudangs: Gudang[] = [
    {
      id: 'CPU1',
      type: 'CPU',
      imageUrl: 'https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=BO533f9b',
      brand: 'Intel',
      model: 'Core i9-9900KF',

      //CPU
      baseClock: '3.60 GHz',
      boostClock: '5.00 GHz',
      core: '8',
      thread: '16',

      //RAM
      speed: '',
      ukuran: '',

      //Mobo
      chipset: '',
      processor: '',

      price: 'Rp.5.600.000',
      stock: '12'
    },

    {
      id: 'CPU2',
      type: 'CPU',
      imageUrl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-7834106/amd_amd-ryzen-7-3800xt-desktop-processor_full04.jpg',
      brand: 'AMD',
      model: 'Ryzen 7',

      //CPU
      baseClock: '4.40 GHz',
      boostClock: '4.40 GHz',
      core: '8',
      thread: '16',

      //RAM
      speed: '',
      ukuran: '',

      //Mobo
      chipset: '',
      processor: '',

      price: 'Rp.4.340.000',
      stock: '8'
    },

    {
      id: 'RAM1',
      type: 'RAM',
      imageUrl: 'https://www.eventus.si/en/iimg/16858/[w]x[h]/i.jpg',
      brand: 'Crucial',
      model: 'CL22',

      // CPU
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',

      //RAM
      speed: '3200 MT/s',
      ukuran: '16 GB',

      //Mobo
      chipset: '',
      processor: '',

      price: 'Rp.1.035.000',
      stock: '10'
    },

    {
      id: 'RAM2',
      type: 'RAM',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/8/14/13757756/13757756_a15a56dc-2a75-49b9-bda6-a96cfdef40d5_700_700',
      brand: 'TEAMGROUP',
      model: 'T-Force Vulcan Z',

      // CPU
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',

      //RAM
      speed: '33000MHz',
      ukuran: '16 GB',

      //Mobo
      chipset: '',
      processor: '',

      price: 'Rp.1.800.000',
      stock: '5'
    },

    {
      id: 'MOBO1',
      type: 'MOBO',
      imageUrl: 'https://www.asus.com/media/global/products/rqvpi2mqbniv6b4s/P_setting_fff_1_90_end_600.png',
      brand: 'ASUS',
      model: 'Prime B550M-A',

      // CPU
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',

      //RAM
      speed: '',
      ukuran: '',

      //Mobo
      chipset: 'AMD B550',
      processor: 'AMD 3rd Generation Ryzen',

      price: 'Rp.1.900.000',
      stock: '4'
    },
    {
      id: 'MOBO2',
      type: 'MOBO',
      imageUrl: 'https://www.asus.com/media/global/products/rqvpi2mqbniv6b4s/P_setting_fff_1_90_end_600.png',
      brand: 'MSI',
      model: 'MPG Z490 Gaming Edge',

      // CPU
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',

      //RAM
      speed: '',
      ukuran: '',

      //Mobo
      chipset: 'LGA 1200',
      processor: 'Intel Celeron, Intel Pentium Gold',

      price: 'Rp.2.950.000',
      stock: '3'
    },
    {
      id: 'GPU1',
      type: 'GPU',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/17/105446501/105446501_752db41d-f4d5-4e63-9249-4f12f4b889e0_700_700',
      brand: 'ASUS',
      model: 'Strix AMD Radeon RX 5700XT',

      // CPU
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',

      //RAM
      speed: '',
      ukuran: '',

      //Mobo
      chipset: '',
      processor: '',

      price: 'Rp.6.640.000',
      stock: '0'
    },
    {
      id: 'GPU2',
      type: 'GPU',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/22/7701906/7701906_7aa81436-3a58-47a9-83a4-56e98e4bf065_1024_1024',
      brand: 'ZOTAC',
      model: 'GeForce RTX 2060 Super',

      // CPU
      baseClock: '',
      boostClock: '',
      core: '',
      thread: '',

      //RAM
      speed: '',
      ukuran: '',

      //Mobo
      chipset: '',
      processor: '',

      price: 'Rp.7.190.000',
      stock: '7'
    }

  ]
  
  
  // private CPUs: CPU[] = [
  //   {
  //     id: 'CPU01',
  //     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Tor75VsGL._AC_SL1500_.jpg',
  //     brand: 'Intel',
  //     model: 'Core i9-9900KF',
  //     baseClock: '3.60 GHz',
  //     boostClock: '5.00 GHz',
  //     core: '8',
  //     thread: '16',
  //     price: 'Rp.5.600.000',
  //     stock: '10'
  //   }
  // ]

  // private RAMs: RAM[] = [
  //   {
  //     id: 'RAM01',
  //     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61j3CTxnXVL._AC_SL1280_.jpg',
  //     brand: 'Crucial',
  //     model: 'CL22',
  //     speed: '3200 MT/s',
  //     ukuran: '16 B',
  //     price: 'Rp.1.035.000',
  //     stock: '10'
  //   }
  // ]

  // private Mobos: Mobo[] = [
  //   {
  //     id: 'MOBO01',
  //     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61j3CTxnXVL._AC_SL1280_.jpg',
  //     brand: 'ASUS',
  //     model: 'Prime B550M-A',
  //     chipset: 'AMD B550',
  //     processor: 'AMD 3rd Generation Ryzen',
  //     price: 'Rp.1.900.000',
  //     stock: '10'
  //   }
  // ]

  // private GPUs: GPU[] = [
  //   {
  //     id: 'GPU01',
  //     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61j3CTxnXVL._AC_SL1280_.jpg',
  //     brand: 'ASUS ROG',
  //     model: 'Strix AMD Radeon RX 5700XT',
  //     price: 'Rp.6.640.000',
  //     stock: '10'
  //   }
  // ]

  constructor() { }

  getAllGudangs(){
    return [...this.gudangs];
  }

  getGudang(gudangId: string) {
    return {...this.gudangs.find(gudang => {
      return gudang.id === gudangId;
    })};
  }

  deleteGudang(gudangId: string) {
    this.gudangs = this.gudangs.filter(gudang => {
      return gudang.id !== gudangId;
    });
  }


  editGudang(
    id: string,
    editImageUrl: string,
    editBrand: string,
    editModel: string,

    editBaseClock: string,
    editBoostClock: string,
    editCore: string,
    editThread: string,

    editSpeed: string,
    editUkuran: string,

    editChipset: string,
    editProcessor: string,

    editPrice: string,
    editStock: string,
  ) {
    length = this.gudangs.length;
    for(var i = 0; i < length; i++){
      if(this.gudangs[i].id == id){
        this.gudangs[i].imageUrl = editImageUrl;
        this.gudangs[i].brand = editBrand;
        this.gudangs[i].model = editModel;

        this.gudangs[i].baseClock = editBaseClock;
        this.gudangs[i].boostClock = editBoostClock;
        this.gudangs[i].core = editCore;
        this.gudangs[i].thread = editThread;

        this.gudangs[i].speed = editSpeed;
        this.gudangs[i].ukuran = editUkuran;

        this.gudangs[i].chipset = editChipset;
        this.gudangs[i].processor = editProcessor;

        this.gudangs[i].price = editPrice;
        this.gudangs[i].stock = editStock;
        
      }
    }

  }

  tempId: string;
  addGudang(addItem: Gudang){
    length = this.gudangs.length + 1;

    this.tempId = addItem.type;

    this.tempId = this.tempId + length;
    
    

    this.gudangs.push({
      id: this.tempId,
      type: addItem.type,

      imageUrl: addItem.imageUrl,
      brand: addItem.brand,
      model: addItem.model,

      baseClock: addItem.baseClock,
      boostClock: addItem.boostClock,
      core: addItem.core,
      thread: addItem.thread,

      speed: addItem.speed,
      ukuran: addItem.ukuran,

      chipset: addItem.chipset,
      processor: addItem.processor,

      price: addItem.price,
      stock: addItem.stock

    });
  }
  
  // getAllCPUs(){
  //   return [...this.CPUs];
  // }

  // getCPU(cpuId: string) {
  //   return {...this.CPUs.find(cpu => {
  //     return cpu.id === cpuId;
  //   })};
  // }

  // deleteCPU(cpuId: string) {
  //   this.CPUs = this.CPUs.filter(cpu => {
  //     return cpu.id !== cpuId;
  //   });
  // }
  
  // getAllRAMs(){
  //   return [...this.RAMs];
  // }

  // getRAM(ramId: string) {
  //   return {...this.RAMs.find(ram => {
  //     return ram.id === ramId;
  //   })};
  // }

  // deleteRAM(ramId: string) {
  //   this.RAMs = this.RAMs.filter(ram => {
  //     return ram.id !== ramId;
  //   });
  // }

  // getAllMobos(){
  //   return [...this.Mobos];
  // }

  // getMobo(moboId: string) {
  //   return {...this.Mobos.find(mobo => {
  //     return mobo.id === moboId;
  //   })};
  // }

  // deleteMobo(moboId: string) {
  //   this.Mobos = this.Mobos.filter(mobo => {
  //     return mobo.id !== moboId;
  //   });
  // }

  // getAllGPUs(){
  //   return [...this.GPUs];
  // }

  // getGPU(gpuId: string) {
  //   return {...this.GPUs.find(gpu => {
  //     return gpu.id === gpuId;
  //   })};
  // }

  // deleteGPU(gpuId: string) {
  //   this.GPUs = this.GPUs.filter(gpu => {
  //     return gpu.id !== gpuId;
  //   });
  // }

  



  

  
}
