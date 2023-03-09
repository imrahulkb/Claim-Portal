<script>
  import { Link } from "svelte-routing";
  import {
    Card,
    CardBody,
    CardColumns,
    CardDeck,
    CardFooter,
    CardHeader,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Col,
    Container,
    Row,
  } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="Cards" />

    <Row>
      <Col md={6} xl={3}>
        <Card>
          <CardImg top class="img-fluid" src="assets/images/small/img-1.jpg" alt="Skote" />
          <CardBody>
            <CardTitle class="h4 mt-0">Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Link to="#" class="btn btn-primary">Button</Link>
          </CardBody>
        </Card>
      </Col>
      <Col md={6} xl={3}>
        <Card>
          <CardImg top class="img-fluid" src="assets/images/small/img-2.jpg" alt="Skote" />
          <CardBody>
            <CardTitle class="h4 mt-0">Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
          </ul>
          <CardBody>
            <Link to="#" class="card-link">Card link</Link>
            <Link to="#" class="card-link">Another link</Link>
          </CardBody>
        </Card>
      </Col>

      <Col md={6} xl={3}>
        <Card>
          <CardImg top class="img-fluid" src="assets/images/small/img-3.jpg" alt="Skote" />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col md={6} xl={3}>
        <Card>
          <CardBody>
            <CardTitle class="h4 mt-0">Card title</CardTitle>
            <h6 class="card-subtitle font-14 text-muted">Support card subtitle</h6>
          </CardBody>
          <CardImg class="img-fluid" src="assets/images/small/img-4.jpg" alt="Skote" />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Link to="#" class="card-link">Card link</Link>
            <Link to="#" class="card-link">Another link</Link>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <Card body>
          <CardTitle class="h3 mt-0">Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Link to="#" class="btn btn-primary">Go somewhere</Link>
        </Card>
      </Col>
      <Col md={6}>
        <Card body>
          <CardTitle class="h3 mt-0">Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Link to="#" class="btn btn-primary">Go somewhere</Link>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={4}>
        <Card body>
          <CardTitle class="h4 mt-0">Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Link to="#" class="btn btn-primary">Go somewhere</Link>
        </Card>
      </Col>

      <Col lg={4}>
        <Card body class="text-center">
          <CardTitle class="h4 mt-0">Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Link to="#" class="btn btn-primary">Go somewhere</Link>
        </Card>
      </Col>

      <Col lg={4}>
        <Card body class="text-end">
          <CardTitle class="h4 mt-0">Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Link to="#" class="btn btn-primary">Go somewhere</Link>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={4}>
        <Card>
          <div class="card-header h5 bg-transparent border-bottom text-uppercase">Featured</div>
          <CardBody>
            <CardTitle class="h4 mt-0">Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Link to="#" class="btn btn-primary">Go somewhere</Link>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card>
          <div class="card-header bg-transparent border-bottom">Quote</div>
          <CardBody>
            <blockquote class="card-blockquote mb-0">
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </CardText>
              <footer class="blockquote-footer font-size-12 mt-0">
                Someone famous in{" "}
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card>
          <div class="card-header bg-transparent border-bottom text-uppercase"
            >Featured</div>
          <CardBody>
            <CardTitle class="h4 mt-0">Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Link to="#" class="btn btn-primary">Go somewhere</Link>
          </CardBody>
          <CardFooter class="bg-transparent border-top text-muted"
            >2 days ago</CardFooter
          >
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={4}>
        <Card>
          <CardImg top class="img-fluid" src="assets/images/small/img-5.jpg" alt="Skote" />
          <CardBody>
            <CardTitle class="mt-0">Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <p class="card-text">
              <small class="text-muted"> Last updated 3 mins ago </small>
            </p>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card>
          <CardBody>
            <CardTitle class="h4 mt-0">Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small class="text-muted"> Last updated 3 mins ago </small>
            </CardText>
          </CardBody>
          <CardImg bottom class="img-fluid" src="assets/images/small/img-7.jpg" alt="Skote" />
        </Card>
      </Col>

      <Col lg={4}>
        <Card>
          <CardImg class="img-fluid" src="assets/images/small/img-6.jpg" alt="Skote" />
          <CardImgOverlay>
            <CardTitle class="text-white mt-0">Card title</CardTitle>
            <CardText class="text-light">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small class="text-white"> Last updated 3 mins ago </small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <Row class="no-gutters align-items-center">
            <Col md={4}>
              <CardImg class="img-fluid" src="assets/images/small/img-2.jpg" alt="Skote" />
            </Col>
            <Col md={8}>
              <CardBody>
                <CardTitle class="h5">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </CardText>
                <CardText>
                  <small class="text-muted"> Last updated 3 mins ago </small>
                </CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Row class="no-gutters align-items-center">
            <Col md={8}>
              <CardBody>
                <CardTitle class="h5">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </CardText>
                <CardText>
                  <small class="text-muted"> Last updated 3 mins ago </small>
                </CardText>
              </CardBody>
            </Col>
            <Col md={4}>
              <CardImg class="img-fluid" src="assets/images/small/img-3.jpg" alt="Skote" />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={4}>
        <Card color="primary" class="text-white-50">
          <CardBody>
            <h5 class="mb-4 text-white">
              <i class="mdi mdi-bullseye-arrow me-3" /> Primary Card
            </h5>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card color="success" class="text-white-50">
          <CardBody>
            <h5 class="mb-4 text-white">
              <i class="mdi mdi-check-all me-3" /> Success Card
            </h5>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card color="info" class="text-white-50">
          <CardBody>
            <h5 class="mb-4 text-white">
              <i class="mdi mdi-alert-circle-outline me-3" />Info Card
            </h5>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={4}>
        <Card color="warning" class="text-white-50">
          <CardBody>
            <h5 class="mb-4 text-white">
              <i class="mdi mdi-alert-outline me-3" />Warning Card
            </h5>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card color="danger" class="text-white-50">
          <CardBody>
            <h5 class="mb-4 text-white">
              <i class="mdi mdi-block-helper me-3" />Danger Card
            </h5>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card color="dark" class="text-light">
          <CardBody>
            <h5 class="mb-4 text-white">
              <i class="mdi mdi-alert-circle-outline me-3" />Dark Card
            </h5>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={4}>
        <Card outline color="primary" class="border border-primary">
          <div class="card-header bg-transparent border-primary">
            <h5 class="my-0 text-primary">
              <i class="mdi mdi-bullseye-arrow me-3" />Primary outline Card
            </h5>
          </div>
          <CardBody>
            <CardTitle class="h5 mt-0">card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card outline color="danger" class="border border-danger">
          <div class="card-header bg-transparent border-danger">
            <h5 class="my-0 text-danger">
              <i class="mdi mdi-block-helper me-3" />Danger outline Card
            </h5>
          </div>
          <CardBody>
            <CardTitle class="h5 mt-0">card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>

      <Col lg={4}>
        <Card outline color="success" class="border border-success">
          <div class="card-header bg-transparent border-success">
            <h5 class="my-0 text-success">
              <i class="mdi mdi-check-all me-3" />Success Card
            </h5>
          </div>
          <CardBody>
            <CardTitle class="h5 mt-0">card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col class="col-12 mb-4">
        <h4 class="my-3">Card groups</h4>
        <CardDeck class="card-deck-wrapper">
          <div class="card-group">
            <Card class="mb-4">
              <CardImg top class="img-fluid" src="assets/images/small/img-4.jpg" alt="Skote" />
              <CardBody>
                <CardTitle class="mt-0">Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small class="text-muted"> Last updated 3 mins ago </small>
                </CardText>
              </CardBody>
            </Card>
            <Card class="mb-4">
              <CardImg top class="img-fluid" src="assets/images/small/img-5.jpg" alt="Skote" />
              <CardBody>
                <CardTitle class="mt-0">Card title</CardTitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <CardText>
                  <small class="text-muted"> Last updated 3 mins ago </small>
                </CardText>
              </CardBody>
            </Card>
            <Card class="mb-4">
              <CardImg top class="img-fluid" src="assets/images/small/img-6.jpg" alt="Skote" />
              <CardBody>
                <CardTitle class="mt-0">Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <CardText>
                  <small class="text-muted"> Last updated 3 mins ago </small>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </CardDeck>
      </Col>
    </Row>

    <Row>
      <Col sm={12}>
        <h4 class="my-3">Cards Masonry</h4>
        <CardColumns>
          <Card>
            <CardImg top src="assets/images/small/img-3.jpg" alt="Skote" />
            <CardBody>
              <CardTitle class="h5"
                >Card title that wraps to a new line</CardTitle
              >
              <CardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <blockquote class="card-blockquote mb-0">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer class="blockquote-footer font-size-12">
                  Someone famous in <cite title="Source Title"
                    >Source Title</cite
                  >
                </footer>
              </blockquote>
            </CardBody>
          </Card>
          <Card>
            <CardImg top src="assets/images/small/img-5.jpg" alt="Skote" />
            <CardBody>
              <CardTitle class="h5">Card title</CardTitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <CardText>
                <small class="text-muted"> Last updated 3 mins ago </small>
              </CardText>
            </CardBody>
          </Card>
          <Card color="primary" class="text-white text-center p-3">
            <blockquote class="card-blockquote mb-0">
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
              </CardText>
              <footer class="blockquote-footer mt-0">
                <small class="text-white">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card class="text-center">
            <CardBody>
              <CardTitle class="h5">Card title</CardTitle>
              <CardText>
                This card has a regular title and short paragraphy of text below
                it.
              </CardText>
              <CardText>
                <small class="text-muted"> Last updated 3 mins ago </small>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top src="assets/images/small/img-7.jpg" alt="Skote" />
          </Card>
          <Card class="p-3 text-end">
            <blockquote class="blockquote mb-0">
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </CardText>
              <footer class="blockquote-footer">
                <small class="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card>
            <CardBody>
              <CardTitle class="h5">Card title</CardTitle>
              <CardText>
                This is another card with title and supporting text below. This
                card has some additional content to make it slightly taller
                overall.
              </CardText>
              <CardText>
                <small class="text-muted"> Last updated 3 mins ago </small>
              </CardText>
            </CardBody>
          </Card>
        </CardColumns>
      </Col>
    </Row>
  </Container>
</div>
