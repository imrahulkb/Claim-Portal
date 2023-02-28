<script>
  import { Link } from "svelte-routing";
  import { Col, Container, Row } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  import CardInvoice from "./card-invoice.svelte";
  import data from "../../common/data/invoices.ts";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Invoices" breadcrumbItem="Invoice List" />

    <Row>
      {#each data.invoiceList as invoice}
        <CardInvoice data={invoice} />
      {/each}
    </Row>
    <Row>
      <Col xs="12">
        <div class="text-center my-3">
          <Link to="#" class="text-success">
            <i class="bx bx-loader bx-spin font-size-18 align-middle me-2" />
            Load more
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
</div>