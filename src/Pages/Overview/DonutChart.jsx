import React from "react";
import Chart from "react-apexcharts";
import "./donutchart.css";

const DonutChart = () => {
  const chartData = {
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                offsetY: 0,
              },
              total: {
                show: true,
                showAlways: true,
                label: "Total",
                fontSize: "18px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 600,
                color: "#373d3f",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      labels: ["Rides", "Food", "Parcel"],
      legend: {
        show: true,
        position: "bottom",
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 400,
        labels: {
          colors: "#373d3f",
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          radius: 12,
        },
        itemMargin: {
          horizontal: 12,
          vertical: 8,
        },
      },
      colors: ["#3D9BD6", "#F5A623", "#4E9C0B"],
      dataLabels: {
        enabled: false,
      },
    },
    series: [244, 200, 200],
  };

  return (
    <div className="donut-chart bg-white rounded-2xl p-4 ">
      <h1 className="text-[#1F1F1F] text-xl font-semibold flex justify-center mb-2">
        Total Rides today
      </h1>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={260}
      />
      <div className="flex justify-around p-5">
        <div className="space-y-3">
          {chartData.options.labels.map((label, index) => (
            <div key={index}>
              <span
                className="w-2 h-2 inline-block mr-2 rounded-3xl"
                style={{ backgroundColor: chartData.options.colors[index] }}
              ></span>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3 ">
          {chartData.series.map((series, index) => (
            <div key={index} className="ml-10">
              {series}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
