<script>
  import { Row, Col, Card, CardBody } from "sveltestrap";
  import { chart } from "svelte-apexcharts";

  var options1 = {
    series: [{
        name: 'BTC',
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
        enabled: !0
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#f1b44c'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [25, 100, 100, 100]
        },
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        marker: {
            show: !1
        }
    }
};

var options2 = {
    series: [{
        name: 'ETH',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
        enabled: !0
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#3452e1'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [25, 100, 100, 100]
        },
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        marker: {
            show: !1
        }
    }
};
  //LiteCoin Chart
  var options3 = {
    series: [{
        name: 'LTC',
        data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14]
    }],
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
        enabled: !0
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#50a5f1'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [25, 100, 100, 100]
        },
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        marker: {
            show: !1
        }
    }
};

  const reports = [
    {
      title: "Bitcoin",
      icon: "mdi mdi-bitcoin",
      color: "warning",
      value: "$ 57,986.76",
      arrow: "mdi-arrow-up text-success",
      desc: "+ 0.0012 ( 0.2 % )",
      options: options1,
    },
    {
      title: "Ethereum",
      icon: "mdi mdi-ethereum",
      color: "primary",
      arrow: "mdi-arrow-down text-danger",
      value: "$ 2,077.53",
      desc: "- 4.102 ( 0.1 % )",
      options: options2,
    },
    {
      title: "litecoin",
      icon: "mdi mdi-litecoin",
      color: "info",
      arrow: "mdi-arrow-up text-success",
      value: "$ 225.01",
      desc: "+ 1.792 ( 0.1 % )",
      options: options3,
    },
  ];
</script>

{#each reports as report}
  <Col sm="4">
    <Card>
      <CardBody>
        <p class="text-muted mb-4">
          <i
            class={report.icon +
              " h2 text-" +
              report.color +
              " align-middle mb-0 me-3"}
          />{" "}
          {report.title}{" "}
        </p>

        <Row>
          <Col xs="6">
            <div>
              <h5>{report.value}</h5>
              <p class="text-muted text-truncate mb-0">
                {report.desc}{" "}
                <i class={"ms-1 mdi " + report.arrow} />
              </p>
            </div>
          </Col>
          <Col xs="6">
            <div>
              <div class="apex-charts">
                <div use:chart={report.options} />
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
{/each}