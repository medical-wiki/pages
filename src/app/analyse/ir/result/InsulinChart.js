import { useEffect } from "react"
import { Chart, LineController, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale);

function InsulinChart({ values }) {

  var options = {
    responsive: true,
    spanGaps: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Вашите стойности:'
      }
    },
    scales: {
      x: {
        grid: {
          display: true
        },
        title: {
          display: false,
          text: 'Време'
        },
      }
    }
  };

  var data = {
    labels: ["0 мин", "30 мин", "60 мин", "90 мин", "120 мин"],
    datasets: [
      {
        label: "КЗ",
        borderColor: "rgba(59, 130, 246)",
        lineTension: 0.4,
        data: [values.glucose0, null, values.glucose60, null, values.glucose120]
      },
      {
        label: "инсулин",
        borderColor: "rgba(220,38,38)",
        lineTension: 0.4,
        data: [values.insuline0, null, values.insuline60, null, values.insuline120]
      },
      {
        label: "реф. инсулин",
        borderColor: "rgba(74, 222, 128)",
        lineTension: 0.4,
        data: [5, 18.5, 25, 10, 6, 4]
      }
    ]
  };

  useEffect(() => {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  }, [])
  return (
    <div className="chart-container items-center justify-center flex flex-col items-center justify-between" style={{ position: 'relative', height: '35vh', width: '90vw' }}>
      <canvas id="myChart"></canvas>
    </div>
  )
}

export default InsulinChart;