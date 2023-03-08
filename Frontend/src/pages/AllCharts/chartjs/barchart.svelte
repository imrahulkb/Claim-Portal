<script>
  import Bar from "svelte-chartjs/src/Bar.svelte";
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

  var barChartColor =  getChartColorsArray(dataColors);     

  const data = {
    width: 474,
    height: 300,
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales Analytics",
        backgroundColor: barChartColor[0],
        borderColor: barChartColor[0],
        borderWidth: 1,
        hoverBackgroundColor: barChartColor[1],
        hoverBorderColor: barChartColor[1],
        data: [65, 59, 81, 45, 56, 80, 50, 20],
      },
    ],
  };
  let option = {
    scales: {
      xAxes: [
        {
          barPercentage: 0.4,
        },
      ],
    },
  };
</script>

<Bar {data} {option} width={474} height={300} />