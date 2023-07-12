import { useEffect } from "react"

import {
  Chart,
  Colors,
  LineController,
  LineElement,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  SubTitle,
  Title
  
} from 'chart.js'

Chart.register(
  Colors,
  LineController,
  LineElement,
  BarController,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  SubTitle,
  Title
 
);
function Example( {val}) {

  console.log(val);
  var option = {
    responsive: true,
    spanGaps: true,
    plugins: {
      title: {
        display: true,
        text: 'Вашите стойности:'
      }
    },
    legend: {
      display: true,
      labels: {
          color: 'rgb(255, 99, 132)'
      }
  },
    scales: {

      // y: {
      //   stacked: true,
      //   grid: {
      //     display: true,
      //     color: "rgba(255,99,132,0.2)"
      //   },
      //   title: {
      //     display: true,
      //     text: 'Концентрация'
      //   },
      // },
      x: {
        grid: {
          display: true
        },
        title: {
          display: true,
          text: 'Време'
        },
      }
    }
  };

  var data = {
    labels: [  "0 мин",  "30 мин",   "60 мин",  "90 мин",  "120 мин", "150 мин"],
    datasets: [
      {
        label: "Вашата глюкоза",

        borderColor: "rgba(120,180,80)",
        // borderWidth: 2,
        lineTension: 0.4,     
  
        data: [val.glucose0, null, val.glucose60, null,  val.glucose120]
      },
      {
        label: "Вашият инсулин",

        borderColor: "rgba(155,9,203)",
        // borderWidth: 2,
        lineTension: 0.4,  
      
        data: [val.insuline0, null, val.insuline60, null,  val.insuline120]
      },
      {
        label: "Реф. инсулин",

        borderColor: "rgba(235,50,30)",
        // borderWidth: 2,
        lineTension: 0.4,  
  
        data: [ 5, 18.5, 25, 12, 5, 4]
      }
    ]
  };

  useEffect(() => {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: option
    });
  }, [])
  return (
    <>


      <div className=" flex flex-col items-center justify-between p-8 items-center  justify-center ">
        <div className="chart-container items-center  justify-center flex flex-col items-center justify-between p-8" style={{ position: 'relative', height: '60vh', width: '90vw' }}>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  )
}

export default Example;