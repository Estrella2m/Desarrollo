import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
  standalone :false,
})
export class RegisterPage {

  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private navController: NavController, private toastController: ToastController) {}

  async register() {
    // Validar que todos los campos estén llenos
    if (!this.email || !this.password || !this.confirmPassword) {
      this.presentToast('top', 'Por favor llena todos los campos.');
    } else if (this.password !== this.confirmPassword) {
      // Verificar que las contraseñas coincidan
      this.presentToast('top', 'Las contraseñas no coinciden.');
    } else {
      console.log("Registro exitoso");
      this.navController.navigateRoot('/login');  // Redirigir al login después de registrarse
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
