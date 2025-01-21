import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  email: string = "";
  password: string = "";

  constructor(private navController: NavController, private toastController: ToastController) {}


  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  // Método para validar la contraseña
  validatePassword(password: string): boolean {
    // Contraseña de al menos 8 caracteres, al menos una letra, un número y un carácter especial
    const passwordRegex = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  async login() {
    // Validate if both email and password are provided
    if (!this.email || !this.password) {
      this.presentToast('top', 'Por favor ingresa ambos campos (correo y contraseña).');
    // } else {
    //   console.log("hola desde login");
    //   this.navController.navigateRoot('/menu');
  } else if (!this.validateEmail(this.email)) {
    this.presentToast('top', 'Por favor ingresa un correo electrónico válido.');
  } else if (!this.validatePassword(this.password)) {
    this.presentToast('top', 'La contraseña debe tener al menos 8 caracteres, un número y un carácter especial.');
  } else {
    console.log("Correo y contraseña válidos, redirigiendo...");
    this.navController.navigateRoot('/menu');
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}