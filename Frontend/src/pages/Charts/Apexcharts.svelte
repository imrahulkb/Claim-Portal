<script>
  import Breadcrumb from "../../common/Breadcrumb.svelte";

  import LineApexChart from "../AllCharts/apex/chartapex.svelte";
  import DashedLine from "../AllCharts/apex/dashedLine.svelte";
  import SplineArea from "../AllCharts/apex/SplineArea.svelte";
  import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn.svelte";
  import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels.svelte";
  import BarChart from "../AllCharts/apex/barchart.svelte";
  import LineColumnArea from "../AllCharts/apex/LineColumnArea.svelte";
  import RadialChart from "../AllCharts/apex/RadialChart.svelte";
  import PieChart from "../AllCharts/apex/PieChart.svelte";
  import DonutChart from "../AllCharts/apex/dountchart.svelte";

  import { Container, Row, Col, Card, CardBody, CardTitle } from "sveltestrap";

</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Charts" breadcrumbItem="Apex Charts" />
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Line with Data Labels</CardTitle>
            <LineApexChart />
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Dashed Line</CardTitle>
            <DashedLine />
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Spline Area</CardTitle>
            <SplineArea />
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Column Chart</CardTitle>
            <Apaexlinecolumn />
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">
              Column with Data Labels{" "}
            </CardTitle>
            <ColumnWithDataLabels />
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Bar Chart</CardTitle>
            <BarChart />
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">
              Line, Column & Area Chart{" "}
            </CardTitle>
            <LineColumnArea />
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Radial Chart</CardTitle>
            <RadialChart />
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Pie Chart</CardTitle>
            <PieChart />
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Donut Chart</CardTitle>
            <DonutChart />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>