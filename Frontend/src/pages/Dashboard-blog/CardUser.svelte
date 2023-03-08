<script>
  import { chart } from "svelte-apexcharts";
  import { Card, CardBody, Col, Row } from "sveltestrap";

  const options = {
    series: [
      {
        name: "Current",
        data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
      },
      {
        name: "Previous",
        data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: !1,
      },
    },
    colors: ["#556ee6", "#f1b44c"],
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    markers: {
      size: 3,
      strokeWidth: 3,

      hover: {
        size: 4,
        sizeOffset: 2,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };
</script>

<Col xl={8}>
  <Row>
    <Col lg={4}>
      <Card class="mini-stats-wid">
        <CardBody>
          <div class="d-flex flex-wrap">
            <div class="me-3">
              <p class="text-muted mb-2">Total Post</p>
              <h5 class="mb-0">120</h5>
            </div>

            <div class="avatar-sm ms-auto">
              <div
                class="avatar-title bg-light rounded-circle text-primary font-size-20"
              >
                <i class="bx bxs-book-bookmark" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>

    <Col lg={4}>
      <Card class="blog-stats-wid">
        <CardBody>
          <div class="d-flex flex-wrap">
            <div class="me-3">
              <p class="text-muted mb-2">Pages</p>
              <h5 class="mb-0">86</h5>
            </div>

            <div class="avatar-sm ms-auto">
              <div
                class="avatar-title bg-light rounded-circle text-primary font-size-20"
              >
                <i class="bx bxs-note" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
    <Col lg={4}>
      <Card class="blog-stats-wid">
        <CardBody>
          <div class="d-flex flex-wrap">
            <div class="me-3">
              <p class="text-muted mb-2">Comments</p>
              <h5 class="mb-0">4,235</h5>
            </div>

            <div class="avatar-sm ms-auto">
              <div
                class="avatar-title bg-light rounded-circle text-primary font-size-20"
              >
                <i class="bx bxs-message-square-dots" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>

  <Card>
    <CardBody>
      <div class="d-flex flex-wrap">
        <h5 class="card-title me-2">Visitors</h5>
        <div class="ms-auto">
          <div class="toolbar d-flex flex-wrap gap-2 text-end">
            <button type="button" class="btn btn-light btn-sm">
              ALL
            </button>{" "}
            <button type="button" class="btn btn-light btn-sm">
              1M
            </button>{" "}
            <button type="button" class="btn btn-light btn-sm">
              6M
            </button>{" "}
            <button type="button" class="btn btn-light btn-sm active">
              1Y
            </button>
          </div>
        </div>
      </div>

      <Row class="text-center">
        <Col lg={4}>
          <div class="mt-4">
            <p class="text-muted mb-1">Today</p>
            <h5>1024</h5>
          </div>
        </Col>

        <Col lg={4}>
          <div class="mt-4">
            <p class="text-muted mb-1">This Month</p>
            <h5>
              12356{" "}
              <span class="text-success font-size-13">
                0.2 % <i class="mdi mdi-arrow-up ms-1" />
              </span>
            </h5>
          </div>
        </Col>

        <Col lg={4}>
          <div class="mt-4">
            <p class="text-muted mb-1">This Year</p>
            <h5>
              102354{" "}
              <span class="text-success font-size-13">
                0.1 % <i class="mdi mdi-arrow-up ms-1" />
              </span>
            </h5>
          </div>
        </Col>
      </Row>

      <hr class="mb-4" />
        <div use:chart={options} class="apex-charts" id="area-chart" dir="ltr"/>
    </CardBody>
  </Card>
</Col>