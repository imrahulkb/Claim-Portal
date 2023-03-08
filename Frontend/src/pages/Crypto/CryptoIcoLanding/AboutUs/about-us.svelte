<script>
  import Carousel from "svelte-carousel";
  import { Container, Row, Col, Card, CardBody } from "sveltestrap";
  import { Link } from "svelte-routing";
  const clients = [
    { imgUrl: "assets/images/clients/1.png" },
    { imgUrl: "assets/images/clients/2.png" },
    { imgUrl: "assets/images/clients/3.png" },
    { imgUrl: "assets/images/clients/4.png" },
    { imgUrl: "assets/images/clients/5.png" },
    { imgUrl: "assets/images/clients/6.png" },
  ];
</script>

<section class="section pt-4 bg-white" id="about">
  <Container>
    <Row>
      <Col lg="12">
        <div class="text-center mb-5">
          <div class="small-title">About us</div>
          <h4>What is ICO Token?</h4>
        </div>
      </Col>
    </Row>
    <Row class="align-items-center">
      <Col lg="5">
        <div class="text-muted">
          <h4>Best ICO for your cryptocurrency business</h4>
          <p>
            If several languages coalesce, the grammar of the resulting that of
            the individual new common language will be more simple and regular
            than the existing.
          </p>
          <p class="mb-4">
            It would be necessary to have uniform pronunciation.
          </p>

          <div class="button-items">
            <Link to="#" class="btn btn-success me-1">Read More</Link>
            <Link to="#" class="btn btn-outline-primary">How It work</Link>
          </div>

          <Row class="mt-4">
            <Col lg="4" xs="6">
              <div class="mt-4">
                <h4>$ 6.2 M</h4>
                <p>Invest amount</p>
              </div>
            </Col>
            <Col lg="4" xs="6">
              <div class="mt-4">
                <h4>16245</h4>
                <p>Users</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>

      <Col lg="6" class="ms-auto">
        <div class="mt-4 mt-lg-0">
          <Row>
            <Col sm="6">
              <Card class="border">
                <CardBody>
                  <div class="mb-3">
                    <i class="mdi mdi-bitcoin h2 text-success" />
                  </div>
                  <h5>Lending</h5>
                  <p class="text-muted mb-0">
                    At vero eos et accusamus et iusto blanditiis
                  </p>
                </CardBody>
                <div class="card-footer bg-transparent border-top text-center">
                  <Link to="#" class="text-primary">Learn more</Link>
                </div>
              </Card>
            </Col>
            <Col sm="6">
              <Card class="border mt-lg-5">
                <CardBody>
                  <div class="mb-3">
                    <i class="mdi mdi-wallet-outline h2 text-success" />
                  </div>
                  <h5>Wallet</h5>
                  <p class="text-muted mb-0">
                    Quis autem vel eum iure reprehenderit
                  </p>
                </CardBody>
                <div class="card-footer bg-transparent border-top text-center">
                  <Link to="#" class="text-primary">Learn more</Link>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>

    <hr class="my-5" />

    <Row>
      <Col lg="12">
        <div class="hori-timeline" dir="ltr">
          <Carousel
            particlesToShow={4}
            dots={false}
            autoplay={false}
            arrows={false}
          >
            {#each clients as client}
              <div class="item">
                <div class="client-images">
                  <img
                    src={client.imgUrl}
                    alt="client-img"
                    class="mx-auto img-fluid d-block"
                  />
                </div>
              </div>
            {/each}
          </Carousel>
        </div>
      </Col>
    </Row>
  </Container>
</section>
