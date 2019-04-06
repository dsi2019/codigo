
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'


import { AuthService } from '../../services/auth.service';
import {HomePage} from '../home/home'

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  registrarError: string;
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, fb: FormBuilder,){
		this.form = fb.group({
      nombre: ['',Validators.required],
			correo: ['',Validators.required],
			contraseña: ['',Validators.required]
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
    console.log(this.form.value);
  }


registrar(){
  let data = this.form.value;
  console.log("registering");
  console.log(data);
  this.auth.registrar({email:data.correo, password:data.contraseña}).then(
    () => this.navCtrl.setRoot(HomePage),
    error => this.registrarError = error.message
  );
}

}