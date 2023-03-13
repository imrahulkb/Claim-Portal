<script>
  import Radar from "svelte-chartjs/src/Radar.svelte";
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

  var radarChartColors =  getChartColorsArray(dataColors);  

  const data = {
    height:300,
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "Desktops",
        backgroundColor: radarChartColors[0],
        borderColor: radarChartColors[1],
        pointBackgroundColor: radarChartColors[1],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: radarChartColors[1],
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "Tablets",
        backgroundColor: radarChartColors[2],
        borderColor: radarChartColors[3],
        pointBackgroundColor: radarChartColors[3],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: radarChartColors[3],
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  };
</script>

<Radar {data} height={300} class="chartjs-chart" />