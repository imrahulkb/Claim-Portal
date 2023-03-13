<script>
import { Container, Row } from "sveltestrap";
import Breadcrumb from "../../../common/Breadcrumb.svelte";
import BlogList from "./BlogList.svelte";
import RightBar from "./RightBar.svelte";
</script>
<div class="page-content">
    <Container fluid>
      <Breadcrumb title="Blog" breadcrumbItem="Blog List" />
      <Row>
        <BlogList />
        <RightBar />
      </Row>
    </Container>
  </div>