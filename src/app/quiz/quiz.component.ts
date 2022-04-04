import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { JsonService } from '../service/json.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  public name: string = '';
  public questionList: any = [];
  public answers = { 0: null, 1: null, 2: null, 3: null };

  public currentQuestion: number = 0;
  constructor(private jsonService: JsonService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
  }
  getAllQuestions() {
    this.jsonService.getQuestionJson().subscribe((res) => {
      console.warn(res.questions);
      this.questionList = res.questions;
    });
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  prevQuestion() {
    this.currentQuestion--;
  }

  answer(currentQuesNo: number, option: any) {
    console.warn(currentQuesNo);
    console.warn(option);
    localStorage.setItem(currentQuesNo.toString(), option.text);
  }
}
