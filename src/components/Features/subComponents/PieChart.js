import React from "react";
import "./chart.css";
import { Pie } from "react-chartjs-2";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ChartData: {
        labels: ["Completed Tickets"],
        datasets: [
          {
            label: "Subscriber Gained",
            data: [83, 17],
            borderColor: ["#7666EC", "#E75458"],
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
      <div className="LineChart1">
        <Pie
          data={this.state.ChartData}
          width={100}
          height={50}
          options={{
            title: {
              display: true,
              text: "83%",
              fontSize: 25,
            },
            responsive: true,
            legend: {
              display: true,
              position: "top",
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

export default PieChart;
