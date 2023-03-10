<script>
  import {
    Container,
    Row,
    Col,
  } from "sveltestrap";
 
  import ClaimsTable from "./ClaimsTable.svelte";
  
</script>

<div class="page-content">
  
  <Container fluid>
    <Row>
      <Col lg="12">
        <ClaimsTable />
      </Col>
    </Row>
  </Container>

</div>

