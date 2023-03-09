<script>
  import { Link } from "svelte-routing";
  import Breadcrumb from "../../../common/Breadcrumb.svelte";
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Nav,
    NavLink,
    TabContent,
    TabPane,
  } from "sveltestrap";

  let activeTab = 1;
  
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Ecommerce" breadcrumbItem="Product Detail" />
    <Row>
      <Col lg={12}>
        <Card>
          <CardBody>
            <Row>
              <Col xl={6}>
                <div class="product-detai-imgs">
                  <Row>
                    <Col md={2} sm={3} class="col-4">
                      <Nav
                        class="flex-column"
                        pills
                      >
                        <NavLink on:click={() => (activeTab = 1)}
                            active={activeTab == 1}>
                          <img
                            src="/assets/images/product/img-7.png"
                            alt=""
                            class="img-fluid mx-auto d-block rounded"
                          />
                        </NavLink>
                        <NavLink on:click={() => (activeTab = 2)}
                            active={activeTab == 2}>
                          <img
                            src="/assets/images/product/img-8.png"
                            alt=""
                            class="img-fluid mx-auto d-block rounded"
                          />
                        </NavLink>
                        <NavLink on:click={() => (activeTab = 3)}
                            active={activeTab == 3}>
                          <img
                            src="/assets/images/product/img-7.png"
                            alt=""
                            class="img-fluid mx-auto d-block rounded"
                          />
                        </NavLink>
                        <NavLink on:click={() => (activeTab = "4")}
                            active={activeTab == "4"}>
                          <img
                            src="/assets/images/product/img-8.png"
                            alt=""
                            class="img-fluid mx-auto d-block rounded"
                          />
                        </NavLink>
                      </Nav>
                    </Col>
                    <Col md={7} sm={9} class="offset-md-1 col-8">
                      <TabContent>
                        <TabPane tabId="1" class={activeTab == "1" ? "active" : ""}>
                          <div>
                            <img
                              src="/assets/images/product/img-7.png"
                              alt=""
                              class="img-fluid mx-auto d-block"
                            />
                          </div>
                        </TabPane>
                        <TabPane tabId="2" class={activeTab == "2" ? "active" : ""}>
                          <div>
                            <img
                              src="/assets/images/product/img-8.png"
                              alt=""
                              class="img-fluid mx-auto d-block"
                            />
                          </div>
                        </TabPane>
                        <TabPane tabId="3" class={activeTab == "3" ? "active" : ""}>
                          <div>
                            <img
                              src="/assets/images/product/img-7.png"
                              alt=""
                              class="img-fluid mx-auto d-block"
                            />
                          </div>
                        </TabPane>
                        <TabPane tabId="4" class={activeTab == "4" ? "active" : ""}>
                          <div>
                            <img
                              src="/assets/images/product/img-8.png"
                              alt=""
                              class="img-fluid mx-auto d-block"
                            />
                          </div>
                        </TabPane>
                      </TabContent>
                      <div class="text-center">
                        <button
                          type="button"
                          class="btn btn-primary waves-effect waves-light mt-2 me-1"
                        >
                          <i class="bx bx-cart me-2" /> Add to cart
                        </button>
                        <button
                          type="button"
                          class="btn btn-success waves-effect  mt-2 waves-light"
                        >
                          <i class="bx bx-shopping-bag me-2" />Buy now
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col xl={6}>
                <div class="mt-4 mt-xl-3">
                  <Link to="/" class="text-primary">Headphone</Link>
                  <h4 class="mt-1 mb-3">Wireless Headphone (Black)</h4>

                  <p class="text-muted float-start me-3">
                    <span class="bx bxs-star text-warning" />
                    <span class="bx bxs-star text-warning" />
                    <span class="bx bxs-star text-warning" />
                    <span class="bx bxs-star text-warning" />
                    <span class="bx bxs-star" />
                  </p>
                  <p class="text-muted mb-4">( 152 Customers Review )</p>

                  <h6 class="text-success text-uppercase">20 % Off</h6>
                  <h5 class="mb-4">
                    Price : <span class="text-muted me-2"
                      ><del>$240 USD</del></span
                    > <b>$225 USD</b>
                  </h5>
                  <p class="text-muted mb-4">
                    To achieve this, it would be necessary to have uniform
                    grammar pronunciation and more common words If several
                    languages coalesce
                  </p>
                  <Row class="mb-3">
                    <Col md={6}>
                      <div>
                        <p class="text-muted">
                          <i
                            class="bx bx-unlink font-size-16 align-middle text-primary me-1"
                          /> Wireless
                        </p>
                        <p class="text-muted">
                          <i
                            class="bx bx-shape-triangle font-size-16 align-middle text-primary me-1"
                          /> Wireless Range : 10m
                        </p>
                        <p class="text-muted">
                          <i
                            class="bx bx-battery font-size-16 align-middle text-primary me-1"
                          /> Battery life : 6hrs
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <p class="text-muted">
                          <i
                            class="bx bx-user-voice font-size-16 align-middle text-primary me-1"
                          /> Bass
                        </p>
                        <p class="text-muted">
                          <i
                            class="bx bx-cog font-size-16 align-middle text-primary me-1"
                          /> Warranty : 1 Year
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <div class="product-color">
                    <h5 class="font-size-15">Color :</h5>
                    <Link to="/" class="active">
                      <div class="product-color-item border rounded">
                        <img
                          src="/assets/images/product/img-7.png"
                          alt=""
                          class="avatar-md"
                        />
                      </div>
                      <p>Black</p>
                    </Link>
                    <Link to="/">
                      <div class="product-color-item border rounded">
                        <img
                          src="/assets/images/product/img-7.png"
                          alt=""
                          class="avatar-md"
                        />
                      </div>
                      <p>Blue</p>
                    </Link>
                    <Link to="/">
                      <div class="product-color-item border rounded">
                        <img
                          src="/assets/images/product/img-7.png"
                          alt=""
                          class="avatar-md"
                        />
                      </div>
                      <p>Gray</p>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <!-- end row -->

            <div class="mt-5">
              <h5 class="mb-3">Specifications :</h5>

              <div class="table-responsive">
                <table class="table mb-0 table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row" style="width: 400px;">Category</th>
                      <td>Headphone</td>
                    </tr>
                    <tr>
                      <th scope="row">Brand</th>
                      <td>JBL</td>
                    </tr>
                    <tr>
                      <th scope="row">Color</th>
                      <td>Black</td>
                    </tr>
                    <tr>
                      <th scope="row">Connectivity</th>
                      <td>Bluetooth</td>
                    </tr>
                    <tr>
                      <th scope="row">Warranty Summary</th>
                      <td>1 Year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- end Specifications -->

            <div class="mt-5">
              <h5>Reviews :</h5>

              <div class="d-flex py-3 border-bottom">
                <div class="flex-shrink-0 me-3">
                  <img
                    src="/assets/images/users/avatar-2.jpg"
                    class="avatar-xs rounded-circle"
                    alt="img"
                  />
                </div>

                <div class="flex-grow-1">
                  <h5 class="mb-1 font-size-15">Brian</h5>
                  <p class="text-muted">
                    If several languages coalesce, the grammar of the resulting
                    language.
                  </p>
                  <ul class="list-inline float-sm-end mb-sm-0">
                    <li class="list-inline-item">
                      <Link to="/"
                        ><i class="far fa-thumbs-up me-1" /> Like</Link
                      >
                    </li>
                    <li class="list-inline-item">
                      <Link to="/"
                        ><i class="far fa-comment-dots me-1" /> Comment</Link
                      >
                    </li>
                  </ul>
                  <div class="text-muted font-size-12">
                    <i class="far fa-calendar-alt text-primary me-1" /> 5 hrs ago
                  </div>
                </div>
              </div>
              <div class="d-flex py-3 border-bottom">
                <div class="flex-shrink-0 me-3">
                  <img
                    src="/assets/images/users/avatar-4.jpg"
                    class="avatar-xs rounded-circle"
                    alt="img"
                  />
                </div>

                <div class="flex-grow-1">
                  <h5 class="font-size-15 mb-1">Denver</h5>
                  <p class="text-muted">
                    To an English person, it will seem like simplified English,
                    as a skeptical Cambridge
                  </p>
                  <ul class="list-inline float-sm-end mb-sm-0">
                    <li class="list-inline-item">
                      <Link to="/"
                        ><i class="far fa-thumbs-up me-1" /> Like</Link
                      >
                    </li>
                    <li class="list-inline-item">
                      <Link to="/"
                        ><i class="far fa-comment-dots me-1" /> Comment</Link
                      >
                    </li>
                  </ul>
                  <div class="text-muted font-size-12">
                    <i class="far fa-calendar-alt text-primary me-1" /> 07 Oct, 2019
                  </div>
                  <div class="d-flex mt-4">
                    <div class="flex-shrink-0 me-3">
                      <img
                        src="/assets/images/users/avatar-5.jpg"
                        class="avatar-xs rounded-circle"
                        alt="img"
                      />
                    </div>

                    <div class="flex-grow-1">
                      <h5 class="mb-1 font-size-15">Henry</h5>
                      <p class="text-muted">
                        Their separate existence is a myth. For science, music,
                        sport, etc.
                      </p>
                      <ul class="list-inline float-sm-end mb-sm-0">
                        <li class="list-inline-item">
                          <Link to="/"
                            ><i class="far fa-thumbs-up me-1" /> Like</Link
                          >
                        </li>
                        <li class="list-inline-item">
                          <Link to="/"
                            ><i class="far fa-comment-dots me-1" /> Comment</Link
                          >
                        </li>
                      </ul>
                      <div class="text-muted font-size-12">
                        <i class="far fa-calendar-alt text-primary me-1" /> 08 Oct,
                        2019
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex py-3 border-bottom">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <span
                      class="avatar-title bg-primary bg-soft text-primary rounded-circle font-size-16"
                    >
                      N
                    </span>
                  </div>
                </div>

                <div class="flex-grow-1">
                  <h5 class="mb-1 font-size-15">Neal</h5>
                  <p class="text-muted">
                    Everyone realizes why a new common language would be
                    desirable.
                  </p>
                  <ul class="list-inline float-sm-end mb-sm-0">
                    <li class="list-inline-item">
                      <Link to="/"
                        ><i class="far fa-thumbs-up me-1" /> Like</Link
                      >
                    </li>
                    <li class="list-inline-item">
                      <Link to="/"
                        ><i class="far fa-comment-dots me-1" /> Comment</Link
                      >
                    </li>
                  </ul>
                  <div class="text-muted font-size-12">
                    <i class="far fa-calendar-alt text-primary me-1" /> 05 Oct, 2019
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <!-- end card -->
      </Col>
    </Row>
    <Row class="mt-3">
      <Col lg={12}>
        <div>
          <h5 class="mb-3">Recent product :</h5>

          <Row>
            <Col xl={4} sm={6}>
              <Card>
                <CardBody>
                  <Row class="align-items-center">
                    <Col md={4}>
                      <img
                        src="/assets/images/product/img-7.png"
                        alt=""
                        class="img-fluid mx-auto d-block"
                      />
                    </Col>
                    <Col md={8}>
                      <div class="text-center text-md-start pt-3 pt-md-0">
                        <h5 class="text-truncate">
                          <Link to="/" class="text-dark"
                            >Wireless Headphone</Link
                          >
                        </h5>
                        <p class="text-muted mb-4">
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star" />
                        </p>
                        <h5 class="my-0">
                          <span class="text-muted me-2"><del>$240</del></span>
                          <b>$225</b>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} sm={6}>
              <Card>
                <CardBody>
                  <Row class="align-items-center">
                    <Col md={4}>
                      <img
                        src="/assets/images/product/img-4.png"
                        alt=""
                        class="img-fluid mx-auto d-block"
                      />
                    </Col>
                    <Col md={8}>
                      <div class="text-center text-md-start pt-3 pt-md-0">
                        <h5 class="text-truncate">
                          <Link to="/" class="text-dark"
                            >Phone patterned cases</Link
                          >
                        </h5>
                        <p class="text-muted mb-4">
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star" />
                        </p>
                        <h5 class="my-0">
                          <span class="text-muted me-2"><del>$150</del></span>
                          <b>$145</b>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} sm={6}>
              <Card>
                <CardBody>
                  <Row class="align-items-center">
                    <Col md={4}>
                      <img
                        src="/assets/images/product/img-6.png"
                        alt=""
                        class="img-fluid mx-auto d-block"
                      />
                    </Col>
                    <Col md={8}>
                      <div class="text-center text-md-start pt-3 pt-md-0">
                        <h5 class="text-truncate">
                          <Link to="/" class="text-dark"
                            >Phone Dark Patterned cases</Link
                          >
                        </h5>
                        <p class="text-muted mb-4">
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star text-warning" />
                          <i class="bx bxs-star" />
                        </p>
                        <h5 class="my-0">
                          <span class="text-muted me-2"><del>$138</del></span>
                          <b>$135</b>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <!-- end row -->
        </div>
      </Col>
    </Row>
  </Container>
</div>