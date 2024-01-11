import ReactApexChart from "react-apexcharts";

export default function ColumnStatistics(props) {
    const res = {
          
        series: [{
          name: 'Inflation',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          dataLabels: {
            enabled: false,
            formatter: function (val) {
              return val + "%";
            },
            offsetX: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            datetime: [1,2,3,4,5,6,7,8,9,10,12],
            position: 'bottom',
            tickAmount: 'dataPoints',
            axisBorder: {
              show: true
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              }
            }
          
          },

        },     
      };
  return (
    <div>
      <ReactApexChart
        options={res.options}
        series={res.series}
        type="bar"
        height={220}
      />
    </div>
  );
}

