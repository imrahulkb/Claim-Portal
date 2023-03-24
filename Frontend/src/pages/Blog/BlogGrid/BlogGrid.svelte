<script>
  import {
    Card,
    Col,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
  } from "sveltestrap";
  let activeTab = "1";
  import { Link } from "svelte-routing";
</script>

<Col xl={9} lg={8}>
  <Card>
    <ul
      class="nav nav-tabs nav-tabs-custom justify-content-center pt-2"
      role="tablist"
    >
      <NavItem>
        <NavLink on:click={() => (activeTab = "1")} active={activeTab == "1"}>
          All Post
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink on:click={() => (activeTab = "2")} active={activeTab == "2"}>
          Archive
        </NavLink>
      </NavItem>
    </ul>
    <TabContent class="p-4" {activeTab}>
      <TabPane tabId="1" class="{activeTab == 1 ? 'active': ''}">
        <div>
          <Row class="justify-content-center">
            <Col xl={8}>
              <div>
                <Row class="align-items-center">
                  <div class="col-4">
                    <div>
                      <h5 class="mb-0">Blog Grid</h5>
                    </div>
                  </div>

                  <Col xs={8}>
                    <div>
                      <ul class="nav nav-pills justify-content-end">
                        <NavItem>
                          <NavLink class="disabled" to="#" tabIndex="-1">
                            View :
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <Link class="nav-link" to="blog-list">
                            <i class="mdi mdi-format-list-bulleted" />
                          </Link>
                        </NavItem>
                        <NavItem>
                          <Link to="blog-grid " class="nav-link active">
                            <i class="mdi mdi-view-grid-outline" />
                          </Link>
                        </NavItem>
                      </ul>
                    </div>
                  </Col>
                </Row>

                <hr class="mb-4" />

                <Row>
                  <Col sm={6}>
                    <Card class="p-1 border shadow-none">
                      <div class="p-3">
                        <h5>
                          <Link to="/blog-details" class="text-dark">
                            Beautiful Day with Friends
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">10 Apr, 2020</p>
                      </div>

                      <div class="position-relative">
                        <img
                          src="assets/images/small/img-2.jpg"
                          alt=""
                          class="img-thumbnail"
                        />
                      </div>

                      <div class="p-3">
                        <ul class="list-inline">
                          <li class="list-inline-item me-3">
                            <Link to="#" class="text-muted">
                              <i
                                class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                              />{" "}
                              Project
                            </Link>
                          </li>
                          <li class="list-inline-item me-3">
                            <Link to="#" class="text-muted">
                              <i
                                class="bx bx-comment-dots align-middle text-muted me-1"
                              />{" "}
                              12 Comments
                            </Link>
                          </li>
                        </ul>
                        <p>
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet
                        </p>

                        <div>
                          <Link to="#" class="text-primary">
                            Read more{" "}
                            <i class="mdi mdi-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>

                  <Col sm={6}>
                    <Card class="p-1 border shadow-none">
                      <div class="p-3">
                        <h5>
                          <Link to="/blog-details" class="text-dark">
                            Drawing a sketch
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">24 Mar, 2020</p>
                      </div>

                      <div class="position-relative">
                        <img
                          src="assets/images/small/img-6.jpg"
                          alt=""
                          class="img-thumbnail"
                        />

                        <div class="blog-play-icon">
                          <Link to="#" class="avatar-sm d-block mx-auto">
                            <span
                              class="avatar-title rounded-circle font-size-18"
                            >
                              <i class="mdi mdi-play" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div class="p-3">
                        <ul class="list-inline">
                          <li class="list-inline-item me-3">
                            <Link to="#" class="text-muted">
                              <i
                                class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                              />{" "}
                              Development
                            </Link>
                          </li>
                          <li class="list-inline-item me-3">
                            <Link to="#" class="text-muted">
                              <i
                                class="bx bx-comment-dots align-middle text-muted me-1"
                              />{" "}
                              08 Comments
                            </Link>
                          </li>
                        </ul>

                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus quos
                        </p>

                        <div>
                          <Link to="#" class="text-primary">
                            Read more{" "}
                            <i class="mdi mdi-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Card class="p-1 border shadow-none">
                      <div class="p-3">
                        <h5>
                          <Link to="/blog-details" class="text-dark">
                            Riding bike on road
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">10 Apr, 2020</p>
                      </div>

                      <div class="position-relative">
                        <img
                          src="assets/images/small/img-1.jpg"
                          alt=""
                          class="img-thumbnail"
                        />
                      </div>

                      <div class="p-3">
                        <ul class="list-inline">
                          <li class="list-inline-item me-3">
                            <Link to="#" class="text-muted">
                              <i
                                class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                              />{" "}
                              Travel
                            </Link>
                          </li>
                          <li class="list-inline-item me-3">
                            <Link to="#" class="text-muted">
                              <i
                                class="bx bx-comment-dots align-middle text-muted me-1"
                              />{" "}
                              08 Comments
                            </Link>
                          </li>
                        </ul>
                        <p>
                          Itaque earum rerum hic tenetur a sapiente delectus ut
                          aut
                        </p>

                        <div>
                          <Link to="#" class="text-primary">
                            Read more{" "}
                            <i class="mdi mdi-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>

                  <Col sm={6}>
                    <Card class="p-1 border shadow-none">
                      <div class="p-3">
                        <h5>
                          <Link to="/blog-details" class="text-dark">
                            Project discussion with team
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">24 Mar, 2020</p>
                      </div>

                      <div class="position-relative">
                        <img
                          src="assets/images/small/img-2.jpg"
                          alt=""
                          class="img-thumbnail"
                        />
                      </div>

                      <div class="p-3">
                        <ul class="list-inline">
                          <li class="list-inline-item me-3">
                            <Link to="#" class="text-muted">
                              <i
                                class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                              />{" "}
                              Development
                            </Link>
                          </li>
                          <li class="list-inline-item me-3">
                            <Link to="#" class="text-muted">
                              <i
                                class="bx bx-comment-dots align-middle text-muted me-1"
                              />{" "}
                              08 Comments
                            </Link>
                          </li>
                        </ul>

                        <p>
                          Sed ut perspiciatis unde omnis iste eaque natus error
                          sit
                        </p>

                        <div>
                          <Link to="#" class="text-primary">
                            Read more{" "}
                            <i class="mdi mdi-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>

                <hr class="my-4" />

                <div class="text-center">
                  <ul
                    class="pagination justify-content-center pagination-rounded"
                  >
                    <li class="page-item disabled">
                      <Link to="#" class="page-link">
                        <i class="mdi mdi-chevron-left" />
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link to="#" class="page-link">1</Link>
                    </li>
                    <li class="page-item active">
                      <Link to="#" class="page-link">2</Link>
                    </li>
                    <li class="page-item">
                      <Link to="#" class="page-link">3</Link>
                    </li>
                    <li class="page-item">
                      <Link to="#" class="page-link">...</Link>
                    </li>
                    <li class="page-item">
                      <Link to="#" class="page-link">10</Link>
                    </li>
                    <li class="page-item">
                      <Link to="#" class="page-link">
                        <i class="mdi mdi-chevron-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </TabPane>

      <TabPane tabId="2" class="{activeTab == 2 ? 'active': ''}">
        <div>
          <Row class="justify-content-center">
            <Col xl={8}>
              <h5>Archive</h5>

              <div class="mt-5">
                <div class="d-flex flex-wrap">
                  <div class="me-2">
                    <h4>2020</h4>
                  </div>
                  <div class="ms-auto">
                    <span
                      class="badge badge-soft-success badge-pill float-right ms-1 font-size-12"
                    >
                      03
                    </span>
                  </div>
                </div>
                <hr class="mt-2" />

                <div class="list-group list-group-flush">
                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" />{" "}
                    Beautiful Day with Friends
                  </Link>

                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" />{" "}
                    Drawing a sketch
                  </Link>

                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" />{" "}
                    Project discussion with team
                  </Link>
                </div>
              </div>

              <div class="mt-5">
                <div class="d-flex flex-wrap">
                  <div class="me-2">
                    <h4>2019</h4>
                  </div>
                  <div class="ms-auto">
                    <span
                      class="badge badge-soft-success badge-pill float-right ms-1 font-size-12"
                    >
                      06
                    </span>
                  </div>
                </div>
                <hr class="mt-2" />

                <div class="list-group list-group-flush">
                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" />{" "}
                    Coffee with Friends
                  </Link>

                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" /> Neque porro quisquam
                    est
                  </Link>

                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" /> Quis autem vel eum iure
                  </Link>

                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" /> Cras mi eu turpis
                  </Link>

                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" />{" "}
                    Drawing a sketch
                  </Link>

                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" />{" "}
                    Project discussion with team
                  </Link>
                </div>
              </div>

              <div class="mt-5">
                <div class="d-flex flex-wrap">
                  <div class="me-2">
                    <h4>2018</h4>
                  </div>
                  <div class="ms-auto">
                    <span
                      class="badge badge-soft-success badge-pill float-right ms-1 font-size-12"
                    >
                      03
                    </span>
                  </div>
                </div>
                <hr class="mt-2" />

                <div class="list-group list-group-flush">
                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" />{" "}
                    Beautiful Day with Friends
                  </Link>

                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" />{" "}
                    Drawing a sketch
                  </Link>

                  <Link to="/blog-details" class="list-group-item text-muted">
                    <i class="mdi mdi-circle-medium me-1" />{" "}
                    Project discussion with team
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </TabPane>
    </TabContent>
  </Card>
</Col>
