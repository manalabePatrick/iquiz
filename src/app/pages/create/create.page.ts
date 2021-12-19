import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  questions:any = [];
  generateQuestion:any =[];

  question:any = {
    question: '',
    options: []
  }

  options:any = [];
  option:string = 'sample';

  questionText:string = '';

 
  constructor(private alertController: AlertController) { }


  ngOnInit() {

    
    // this.sample[1].title = 'changed';
    // console.log(this.sample[1]);
    // console.log(this.sample);

      // console.log(String.fromCharCode(94 + 3)); convert number to letter, a starts at number 3
  }

  addQuestion(){
    this.questions.push(this.question);
  }

  createQuiz(){
    console.log(this.questions);
  }

  addOption(index){

    this.questions[index] = this.questionText;
    // this.options.push(this.option);
    // this.questions[index].options = this.options;
    // console.log(this.questions[index]);

    console.log(this.question);
  }

  async presentOption(index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Answer'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            // console.log('Confirm Ok');
            this.addOption(index);
          }
        }
      ]
    });

    await alert.present();
  }

}
