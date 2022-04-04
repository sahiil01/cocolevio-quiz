import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {}

  getQuestionJson() {
    return this.http.get<any>('assets/questions.json');
  }
  getAnswersJson() {
    return this.http.get<any>('assets/answers.json');
  }
  // postAnswersJson(data: any,id :number) {
  //   return this.http.post<any>('assets/answers.json', data).pipe(map());
  // }
}
