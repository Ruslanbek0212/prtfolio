import React, { useContext } from 'react'
import ReactApexChart from 'react-apexcharts';
import { Contexts } from '../context/Contexts';

export default function AssetStatistic() {
  const {darkMode} = useContext(Contexts)
    const res = {
          
        series: [{
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          title: {
            text: 'Activity',
            align: 'left',
            style: {
              fontSize:  '20px',
              fontWeight:  'bold',
              color:  darkMode? 'white':'black'
            },
            },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          yaxis:{
            show:false
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
    
  return (
    <div>
         <ReactApexChart options={res.options} series={res.series} type="area" height={230} />
    </div>
  )
}

