<script>
  import { Row, Col, Card, CardBody } from "sveltestrap";
  import { Link } from "svelte-routing";
  import { chart } from "svelte-apexcharts";

  const walletOptions = {
    series: [76, 67, 61],
    chart: {
      height: 302,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "35%",
          background: "transparent",
          image: undefined,
        },
        track: {
          show: !0,
          startAngle: undefined,
          endAngle: undefined,
          background: "#f2f2f2",
          strokeWidth: "97%",
          opacity: 1,
          margin: 12,
          dropShadow: {
            enabled: !1,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        dataLabels: {
          name: {
            show: !0,
            fontSize: "16px",
            fontWeight: 600,
            offsetY: -10,
          },
          value: {
            show: !0,
            fontSize: "14px",
            offsetY: 4,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: !0,
            label: "Total",
            color: "#373d3f",
            fontSize: "16px",
            fontFamily: undefined,
            fontWeight: 600,
            formatter: function (w) {
              return (
                w.globals.seriesTotals.reduce(function (a, b) {
                  return a + b;
                }, 0) + "%"
              );
            },
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    colors: ["#3452e1", "#f1b44c", "#50a5f1"],
    labels: ["Ethereum", "Bitcoin", "Litecoin"],
    legend: {
      show: !1,
    },
  };
</script>

<Col xl="8">
  <Card>
    <CardBody>
      <div class="float-end">
        <select class="form-select form-select-sm ms-2">
          <option value="1" defaultValue> March </option>
          <option value="2">February</option>
          <option value="3">January</option>
          <option value="4">December</option>
        </select>
      </div>
      <h4 class="card-title mb-3">Wallet Balance</h4>

      <Row>
        <Col lg="4">
          <div class="mt-4">
            <p>Available Balance</p>
            <h4>$ 6134.39</h4>

            <p class="text-muted mb-4">
              {" "}
              + 0.0012.23 ( 0.2 % ){" "}
              <i class="mdi mdi-arrow-up ms-1 text-success" />
            </p>

            <Row>
              <Col xs="6">
                <div>
                  <p class="mb-2">Income</p>
                  <h5>$ 2632.46</h5>
                </div>
              </Col>
              <Col xs="6">
                <div>
                  <p class="mb-2">Expense</p>
                  <h5>$ 924.38</h5>
                </div>
              </Col>
            </Row>

            <div class="mt-4">
              <Link to="#" class="btn btn-primary btn-sm">
                View more <i class="mdi mdi-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </Col>

        <Col lg="4" sm="6">
          <div>
            <div id="wallet-balance-chart" class="apex-charts">
              <div use:chart={walletOptions} />
            </div>
          </div>
        </Col>

        <Col lg="4" sm="6" class="align-self-center">
          <div>
            <p class="mb-2">
              <i
                class="mdi mdi-circle align-middle font-size-10 me-2 text-primary"
              />{" "}
              Ethereum
            </p>
            <h5>
              4.5701 ETH ={" "}
              <span class="text-muted font-size-14">$ 1123.64</span>
            </h5>
          </div>

          <div class="mt-4 pt-2">
            <p class="mb-2">
              <i
                class="mdi mdi-circle align-middle font-size-10 me-2 text-warning"
              />{" "}
              Bitcoin
            </p>
            <h5>
              0.4412 BTC ={" "}
              <span class="text-muted font-size-14">$ 4025.32</span>
            </h5>
          </div>

          <div class="mt-4 pt-2">
            <p class="mb-2">
              <i
                class="mdi mdi-circle align-middle font-size-10 me-2 text-info"
              />{" "}
              Litecoin
            </p>
            <h5>
              35.3811 LTC ={" "}
              <span class="text-muted font-size-14">$ 2263.09</span>
            </h5>
          </div>
        </Col>
      </Row>
    </CardBody>
  </Card>
</Col>