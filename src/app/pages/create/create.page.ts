import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  questions:any = [];
  question:any = {}
  options:any = [];
  option:string = '';

  constructor() { }

  ngOnInit() {
      // console.log(String.fromCharCode(94 + 3)); convert number to letter, a starts at number 3
  }

  addQuestion(){

    this.questions.push(this.question);
  }

  createQuiz(){
    console.log(this.questions);
  }

  addOption(index){
    // console.log(index);
    this.options.push(this.option);
    console.log(this.options);
  }

}
