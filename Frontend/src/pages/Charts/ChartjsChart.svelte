<script>
  import { Container, Row, Col, Card, CardBody, CardTitle } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";

  // import chartJs
  import LineChart from "../AllCharts/chartjs/linechart.svelte";
  import DountChart from "../AllCharts/chartjs/dountchart.svelte";
  import PieChart from "../AllCharts/chartjs/piechart.svelte";
  import BarChart from "../AllCharts/chartjs/barchart.svelte";
  import RadarChart from "../AllCharts/chartjs/radarchart.svelte";
  import PolarChart from "../AllCharts/chartjs/polarchart.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Charts" breadcrumbItem="Apex Charts" />

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Line Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">86541</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">2541</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">102030</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div style="min-height: 300px; min-width:260px">
              <LineChart dataColors={["--bs-primary-rgb, 0.2", "--bs-primary", "--bs-light-rgb, 0.2", "--bs-light"]} />
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Bar Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">2541</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">84845</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">12001</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div style="min-height: 300px; min-width:260px">
              <BarChart dataColors={["--bs-success-rgb, 0.8", "--bs-success"]} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Pie Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">2536</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">69421</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">89854</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div>
              <PieChart dataColors={["--bs-success", "#ebeff2"]} />
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Donut Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">9595</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">36524</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">62541</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div>
              <DountChart dataColors={["--bs-primary", "#ebeff2"]} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Polar Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">4852</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">3652</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">85412</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div>
              <PolarChart dataColors={["--bs-danger", "--bs-success", "--bs-warning", "--bs-primary"]} />
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Radar Chart</CardTitle>
            <Row class="justify-content-center">
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">694</h5>
                  <p class="text-muted">Activated</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">55210</h5>
                  <p class="text-muted">Pending</p>
                </div>
              </Col>
              <Col sm={4}>
                <div class="text-center">
                  <h5 class="mb-0">489498</h5>
                  <p class="text-muted">Deactivated</p>
                </div>
              </Col>
            </Row>
            <div>
              <RadarChart dataColors={["--bs-success-rgb, 0.2", "--bs-success", "--bs-primary-rgb, 0.2", "--bs-primary"]} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>