import ReactApexChart from 'react-apexcharts';
// import RadialBox from './RadialBox';

export default function EllipsStatistics(props) {

  const data = {

    series: [props.amaount],
    options: {
      chart: {
        height: 250,
        type: 'radialBar',
        // background : props.bg

      },
      theme: {
        monochrome: {
          enabled: true,
          color: props.lineColor,
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -120,
          endAngle: 120,
          track: {
            background: props.lineBg,
            startAngle: -120,
            endAngle: 120,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: "24px",
              show: true
            }
          }
        }
      },
      stroke: {
        lineCap: "round",
      },
    }
  };

  return (
    <div >
      <ReactApexChart options={data.options} series={data.series} type="radialBar" height={200} />
    </div>
  )
}


