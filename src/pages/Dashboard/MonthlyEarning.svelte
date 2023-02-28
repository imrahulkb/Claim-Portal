<script>
  import { Row, Col, Card, CardBody, CardTitle } from "sveltestrap";

  import { Link } from "svelte-routing";

  import ApexRadial from "./ApexRadial.svelte";
</script>

<Card>
  <CardBody>
    <CardTitle class="mb-4 h4">Monthly Earning</CardTitle>
    <Row>
      <Col sm="6">
        <p class="text-muted">This month</p>
        <h3>$34,252</h3>
        <p class="text-muted">
          <span class="text-success me-2">
            {" "}
            12% <i class="mdi mdi-arrow-up" />{" "}
          </span>{" "}
          From previous period
        </p>
        <div class="mt-4">
          <Link to="" class="btn btn-primary btn-sm">
            View More <i class="mdi mdi-arrow-right ms-1" />
          </Link>
        </div>
      </Col>
      <Col sm="6">
        <div class="mt-4 mt-sm-0">
          <ApexRadial />
        </div>
      </Col>
    </Row>
    <p class="text-muted mb-0">
      We craft digital, graphic and dimensional thinking.
    </p>
  </CardBody>
</Card>