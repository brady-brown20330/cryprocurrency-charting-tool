// App.jsx
import React from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import Chart from './components/chart.jsx';

// const state = {
//     labels: ['January', 'February', 'March',
//              'April', 'May'],
//     datasets: [
//       {
//         label: 'Rainfall',
//         fill: false,
//         lineTension: 0.5,
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 2,
//         data: [65, 59, 80, 81, 56]
//       }
//     ]
//   }


class App extends React.Component {
constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
        chartData: {
            labels: ['January', 'February', 'March',
                     'April', 'May'],
            datasets: [
              {
                label: 'Botcoin Historical Price',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
              }
            ]
          },
          currentPrice: ''
     };
    }
render() {
    return (
        <div>
            <Chart state={this.state.chartData}/>

    <div>CurrentPrice: ${this.state.currentPrice}</div>
        </div>
    )
}


componentDidMount() {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(data => this.setState ({
      currentPrice: data.data.bpi.USD.rate
    }))

    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(data => this.setState ({
      chartData:
      {
        labels: Object.keys(data.data.bpi),
        datasets: [
          {
            label: 'Botcoin Historical Price',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: Object.values(data.data.bpi)
          }
        ]
      }
    }))



  }


}

export default App;


/**
 *
 * const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
 */