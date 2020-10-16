import { Component } from '@angular/core';
// import { CPU, GPU, Gudang, Mobo, RAM } from './home.model';
import { Gudang } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // CPUs: CPU[];
  // RAMs: RAM[];
  // Mobos: Mobo[];
  // GPUs: GPU[];

  gudangs: Gudang[];
  public displayMode = 1;



  constructor(
    private homeService: HomeService,
    
    ) {}
  

  ngOnInit() {
    this.gudangs = this.homeService.getAllGudangs();
  }

  ionViewWillEnter(){
    this.gudangs = this.homeService.getAllGudangs();
  }

  onDisplayModeChange(mode: number) : void{
    this.displayMode = mode;
  }



}
