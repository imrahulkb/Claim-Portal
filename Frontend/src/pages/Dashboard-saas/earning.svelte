<script>
  import { Row, Col, Card, CardBody,Label } from "sveltestrap";
  import { chart } from "svelte-apexcharts";
  import { Link } from 'svelte-routing';

  const options = {
    series: [
      {
        name: "series1",
        data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
      },
    ],
    chart: {
      height: 320,
      type: "line",
      toolbar: !1,
      dropShadow: {
        enabled: !0,
        color: "#000",
        top: 18,
        left: 7,
        blur: 8,
        opacity: 0.2,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    colors: ["#556ee6"],

    stroke: {
      curve: "smooth",
      width: 3,
    },
  };
  
</script>

<Col xl="8">
  <Card>
    <CardBody>
      <div class="clearfix">
        <div class="float-end">
          <div class="input-group input-group-sm">
            <select
              value="jan"
              class="form-select form-select-sm">
              <option value="jan">Jan</option>
              <option value="dec">Dec</option>
              <option value="nov">Nov</option>
              <option value="oct">Oct</option>
            </select>
            <Label class="input-group-text">Month</Label>
          </div>
        </div>
        <h4 class="card-title mb-4">Earning</h4>
      </div>

      <Row>
        <Col lg="4">
          <div class="text-muted">
            <div class="mb-4">
              <p>This month</p>
              <h4>$2453.35</h4>
              <div>
                <span class="badge badge-soft-success font-size-12 me-1">
                  {" "}
                  + 0.2%{" "}
                </span>{" "}
                From previous period
              </div>
            </div>

            <div>
              <Link
                to="#"
                class="btn btn-primary btn-sm"
              >
                View Details{" "}
                <i class="mdi mdi-chevron-right ms-1"></i>
              </Link>
            </div>

            <div class="mt-4">
              <p class="mb-2">Last month</p>
              <h5>$2281.04</h5>
            </div>
          </div>
        </Col>

        <Col lg="8">
          <div id="line-chart" class="apex-charts" dir="ltr" use:chart={options}>
          </div>
        </Col>
      </Row>
    </CardBody>
  </Card>
</Col>