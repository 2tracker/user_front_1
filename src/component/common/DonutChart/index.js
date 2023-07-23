import React from 'react';
import ReactApexCharts from 'react-apexcharts';

export const DonutChart = () => {
    const options = {
        series: [55 ,44],
        chart: {width: '260' , height : '147px',type: 'donut'},
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        
    }
    return (
      <div id="chart">
        <ReactApexCharts className="chart" options={options} series={options.series} type="donut" width={options.chart.width} />
      </div>
    );
  };