# Frontend Mentor - Expenses chart component solution

Entusiasmado em compartilhar minha solução para o desafio Expenses Chart Component do Frontend Mentor. Desenvolvi esta aplicação web dinâmica usando HTML, CSS/SASS e JavaScript.

O desafio exigia a criação de um gráfico interativo que visualizasse as despesas dos últimos 7 dias. Os usuários podem passar o mouse sobre as barras para ver os valores exatos gastos a cada dia.

Empreguei técnicas modernas de desenvolvimento web, incluindo manipulação de DOM, programação assíncrona com Fetch API e programação orientada a objetos.

Confira minha solução e o próprio desafio em Frontend Mentor.
Feedbacks são bem vindos!

Agradecimento aos meus professores @Thiago Medeiros da @Formação Full Stack Javascript e @Rodrigo de Losina Silva da @Alfamidia Educação Profissional

---

I'm thrilled to share my solution for the Expenses Chart Component challenge by Frontend Mentor. I developed this dynamic web application using HTML, CSS/SASS, and JavaScript.

The challenge required creating an interactive chart that visualizes expenses over the last 7 days. Users can hover over the bars to view the exact amounts spent each day.

I employed modern web development techniques, including DOM manipulation, asynchronous programming with the Fetch API, and object-oriented programming.

Check out my solution and the challenge itself on Frontend Mentor.
I welcome any feedback or suggestions for improvement.

[Frontend Mentor](https://www.frontendmentor.io/solutions/expenses-chart-component-challenge-using-javascript-and-sass-xWQ2IBulH1)

\#frontend
\#desenvolvimento
\#webdevelopment
\#programacao
\#programming
\#web
\#javascript
\#html
\#css
\#sass
\#DataVisualization
\#FrontendMentor
\#CodeChallenge

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
    - [Mobile](#mobile)
    - [Desktop](#desktop)
    - [Desktop active states](#desktop-active-states)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

#### Mobile

![Mobile Screenshot](./assets/design/screenshot-mobile.jpeg)

#### Desktop

![Desktop Screenshot](./assets/design/screenshot-desktop.jpeg)

#### Desktop active states

![Desktop Screenshot active states](./assets/design/screenshot-desktop-active-states.jpeg)

### Links

- Solution URL: [Github repository](https://github.com/jefersonBorges/fem-expenses-chart)
- Live Site URL: [Github live page](https://jefersonborges.github.io/fem-expenses-chart/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- SASS
- JavaScript
  - DOM
  - OOP
  - Async
  - ES6 Features

### What I learned

Using JS Dom to generate the chart elements was very fun!

```js

//starts after the page content is loaded
generateChart(){

    //loads the data.json containing the expenses entry values
    this.getChartData(this.params.source)
    .then(
      response => {
        
        const amounts = response.map(element => element.amount);

        //based on the highest amount calculates the unit height for the chart bar
        const barHeightUnit = this.calculateBarHeightUnit(amounts) 

        return {response, barHeightUnit}
      }
    )
    .then(
      chartData => {

        chartData.response.forEach(
          data => {

            const amount = `$${data.amount}`
            const barHeight = `${this.calculateBarHeight(chartData.barHeightUnit, data.amount)}px`
            const day = data.day

            //create the chart column for each expense entry value
            const newColumn = this.chartElements.column(amount, barHeight, day)
            this.$chartPlotArea.appendChild(newColumn)
          }
        )
      }
    )
  },
```

## Author

- GitHub - [jefersonBorges](https://github.com/jefersonBorges/jefersonBorges)
- Frontend Mentor - [@jefersonBorges](https://www.frontendmentor.io/profile/jefersonBorges)
- Linkedin - [Jeferson Borges Linkedin](https://www.linkedin.com/in/jeferson-borges-543b34229)

---
