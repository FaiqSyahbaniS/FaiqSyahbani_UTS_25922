import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gudang } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-detail-barang',
  templateUrl: './detail-barang.page.html',
  styleUrls: ['./detail-barang.page.scss'],
})
export class DetailBarangPage implements OnInit {
  loadedGudang: Gudang;
  constructor(
    private activatedRoute: ActivatedRoute,
    private gudangsService: HomeService,
  ) { }

  ngOnInit() {
    // ......
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has('gudangId')) { return; }
      const gudangId = paramMap.get('gudangId');
      this.loadedGudang = this.gudangsService.getGudang(gudangId);
    });
  }
  
}
