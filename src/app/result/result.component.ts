import { Component, OnInit } from '@angular/core';
import { JsonService } from '../service/json.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public name: string = '';
  public scored: string = '';
  public questionList: any = [];
  public answerList: any = [];
  public currentQuestion: number = 0;
  constructor(private jsonService: JsonService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.getAllAnswers();
    this.scored = localStorage.getItem('score')!;
  }
  getAllQuestions() {
    this.jsonService.getQuestionJson().subscribe((res) => {
      console.log(res.questions);
      this.questionList = res.questions;
    });
  }
  getAllAnswers() {
    // this.jsonService.getAnswersJson().subscribe((res) => {
    //   // console.warn(res.answers);
    //   // console.warn('hello');
    //   // this.answerList = res.answers;
    //   // console.warn(this.answerList);
    // });
    this.answerList = localStorage;
    // console.warn(this.answerList);
    // console.warn('hello');
    // console.warn(this.answerList[0]);
  }

  nextQuestion() {
    this.currentQuestion++;
  }
  prevQuestion() {
    this.currentQuestion--;
  }
}
