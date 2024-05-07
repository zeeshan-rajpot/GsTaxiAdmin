import React from "react";
import Chart from "react-apexcharts";

const CoulmnChart = () => {
  const chartData = {
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          colors: {
            backgroundBarColors: ["#EBEBEB"],
            backgroundBarOpacity: 1,
            backgroundBarRadius: 5,
          },
          dataLabels: {
            position: "top",
          },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Fe",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      fill: {
        opacity: 1,
      },
      colors: ["#3D9BD6"],
      grid: {
        borderColor: "#f1f1f1",
      },
    },
    series: [
      {
        name: "Rides",
        data: [30, 40, 45, 50, 49, 60, 55, 45, 40, 35, 42, 38],
      },
    ],
  };
  return (
    <>
      <div className="bg-white rounded-2xl p-4">
        <div className="flex justify-between ">
          <h1 className="text-[#1F1F1F] text-xl font-semibold">
            Total Number of Rides
          </h1>
          <select id="months" name="months" className="bg-[#F5F5F5] p-1">
            <option value="0"> Monthly</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="column-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </>
  );
};

export default CoulmnChart;
