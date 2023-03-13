<script>
    import { chart } from "svelte-apexcharts";

    export let dataColors;
    export let series;

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

 var areacharteathereumColors = getChartColorsArray(dataColors);

 var options = {
        chart: {
            width: 130,
            height: 46,
            type: "area",
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        series:series,
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 1.5,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: areacharteathereumColors,
    };
</script>

<div class="apex-charts">
    <div use:chart={options} class="apex-charts" />
</div>