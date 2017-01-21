const app = {
  testName: 'Тесты по программированию',
  ol: document.createElement('ol'),
  questions: [
    { name: 'Вопрос 1', answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'] }, // прилетает с серверва
    { name: 'Вопрос 2', answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'] }, // прилетает с серверва
    { name: 'Вопрос 3', answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'] } // прилетает с серверва
  ],

  questionHeader(name) {
    const li = this.new('li');
    const h2 = this.new('h2');
    const ul = this.new('ul');
    h2.textContent = name;
    li.append(h2, ul);
    this.ol.append(li);
    return ul;
  },
  render() {
    const body = document.body;
    const main = this.new('main');
    const header = this.new('h1');

    header.textContent = this.testName;

    this.questions.forEach(question => {
      const name = question.name;
      const ul = this.questionHeader(name);

      question.answers.forEach(answer => {
        const li = this.new('li');
        const input = this.new('input');
        const label = this.new('label');
        input.setAttribute('type', 'checkbox');

        label.textContent = answer;
        li.append(input, label);

        ul.append(li);
      })
    });

    main.append(header);
    main.append(this.ol);
    body.append(main);


  },
  new(elemName) {
    return document.createElement(elemName);
  }
}

app.render();