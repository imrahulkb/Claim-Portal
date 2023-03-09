<script>
  import { Row, Col, Card, CardBody } from "sveltestrap";
  import { chart } from "svelte-apexcharts";

  const options = {
    series: [56, 38, 26],
    chart: {
      type: "donut",
      height: 262,
    },
    labels: ["Series A", "Series B", "Series C"],
    colors: ["#556ee6", "#34c38f", "#f46a6a"],
    legend: {
      show: !1,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  };

</script>

<Col xl="4">
  <Card>
    <CardBody>
      <h4 class="card-title mb-4">Sales Analytics</h4>

      <div>
        <div id="donut-chart" class="apex-charts">
          <div use:chart={options} />
        </div>
      </div>

      <div class="text-center text-muted">
        <Row>
          <Col xs="4">
            <div class="mt-4">
              <p class="mb-2 text-truncate">
                <i class="mdi mdi-circle text-primary me-1" />{" "}
                Product A
              </p>
              <h5>$ 2,132</h5>
            </div>
          </Col>
          <Col xs="4">
            <div class="mt-4">
              <p class="mb-2 text-truncate">
                <i class="mdi mdi-circle text-success me-1" />{" "}
                Product B
              </p>
              <h5>$ 1,763</h5>
            </div>
          </Col>
          <Col xs="4">
            <div class="mt-4">
              <p class="mb-2 text-truncate">
                <i class="mdi mdi-circle text-danger me-1" />{" "}
                Product C
              </p>
              <h5>$ 973</h5>
            </div>
          </Col>
        </Row>
      </div>
    </CardBody>
  </Card>
</Col>