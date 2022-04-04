import { Component, OnInit } from '@angular/core';
import { JsonService } from '../service/json.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public name: string = '';
  public scored: number = 0;
  public questionList: any = [];
  public answerList: any = [];
  public currentQuestion: number = 0;
  constructor(private jsonService: JsonService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.getAllAnswers();
    this.score();
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
  score() {
    for (var option of this.questionList[this.currentQuestion]?.options) {
      console.warn('current question is', this.currentQuestion);
      if (option.text == this.answerList[this.currentQuestion]) {
        this.scored += 25;
        console.warn('the score is' + this.scored);
      }
      this.currentQuestion++;
    }

    // for (let i = 0; i < 4; i++) {
    //   if (this.answerList[i] == this.questionList[i].options.text)
    //     this.scored += 25;

    // }
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  prevQuestion() {
    this.currentQuestion--;
  }
}
