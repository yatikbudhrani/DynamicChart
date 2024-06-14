const ctx = document.getElementById("realTimeChart").getContext("2d");
let chart;

const initialData = {
  labels: [],
  datasets: [
    {
      label: "Adani Ports NSE",
      data: [],
      backgroundColor: "#806C00",
      borderColor: "#0028FF",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      fill: false,
    },
  ],
};

const chartConfig = {
  type: "bar",
  data: initialData,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Market Value in Dollars",
        },
      },
    },
    animation: false,
  },
};

chart = new Chart(ctx, chartConfig);

function addData() {
  const newData = Math.floor(Math.random() * 50);
  chart.data.labels.push(chart.data.labels.length);
  chart.data.datasets[0].data.push(newData);
  chart.update();
}

setInterval(addData, 5000);
