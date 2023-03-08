<script>
  import Line from "svelte-chartjs/src/Line.svelte";
  export let dataColors;
  function getChartColorsArray(colors) {
		return colors.map(function (value) {
			var newValue = value.replace(' ', '');
			if (newValue.indexOf(',') === -1) {
				var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
				if (color.indexOf('#') !== -1) color = color.replace(' ', '');
				if (color) return color;
				else return newValue;
			} else {
				var val = value.split(',');
				if (val.length === 2) {
					var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
					rgbaColor = 'rgba(' + rgbaColor + ',' + val[1] + ')';
					return rgbaColor;
				} else {
					return newValue;
				}
			}
		});
	}
  var lineChartColor =  getChartColorsArray(dataColors);
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
    ],
    datasets: [
      {
        label: "Sales Analytics",
        fill: true,
        lineTension: 0.5,
        backgroundColor: lineChartColor[0],
        borderColor: lineChartColor[1],
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: lineChartColor[1],
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: lineChartColor[1],
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80],
      },
      {
        label: "Monthly Earnings",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(235, 239, 242, 0.2)",
        borderColor: "#ebeff2",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#ebeff2",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#ebeff2",
        pointHoverBorderColor: "#eef0f2",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36],
      },
    ],
  };

  var option = {
    scales: {
      yAxes: [
        {
          ticks: {
            max: 100,
            min: 20,
            stepSize: 10,
          },
        },
      ],
    },
  };
</script>

<Line {data} options={option} width={474} height={300}  />