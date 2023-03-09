<script>
  import { Container, Row, Col } from "sveltestrap";

  import CardUser from "./CardUser.svelte";
  import Posts from "./Posts.svelte";
  import Settings from "./Settings.svelte";
  import Comments from "./Comments.svelte";
  import TapVisitors from "./TopVisitors.svelte";
  import Activity from "./Activity.svelte";
  import PopularPost from "./PopularPost.svelte";

  //Import Breadcrumb
  import Breadcrumbs from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumbs title="Dashboards" breadcrumbItem="Blog" />
    <Row>
      <CardUser />
      <Settings />
    </Row>
    <Row>
      <Posts />
      <Comments />
      <TapVisitors />
    </Row>
    <Row>
      <Activity />
      <PopularPost />
    </Row>
  </Container>
</div>