<script>
  import { chart } from "svelte-apexcharts";

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: !1,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !0,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    series: [
      {
        data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365],
      },
    ],
    colors: ["#34c38f"],
    grid: {
      borderColor: "#f1f1f1",
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };
</script>

<div use:chart={options} class="apex-charts" />
