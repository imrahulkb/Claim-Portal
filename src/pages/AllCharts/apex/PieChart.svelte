<script>
  import { chart } from "svelte-apexcharts";

  const options = {
  chart: {
      height: 320,
      type: 'pie',
  }, 
  series: [44, 55, 41, 17, 15],
  labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
  colors: ["#34c38f", "#556ee6","#f46a6a", "#50a5f1", "#f1b44c"],
  legend: {
      show: !0,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: !1,
      fontSize: '14px',
      offsetX: 0,
  },
  responsive: [{
      breakpoint: 600,
      options: {
          chart: {
              height: 240
          },
          legend: {
              show: !1
          },
      }
  }]
}

</script>

<div use:chart={options} class="apex-charts" />
