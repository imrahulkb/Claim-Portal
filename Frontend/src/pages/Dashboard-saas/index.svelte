<script>
  import { Container, Row, Col } from "sveltestrap";
  //Import Breadcrumb
  import Breadcrumbs from "../../common/Breadcrumb.svelte";

  import CardUser from "./card-user.svelte";
  import CardWelcome from "./card-welcome.svelte";
  import MiniWidget from "./mini-widget.svelte";
  import Earning from "./earning.svelte";
  import SalesAnalytics from "./sales-analytics.svelte";
  import TotalSellingProduct from "./total-selling-product.svelte";
  import Tasks from "./tasks.svelte";
  import ChatBox from "./chat-box.svelte";

</script>

<div class="page-content">
  <Container fluid>
    <!-- Render Breadcrumb -->
    <Breadcrumbs title="Dashboards" breadcrumbItem="Saas" />

    <!-- Card User -->
    <CardUser />

    <Row>
      <!-- welcome card -->
      <CardWelcome />

      <Col xl="8">
        <Row>
          <!--mimi widgets -->
          <MiniWidget />
        </Row>
      </Col>
    </Row>

    <Row>
      <!-- earning -->
      <Earning />

      <!-- sales anytics -->
      <SalesAnalytics />
    </Row>

    <Row>
      <!-- total selling product -->
      <TotalSellingProduct />

      <!-- tasks -->
      <Tasks />

      <!-- chat box -->
      <ChatBox />
    </Row>
  </Container>
</div>