<script>
    import { chart } from "svelte-apexcharts";
    export let dataColors;
    function getChartColorsArray(colors) {
        return colors.map(function (value) {
            var newValue = value.replace(" ", "");
            if (newValue.indexOf(",") === -1) {
                var color = getComputedStyle(
                    document.documentElement
                ).getPropertyValue(newValue);
                if (color.indexOf("#") !== -1) color = color.replace(" ", "");
                if (color) return color;
                else return newValue;
            } else {
                var val = value.split(",");
                if (val.length === 2) {
                    var rgbaColor = getComputedStyle(
                        document.documentElement
                    ).getPropertyValue(val[0]);
                    rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                    return rgbaColor;
                } else {
                    return newValue;
                }
            }
        });
    }

    var ApplicationReveicedTimeColors = getChartColorsArray(dataColors);
    
    var options = {
        chart: {
            type: "line",
            height: 378,
            toolbar: {
                show: false,
            },
        },
        series: [
            {
                name: "Received Application",
                data: [34, 44, 54, 21, 12, 43, 33, 80, 66],
            },
        ],
        stroke: {
            width: 3,
            curve: "smooth",
        },
        labels: [
            "8 PM",
            "9 PM",
            "10 PM",
            "11 PM",
            "12 PM",
            "1 AM",
            "2 AM",
            "3 AM",
            "4 AM",
        ],
        dataLabels: {
            enabled: false,
        },
        colors: ApplicationReveicedTimeColors,
        markers: {
            hover: {
                sizeOffset: 4,
            },
        },
    };
</script>

<div use:chart={options} class="apex-charts pb-3" />
