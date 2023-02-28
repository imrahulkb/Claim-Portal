<script>
  import { Col, Container, Row } from "sveltestrap";
  import Breadcrumb from "../../../common/Breadcrumb.svelte";

  import ProjectDetail from "./projectDetail.svelte";
  import TeamMembers from "./teamMembers.svelte";
  import OverviewChart from "./overviewChart.svelte";
  import data from "../../../common/data/projects";
  import AttachedFiles from "./attachedFiles.svelte";
  import Comments from "./comments.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Projects" breadcrumbItem="Project Overview" />
    <Row>
      <Col lg="8">
        <ProjectDetail project={data.projects[0]} />
      </Col>

      <Col lg="4">
        <TeamMembers team={data.projects[0].team} />
      </Col>
    </Row>

    <Row>
      <Col lg="4">
        <OverviewChart />
      </Col>

      <Col lg="4">
        <AttachedFiles files={data.projects[0].files} />
      </Col>

      <Col lg="4">
        <Comments comments={data.projects[0].comments} />
      </Col>
    </Row>
  </Container>
</div>