
var skillcanvas = document.getElementById("skillku");

Chart.defaults.global.defaultFontFamily = "Helvetica";
Chart.defaults.global.defaultFontSize = 15;

var skillData = {
    labels: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JQuery",
        "JavaScript"
    ],
    datasets: [
        {
            data: [100, 80, 85, 70, 60],
            backgroundColor: [
                "#B32727",
                "#84FF63",
                "#CE65CE",
                "orange",
                "turquoise"
            ],
            hoverBorderWidth: 3,
            hoverBorderColor: '#303030'
        }]
    };
var pieChart = new Chart(skillcanvas, {
  type: 'doughnut',
  data: skillData,
  options: {
      title: {
          fontColor: "#303030",
          display: true,
          text: "Keahlian dalam programming",
          fontSize: 20
      },
      legend: {
          position: 'right'
      }
  }
});

var ctx = document.getElementById("chartPersonal");
var myPersonal = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Displin", "Kreatif", "Kerjasama", "Ketelitian", "Humor"],
        datasets: [{
            data: [9, 8, 6, 3, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: true,
            fontColor: "#303030",
            text: "Personal",
            fontSize: 20
        },
        legend: {
            display: false
        }
    }
});

jQuery('.timeline').timeline({
    mode: 'horizontal',
    visibleItems: 3
  });
