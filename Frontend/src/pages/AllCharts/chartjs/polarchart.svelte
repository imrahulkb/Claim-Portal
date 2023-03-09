<script>
   import Polar from "svelte-chartjs/src/Polar.svelte"
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
  var polarAreaChartColors =  getChartColorsArray(dataColors);    

   const data = {
     height:300,
      datasets: [
        {
          data: [11, 16, 7, 18],
          backgroundColor: polarAreaChartColors,
          label: "My dataset", // for legend
          hoverBorderColor: "#fff",
        },
      ],
      labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
    };

</script>

<Polar data={data} height={300} class="chartjs-chart" />