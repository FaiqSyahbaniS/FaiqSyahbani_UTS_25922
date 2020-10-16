import { Component, Input, OnInit } from '@angular/core';
import { Gudang } from '../../home.model';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
 @Input() gudangs: Gudang;
  constructor() { }

  ngOnInit() {}

}
