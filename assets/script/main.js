const chartGenerator = {

  init(){
    this.cacheSelector()
    this.generateChart()
  },

  cacheSelector(){
    this.$chartPlotArea = document.querySelector('#chart_plot_area')
  },

  generateChart(){

    this.getChartData(this.params.source)
    .then(
      response => {

        const amounts = response.map(element => element.amount);
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
            
            const newColumn = this.chartElements.column(amount, barHeight, day)
            this.$chartPlotArea.appendChild(newColumn)
          }
        )
      }
    )
  },

  async getChartData(source){
    return await fetch(source).then(response => response.json())
  },

  calculateBarHeightUnit(amountsArr){
    const maxHeight = this.$chartPlotArea.clientHeight
    const maxBarAmount = Math.max(...amountsArr)

    return ( Math.round( (maxHeight / maxBarAmount) * this.params.precision ) / this.params.precision )
  },

  calculateBarHeight(barHeightUnit, amount){
    const barHeight = Math.round(barHeightUnit * amount)
    return barHeight
  },

  chartElements: {

    column(yAxisValue, barHeight, xAxisValue) {

      const chartColumn = document.createElement(this.chartParams.column.element)
      chartColumn.classList.add(this.chartParams.column.class)

      if(this.isCurrentDay(xAxisValue)) { 
        chartColumn.classList.add(this.chartParams.column.class_current)
      }

      chartColumn.appendChild(
        this.yAxis(yAxisValue)
      )

      chartColumn.appendChild(
        this.bar(barHeight)
      )

      chartColumn.appendChild(
        this.xAxis(xAxisValue)
      )

      return chartColumn
    },

    yAxis(value) {
      const chartYAxis = document.createElement(this.chartParams.y.element)
      chartYAxis.classList.add(this.chartParams.y.class)
      chartYAxis.innerText = value

      return chartYAxis
    },

    bar(height) {
      const chartBar = document.createElement(this.chartParams.bar.element)
      chartBar.classList.add(this.chartParams.bar.class)
      chartBar.style.height = height

      return chartBar
    },

    xAxis(value) {
      const chartXAxis = document.createElement(this.chartParams.x.element)
      chartXAxis.classList.add(this.chartParams.x.class)
      chartXAxis.innerText = value

      return chartXAxis
    },

    isCurrentDay(day) {
      const today = new Date().getDay()
      return this.chartParams.dayNames[today] === day
    },

    chartParams: {

      x: {
        element: 'p',
        class: 'x-axis'
      },

      y: {
        element: 'p',
        class: 'y-axis'
      },

      bar: {
        element: 'div',
        class: 'bar'
      },

      column: {
        element: 'div',
        class: 'column',
        class_current: 'current'
      },

      dayNames: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    }

  },

  params: {
    source: './assets/json/data.json',
    precision: 10000,
  },


}

chartGenerator.init()