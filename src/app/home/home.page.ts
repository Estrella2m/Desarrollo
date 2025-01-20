import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {


  email:string = "Estrella.morales@gmail.com";
  password:string = "password23";
  constructor( private NavController:NavController,) {

    }


login(){
  console.log("hola desde login");
  this.NavController.navigateRoot('/menu');

}
}