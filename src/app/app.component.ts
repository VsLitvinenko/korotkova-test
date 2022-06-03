import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  questions = [
    {
      title: 'Методы измерений СИКН бывают… (несколько вариантов)',
      multiAnswer: true,
      vars: [
        { title: 'Прямыми', right: true },
        { title: 'Обратными', right: false },
        { title: 'Непосредственными', right: false },
        { title: 'Косвенными', right: true },
      ],
      userAnswer: [false, false, false, false],
    },
    {
      title: 'Что из нижеперечисленного НЕ входит в состав СИКН?',
      multiAnswer: false,
      vars: [
        { title: 'БФ', right: false },
        { title: 'СОИ', right: false },
        { title: 'УРД', right: false },
        { title: 'АВО', right: true },
      ],
      userAnswer: 0
    },
    {
      title: 'Какая часть СИКН предназначена для очистки нефти от грубых механических примесей для исключения засорения и поломки ПР (преобразователя расхода)?',
      multiAnswer: false,
      vars: [
        { title: 'БИК', right: false },
        { title: 'БИЛ', right: false },
        { title: 'БФ', right: true },
        { title: 'ПЗУ', right: false },
      ],
      userAnswer: 0
    },
    {
      title: 'Что из нижеперечисленного входит в систему сбора и обработки информации?',
      multiAnswer: false,
      vars: [
        { title: 'Устройства сопряжения', right: false },
        { title: 'Искрозащита', right: false },
        { title: 'Устройства индикации', right: false },
        { title: 'Все варианты верны', right: true },
      ],
      userAnswer: 0
    },
    {
      title: 'В какой части СИКН устанавливается узел регулирования давления?',
      multiAnswer: false,
      vars: [
        { title: 'На входе', right: false },
        { title: 'На выходе', right: true },
        { title: 'Не имеет значения', right: false },
      ],
      userAnswer: 0
    },
    {
      title: 'Как расшифровывается ПР (как элемент СИКН)?',
      multiAnswer: false,
      vars: [
        { title: 'Подвижный регулятор', right: false },
        { title: 'Преобразователь расхода', right: true },
        { title: 'Предохранитель расхода', right: false },
        { title: 'Процентный расход', right: false },
      ],
      userAnswer: 0
    },
    {
      title: 'Что измеряет параметр, характеризующий свойство жидкости оказывать сопротивление сдвигу при перемещении частей жидкости относительно друг друга?',
      multiAnswer: false,
      vars: [
        { title: 'Плотномеры', right: false },
        { title: 'Расходомеры', right: true },
        { title: 'Влагомеры', right: false },
        { title: 'Вискозиметры', right: false },
      ],
      userAnswer: 0
    },
  ]

  public isResult = false;
  public rightAnswersCounter = 0;

  public doResult(): void {
    this.isResult = true;

    this.questions.forEach(question => {
      if (question.multiAnswer) {
        if (JSON.stringify(question.userAnswer) === JSON.stringify(question.vars.map(item => item.right))) {
          this.rightAnswersCounter += 1;
        }
      }
      else {
        if (question.vars[question.userAnswer as number].right) {
          this.rightAnswersCounter +=1;
        }
      }
    })
  }

  public changeMultiUserRes(i: number, j: number, event: any): void {
    (this.questions[i].userAnswer as boolean[])[j] = event.target.checked;
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
