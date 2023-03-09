<script>
  import {
    Card,
    CardBody,
    CardImg,
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
    <Breadcrumb title="UI Elements" breadcrumbItem="Images" />

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Image Rounded & Circle</CardTitle>
            <p class="card-title-desc">
              Use class <code>.rounded</code> and{" "}
              <code>.rounded-circle</code>.
            </p>
            <Row>
              <Col md={6}>
                <img
                  class="rounded me-2"
                  alt="Skote"
                  width="200"
                  src="assets/images/small/img-4.jpg"
                />
              </Col>
              <Col md={6}>
                <div class="mt-4 mt-md-0">
                  <img
                    class="rounded-circle avatar-xl"
                    alt="Skote"
                    src="assets/images/users/avatar-4.jpg"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle class="h4">Image thumbnails</CardTitle>
            <p class="card-title-desc">
              In addition to our border-radius utilities, you can use{" "}
              <code class="highlighter-rouge">.img-thumbnail</code>{" "}
              to give an image a rounded 1px border appearance.
            </p>
            <Row>
              <Col md={6}>
                <img
                  class="img-thumbnail"
                  alt="Skote"
                  width="200"
                  src="assets/images/small/img-3.jpg"
                />
              </Col>
              <Col md={6}>
                <div class="mt-4 mt-md-0">
                  <img
                    class="img-thumbnail rounded-circle avatar-xl"
                    alt="Skote"
                    src="assets/images/users/avatar-3.jpg"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Responsive images</CardTitle>
            <p class="card-title-desc">
              Images in Bootstrap are made responsive with{" "}
              <code class="highlighter-rouge">.img-fluid</code>.{" "}
              <code class="highlighter-rouge"> max-width: 100%; </code>{" "}
              and{" "}
              <code class="highlighter-rouge">height: auto;</code>{" "}
              are applied to the image so that it scales with the parent element.
            </p>
            <div class="">
              <CardImg
                class="img-fluid"
                src="assets/images/small/img-2.jpg"
                alt="Responsive image"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4 mb-4">Image Sizes</CardTitle>
            <Row>
              <Col md={6}>
                <Row>
                  <Col lg={4}>
                    <CardImg
                      src="assets/images/users/avatar-3.jpg"
                      alt="SkoteSkote"
                      class="rounded avatar-sm"
                    />
                    <CardText class="mt-2 mb-lg-0">
                      <code>.avatar-sm</code>
                    </CardText>
                  </Col>
                  <Col lg={4}>
                    <CardImg
                      src="assets/images/users/avatar-4.jpg"
                      alt="Skote"
                      class="rounded avatar-md"
                    />
                    <CardText class="mt-2  mb-lg-0">
                      <code>.avatar-md</code>
                    </CardText>
                  </Col>
                  <Col lg={4}>
                    <CardImg
                      src="assets/images/users/avatar-5.jpg"
                      alt="Skote"
                      class="rounded avatar-lg"
                    />
                    <CardText class="mt-2 mb-lg-0">
                      <code>.avatar-lg</code>
                    </CardText>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col lg={4}>
                    <CardImg
                      src="assets/images/users/avatar-3.jpg"
                      alt="Skote"
                      class="rounded-circle avatar-sm"
                    />
                    <CardText class="mt-2 mb-lg-0">
                      <code>.avatar-sm</code>
                    </CardText>
                  </Col>
                  <Col lg={4}>
                    <CardImg
                      src="assets/images/users/avatar-4.jpg"
                      alt=""
                      class="rounded-circle avatar-md"
                    />
                    <CardText class="mt-2  mb-lg-0">
                      <code>.avatar-md</code>
                    </CardText>
                  </Col>
                  <Col lg={4}>
                    <CardImg
                      src="assets/images/users/avatar-5.jpg"
                      alt="Skote"
                      class="rounded-circle avatar-lg"
                    />
                    <CardText class="mt-2 mb-lg-0">
                      <code>.avatar-lg</code>
                    </CardText>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Card>
          <CardBody>
            <h4 class="card-title">Media Object</h4>
            <p class="card-title-desc">The images or other media can be
              aligned top, middle, or bottom. The default is top aligned.
            </p>


            <div class="d-flex">
              <div class="flex-shrink-0 me-3">
                <img class="rounded avatar-sm" src="/assets/images/users/avatar-3.jpg" alt="demo2" />
              </div>
              <div class="flex-grow-1">
                <h5>Top-aligned media</h5>
                <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </div>
            </div>
            <hr />
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <img class="rounded avatar-sm" src="/assets/images/users/avatar-5.jpg" alt="Generic placeholder image1" />
              </div>
              <div class="flex-grow-1">
                <h5>Center-aligned media</h5>
                <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </div>
            </div>
            <hr />
            <div class="d-flex align-items-end">
              <div class="flex-shrink-0 me-3">
                <img class="rounded avatar-sm" src="/assets/images/users/avatar-1.jpg" alt="Generic placeholder image2" />
              </div>
              <div class="flex-grow-1">
                <h5>Bottom-aligned media</h5>
                <p class="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>