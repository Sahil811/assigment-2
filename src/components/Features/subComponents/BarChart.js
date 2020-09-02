import React from "react";
import "./chart.css";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ChartData: {
        labels: ["a", "b", "c", "d", "e", "f"],
        datasets: [
          {
            data: [2, 4, 7, 5, 4, 2, 1],
            backgroundColor: ["#E5E5E5", "#E5E5E5", "rgb(116, 104, 240)"],
            cornerRadius: 20,
            fill: false,
            pointRadius: 0,
            xAxisID: false,
            yAxisID: false,
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="barChart">
        <Bar
          data={this.state.ChartData}
          width={100}
          height={50}
          options={{
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
            responsive: true,
            cornerRadius: 20,
            tooltips: {
              enabled: false,
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  barPercentage: 0.4,
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default BarChart;
