<script>
  import { Container, Row, Col } from "sveltestrap";

  import CardUser from "./card-user.svelte";
  import CardWelcome from "./card-welcome.svelte";
  import MiniWidget from "./mini-widget.svelte";
  import WalletBalance from "./wallet-balance.svelte";
  import OverView from "./overview.svelte";
  import Transactions from "./transactions.svelte";
  import Notifications from "./notifications.svelte";
  import BuySell from "./buy-sell.svelte";

  //Import Breadcrumb
  import Breadcrumbs from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumbs title="Dashboards" breadcrumbItem="Crypto" />
    <Row>
      <CardUser />

      <Col xl="8">
        <CardWelcome />

        <Row>
          <MiniWidget />
        </Row>
      </Col>
    </Row>

    <Row>
      <WalletBalance />

      <OverView />
    </Row>

    <Row>
      <Transactions />

      <Notifications />

      <BuySell />
    </Row>
  </Container>
</div>