import React from "react";
import "./chart.css";
import { Line } from "react-chartjs-2";

class LineChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ChartData: {
        labels: ["a", "b", "c", "d", "e", "f", "g"],
        datasets: [
          {
            label: "Order Received",
            data: [3, 7, 1, 9, 2, 4, 1],
            borderColor: "rgb(255, 179, 109)",
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
      <div className="LineChart2">
        <Line
          data={this.state.ChartData}
          options={{
            title: {
              display: true,
              text: "97.5k",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "top",
            },
            maintainAspectRatio: false,
            responsive: true,
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

export default LineChart2;
