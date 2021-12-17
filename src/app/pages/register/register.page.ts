import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credentials:any = {
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  }

  constructor(private authService: AuthService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  register(){

    
    if(this.credentials.password === this.credentials.confirmPass){
      let requestObject = {
        BODY: this.credentials,
        METHOD: 'post',
        LOCATION: 'register'
      }
  
  
      this.authService.userAuth(requestObject).then((data:any) =>{
        this.router.navigate(['/login']);
        this.presentToast('Account Created');
      });
    }else{
      this.presentToast('Please check your password');
    }

    
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
