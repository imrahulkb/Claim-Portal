<script>
  import { Col, Card, CardBody } from "sveltestrap";
</script>

<Col md="4">
  <Card class="mt-4 maintenance-box">
    <CardBody>
      <slot />
    </CardBody>
  </Card>
</Col>
