<script>
  import { Card, CardBody, CardTitle, Col, Container, Row } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";

  const items = [
    {
      src: "assets/images/small/img-1.jpg",
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: "assets/images/small/img-2.jpg",
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: "assets/images/small/img-3.jpg",
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];

  import Slide from "./CarouselTypes/slide.svelte";
  import Slidewithcontrol from "./CarouselTypes/slidewithcontrol.svelte";
  import Slidewithindicator from "./CarouselTypes/slidewithindicator.svelte";
  import Slidewithcaption from "./CarouselTypes/slidewithcaption.svelte";
  import Slidewithfade from "./CarouselTypes/slidewithfade.svelte";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="Carousel" />

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Slides Only</CardTitle>
            <p class="card-title-desc">
              Here’s a carousel with slides only. Note the presence of the <code
                >.d-block</code
              >
              and <code>.img-fluid</code> on carousel images to prevent browser default
              image alignment.
            </p>
            <div dir="ltr">
              <Slide />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">With controls</CardTitle>
            <p class="card-title-desc">
              Adding in the previous and next controls:
            </p>
            <div dir="ltr">
              <Slidewithcontrol />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">With indicators</CardTitle>
            <p class="card-title-desc">
              You can also add the indicators to the carousel, alongside the
              controls, too.
            </p>
            <div dir="ltr">
              <Slidewithindicator />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">With captions</CardTitle>
            <p class="card-title-desc">
              Add captions to your slides easily with the{" "}
              <code>.carousel-caption</code> element within any{" "}
              <code>item</code>.
            </p>
            <div dir="ltr">
              <Slidewithcaption />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg="6">
        <Card>
          <CardBody>
            <CardTitle class="h4">Autoplay with duration progress
            </CardTitle>
            <p class="card-title-desc">
              Add <code>autoplayProgressVisible</code> to your carousel to animate slides
              with a fade transition instead of a slide.
            </p>
            <div dir="ltr">
              <Slidewithfade />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>