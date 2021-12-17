import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials:any = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  //User login
  login(){

    let requestObject = {
      BODY: this.credentials,
      METHOD: 'get',
      LOCATION: 'login'
    }

    this.authService.userAuth(requestObject).then((data:any) =>{

        if(data.message === 'not found'){
          this.presentToast("Please check your email and password.");
        }else{
          this.router.navigate(['/home']);
        }

    });
  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
