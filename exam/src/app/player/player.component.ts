import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
 
  constructor(private service:ServiceService, private fb:FormBuilder) { }
  questions;
  questionText;
  questionOptions;
  currentQuestionId;
  currentQuestionIndex=1;
  questionShow=1;
  correctansShow;
  wrongansShow;
  questionInfoShow;
  correct_answer;
  form;
  ngOnInit() {
  	this.fetchUser();
  	this.form = this.fb.group({answer:["",[]]});
  }
  
  private async checkAnswer(){
  	let data = {question:this.currentQuestionId, answer: this.form.get('answer').value};
  	//console.log(data);
  	let response = await this.service.verifyAnswer(data.question, data.answer);
  	console.log();
  	let timer = 500;
  	if(response.ans_status==1){
  		this.correctansShow=1;
  		this.wrongansShow=0;
  	}else{
  		this.wrongansShow=1;
  		this.correctansShow=0;
  		this.correct_answer = response.ans_text;
  		timer = 2000;
  	}
  	this.currentQuestionIndex +=1; 
  	

  	setTimeout(()=>{ 
  		this.wrongansShow=0;
  		this.correctansShow=0;
  		this.correct_answer= "";
  		this.loadQuestion(this.currentQuestionIndex);
  	},timer);

  }




  loadQuestion(index){
  	this.questionText = this.questions[index].question;
  	this.questionOptions = this.questions[index].option;
  	this.currentQuestionId = this.questions[index].id;
  }

  private async fetchUser() {
    this.questions = await this.service.random();
   	this.loadQuestion(this.currentQuestionIndex);
   	//console.log(this.questions);
  }

}
