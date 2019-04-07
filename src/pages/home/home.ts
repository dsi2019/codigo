import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CafeteríaService } from '../../services/cafetería.service';
import { Cafetería } from '../../models/cafeteríamodel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cafeterías: Cafetería[]= [];  
  constructor(public navCtrl: NavController,
    private cafeteríaService: CafeteríaService) {

  }

  ionViewWillEnter(){
    this.cafeterías = this.cafeteríaService.getCafeterías();
  };
}
