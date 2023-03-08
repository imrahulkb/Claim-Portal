<script>
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  import { Container, Row, Col } from "sveltestrap";
  //Import Pricing Cards
  import CardPricing from "./card-pricing.svelte";

  const pricings = [
    {
      id: 1,
      title: "Starter",
      description: "Neque quis est",
      icon: "bx-walk",
      price: "19",
      duration: "Per month",
      link: "",
      features: [
        { title: "Free Live Support" },
        { title: "Unlimited User" },
        { title: "No Time Tracking" },
        { title: "Free Setup" },
      ],
    },
    {
      id: 2,
      title: "Professional",
      description: "Quis autem iure",
      icon: "bx-run",
      price: "29",
      duration: "Per month",
      link: "",
      features: [
        { title: "Free Live Support" },
        { title: "Unlimited User" },
        { title: "No Time Tracking" },
        { title: "Free Setup" },
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      description: "Sed ut neque unde",
      icon: "bx-cycling",
      price: "39",
      duration: "Per month",
      link: "",
      features: [
        { title: "Free Live Support" },
        { title: "Unlimited User" },
        { title: "No Time Tracking" },
        { title: "Free Setup" },
      ],
    },
    {
      id: 4,
      title: "Unlimited",
      description: "Itaque earum hic",
      icon: "bx-car",
      price: "49",
      duration: "Per month",
      link: "",
      features: [
        { title: "Free Live Support" },
        { title: "Unlimited User" },
        { title: "No Time Tracking" },
        { title: "Free Setup" },
      ],
    },
  ];
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Utility" breadcrumbItem="Pricing" />

    <Row class="justify-content-center">
      <Col lg={6}>
        <div class="text-center mb-5">
          <h4>Choose your Pricing plan</h4>
          <p class="text-muted">
            To achieve this, it would be necessary to have uniform grammar,
            pronunciation and more common words If several languages coalesce
          </p>
        </div>
      </Col>
    </Row>

    <Row>
      {#each pricings as pricing}
        <CardPricing {pricing} />
      {/each}
    </Row>
  </Container>
</div>
