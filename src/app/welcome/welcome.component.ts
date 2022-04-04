import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') namekey!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  startQuiz() {
    localStorage.clear();
    localStorage.setItem('name', this.namekey.nativeElement.value);
    for (let i = 0; i < 4; i++) {
      localStorage.setItem(i.toString(), '');
    }
  }
}
