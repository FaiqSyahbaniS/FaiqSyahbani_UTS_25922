import { Component, Input, OnInit } from '@angular/core';
import { Gudang } from '../../home.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  @Input() gudangs: Gudang;
  constructor() { }

  ngOnInit() {}

}
