import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'korotkova-test';

  questions = [
    {
      title: 'Вопро текст очень умного вопроса',
      multiAnswer: false,
      vars: [
        { title: 'вариант sdssd 1', right: false },
        { title: 'вариант sd 2', right: false },
        { title: 'вариант sdsd 3', right: true },
        { title: 'вариант 22 4', right: false },
      ],
      userAnswer: 0,
    },
    {
      title: 'текст не самого умного вопроса зато много вариантов',
      multiAnswer: true,
      vars: [
        { title: 'вариант sdf 1', right: false },
        { title: 'вариант ff 2', right: false },
        { title: 'вариант dfdf dfdf 3', right: true },
        { title: 'вариант sdfdsf 4', right: false },
      ],
    },
  ]

  public isResult = false;

  public doResult(): void {
    this.isResult = true;
  }

  public labelClassSingle(
    isRight: boolean,
    questionIndex: number,
    varIndex: number,
  ): string {
    if (!this.isResult) {
      return '';
    }
    else if (isRight) {
      return 'text-success';
    }
    else if (this.questions[questionIndex].userAnswer === varIndex ) {
      return 'text-danger';
    }
    return '';
  }

  public labelClassMulti(
    isRight: boolean,
    value: boolean
  ): string {
    if (!this.isResult) {
      return '';
    }
    else if (isRight) {
      return 'text-success';
    }
    else if (value) {
      return 'text-danger';
    }
    return '';
  }
}
