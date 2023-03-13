<script>
  import { Container, Row } from "sveltestrap";
  import BlogGrid from "./BlogGrid.svelte";
  import RightBar from "../BlogList/RightBar.svelte";
  import Breadcrumb from "../../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Blog" breadcrumbItem="Blog Grid" />
    <Row>
      <BlogGrid />
      <RightBar />
    </Row>
  </Container>
</div>