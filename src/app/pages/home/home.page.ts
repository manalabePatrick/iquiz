import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  imageNumber:number = 1;
  accoun_id:string = 'm7lv0c00a2';
  quizzes:any = [];

  constructor(private apiService: ApiService, private alertController: AlertController) { }


  ngOnInit() {
    this.getQuizzes();
  }

  changeImage(){

    if(this.imageNumber < 6){
      this.imageNumber += 1;
    }else{
      this.imageNumber = 1;
    }
    
  }

  getQuizzes(){

    let requestObject = {
      METHOD: 'get',
      LOCATION: 'quizzes',
      ACCOUNT_ID: this.accoun_id
    }

    this.apiService.makeRequest(requestObject).then((data:any) =>{
      this.quizzes = data;
    });

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'FIrst Quarter Quiz',
      message: '12/20',
      buttons: ['OK']
    });

    await alert.present();

    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

}
