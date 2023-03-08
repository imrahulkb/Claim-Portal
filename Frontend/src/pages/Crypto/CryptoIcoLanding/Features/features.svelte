<script>
  import { Container, Row, Col } from "sveltestrap";
  //Import Components
  import FeatureBox from "./feature-box.svelte";

  const features1 = [
    { id: 1, desc: "Donec pede justo vel aliquet" },
    { id: 2, desc: "Aenean et nisl sagittis" },
  ];
  
  const features2 = [
    { id: 1, desc: "Donec pede justo vel aliquet" },
    { id: 2, desc: "Aenean et nisl sagittis" },
  ];

</script>

<section class="section" id="features">
  <Container>
    <Row>
      <Col lg="12">
        <div class="text-center mb-5">
          <div class="small-title">Features</div>
          <h4>Key features of the product</h4>
        </div>
      </Col>
    </Row>

    <Row class="align-items-center pt-4">
      <Col md="6" sm="8">
        <div>
          <img
            src="/assets/images/crypto/features-img/img-1.png"
            alt=""
            class="img-fluid mx-auto d-block"
          />
        </div>
      </Col>
      <Col md="5" class="ms-auto">
        <FeatureBox
          num="01"
          title="Lending"
          features={features1}
          desc="If several languages coalesce, the grammar of the resulting language is more simple and regular than of the individual will be more simple and regular than the existing."
        />
      </Col>
    </Row>

    <Row class="align-items-center mt-5 pt-md-5">
      <Col md="5">
        <FeatureBox
          num="02"
          title="Wallet"
          features={features2}
          desc="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend."
        />
      </Col>
      <Col md="6" sm="8" class="ms-md-auto">
        <div class="mt-4 me-md-0">
          <img
            src="/assets/images/crypto/features-img/img-2.png"
            alt=""
            class="img-fluid mx-auto d-block"
          />
        </div>
      </Col>
    </Row>
  </Container>
</section>