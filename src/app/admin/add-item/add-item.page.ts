import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Gudang } from 'src/app/home/home.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  form: NgForm;
  gudangs: Gudang[];
  type: string;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }

    this.homeService.addGudang(form.value);
    this.router.navigate(['/admin']);
  }

}
