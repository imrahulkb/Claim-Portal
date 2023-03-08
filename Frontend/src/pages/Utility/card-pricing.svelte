<script>
  import { Col, Card, CardBody, Button } from "sveltestrap";
  export let pricing;
</script>

<Col xl="3" md="6">
  <Card class="plan-box">
    <CardBody class="p-4">
      <div class="d-flex">
        <div class="flex-grow-1">
          <h5>{pricing.title}</h5>
          <p class="text-muted">{pricing.description}</p>
        </div>
        <div class="ms-3">
          <i class={"bx " + pricing.icon + " h1 text-primary"} />
        </div>
      </div>
      <div class="py-4">
        <h2>
          <sup>
            <small>$</small>
          </sup>{" "}
          {pricing.price}/{" "}
          <span class="font-size-13">
            {pricing.duration}
          </span>
        </h2>
      </div>
      <div class="text-center">
        <Button
          to={pricing.link}
          color="primary"
          class="btn btn-primary btn-sm"
        >
          Sign up Now
        </Button>
      </div>

      <div class="plan-features mt-5">
        {#each pricing.features as feature}
          <p>
            <i class="bx bx-checkbox-square text-primary me-2" />{" "}
            {feature.title}
          </p>
        {/each}
      </div>
    </CardBody>
  </Card>
</Col>
