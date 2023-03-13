<script>
  import { Link } from "svelte-routing";
  import Breadcrumb from "./../../common/Breadcrumb.svelte";
  import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Popover,
    Row,
    Tooltip,
  } from "sveltestrap";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="General" />

    <Row>
      <Col lg={12}>
        <Card>
          <CardBody>
            <Row>
              <Col xl={6}>
                <CardTitle class="h4">Badges</CardTitle>
                <p class="card-title-desc">
                  Add any of the below mentioned modifier classes to change the
                  appearance of a badge.
                </p>
                <div>
                  <span class="badge bg-primary">Primary</span>{" "}
                  <span class="badge bg-success">Success</span>{" "}
                  <span class="badge bg-info">Info</span>{" "}
                  <span class="badge bg-warning">Warning</span>{" "}
                  <span class="badge bg-danger">Danger</span>{" "}
                  <span class="badge bg-dark">Dark</span>
                </div>

                <div class="mt-5">
                  <h5 class="font-size-14">Soft Badge</h5>
                  <span class="badge badge-soft-primary"> Primary </span>{" "}
                  <span class="badge badge-soft-success"> Success </span>{" "}
                  <span class="badge badge-soft-info">Info</span>{" "}
                  <span class="badge badge-soft-warning"> Warning </span>{" "}
                  <span class="badge badge-soft-danger"> Danger </span>{" "}
                  <span class="badge badge-soft-dark">Dark</span>
                </div>
              </Col>
              <Col xl={6}>
                <div class="mt-4 mt-lg-0">
                  <CardTitle class="h4">Pill badges</CardTitle>
                  <p class="card-title-desc">
                    Use the <code>.badge-pill</code> modifier className to make
                    badges more rounded (with a larger{" "}
                    <code>border-radius</code>
                    and additional horizontal <code>padding</code>). Useful if
                    you miss the badges from v3.
                  </p>

                  <div>
                    <span class="badge rounded-pill bg-primary">
                      Primary
                    </span>{" "}
                    <span class="badge rounded-pill bg-success">
                      Success
                    </span>{" "}
                    <span class="badge rounded-pill bg-info"> Info </span>{" "}
                    <span class="badge rounded-pill bg-warning">
                      Warning
                    </span>{" "}
                    <span class="badge rounded-pill bg-danger">
                      Danger
                    </span>{" "}
                    <span class="badge rounded-pill bg-dark"> Dark </span>
                  </div>

                  <div class="mt-5">
                    <h5 class="font-size-14">Soft Badge</h5>
                    <span class="badge rounded-pill badge-soft-primary">
                      Primary
                    </span>{" "}
                    <span class="badge rounded-pill badge-soft-success">
                      Success
                    </span>{" "}
                    <span class="badge rounded-pill badge-soft-info">
                      Info
                    </span>{" "}
                    <span class="badge rounded-pill badge-soft-warning">
                      Warning
                    </span>{" "}
                    <span class="badge rounded-pill badge-soft-danger">
                      Danger
                    </span>{" "}
                    <span class="badge rounded-pill badge-soft-dark">
                      Dark
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <hr class="mt-5" />
            <Row>
              <Col xl="6">
                <div class="mt-4">
                  <h4 class="card-title">Badges in Buttons</h4>
                  <p class="card-title-desc">
                    Badges can be used as part of links or buttons to provide a
                    counter.
                  </p>

                  <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-primary">
                      Notifications <span
                        class="badge bg-success ms-1">4</span
                      >
                    </button>
                    <button type="button" class="btn btn-success">
                      Messages <span class="badge bg-danger ms-1"
                        >2</span
                      >
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                    >
                      Draft <span class="badge bg-success ms-1"
                        >2</span
                      >
                    </button>
                  </div>
                </div>
              </Col>
              <Col xl="6">
                <div class="mt-4">
                  <CardTitle class="h4">Badges Position Examples</CardTitle>
                  <p class="card-title-desc">Example of Badges Position</p>
                  <div class="d-flex flex-wrap gap-3">
                    <Button color="primary" class="position-relative">
                      Mails <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                        >+99 <span class="visually-hidden">unread messages</span
                        ></span
                      >
                    </Button>

                    <Button color="light" class="position-relative">
                      Alerts <span
                        class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"
                        ><span class="visually-hidden">unread messages</span
                        ></span
                      >
                    </Button>

                    <Button
                      color="primary"
                      class="position-relative p-0 avatar-xs rounded"
                    >
                      <span class="avatar-title bg-transparent">
                        <i class="bx bxs-envelope" />
                      </span>
                      <span
                        class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"
                        ><span class="visually-hidden">unread messages</span
                        ></span
                      >
                    </Button>

                    <Button
                      color="light"
                      class="position-relative p-0 avatar-xs rounded-circle"
                    >
                      <span class="avatar-title bg-transparent text-reset">
                        <i class="bx bxs-bell" />
                      </span>
                    </Button>

                    <Button
                      color="light"
                      class="position-relative p-0 avatar-xs rounded-circle"
                    >
                      <span class="avatar-title bg-transparent text-reset">
                        <i class="bx bx-menu" />
                      </span>
                      <span
                        class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"
                        ><span class="visually-hidden">unread messages</span
                        ></span
                      >
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Popovers</CardTitle>
            <p class="card-title-desc">
              Four options are available: top, right, bottom, and left aligned.
              Directions are mirrored when using Bootstrap in RTL.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <Button id="popovertop1" color="secondary">Popover on top</Button>
              <Popover placement="right" target="popovertop1">
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover>
              <Button id="Popoverright" color="secondary">
                Popover on right
              </Button>
              <Popover placement="right" target="Popoverright">
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover>
              <Button id="Popoverbottom" color="secondary">
                Popover on bottom
              </Button>
              <Popover placement="bottom" target="Popoverbottom">
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover>
              <Button id="Popoverleft" color="secondary">
                Popover on left
              </Button>
              <Popover placement="left" target="Popoverleft">
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover>
              <Button id="Popoverdismiss" class="btn btn-success">
                Dismissible popover
              </Button>
              <Popover placement="bottom" target="Popoverdismiss">
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Tooltips</CardTitle>
            <p class="card-title-desc">
              Hover over the links below to see tooltips:
            </p>

            <div class="d-flex flex-wrap gap-2">
              <Tooltip placement="top" target="TooltipTop">
                Hello world!
              </Tooltip>
              <Tooltip placement="right" target="TooltipRight">
                Hello world!
              </Tooltip>
              <Tooltip placement="bottom" target="TooltipBottom">
                Hello world!
              </Tooltip>
              <Tooltip placement="left" target="TooltipLeft">
                Hello world!
              </Tooltip>

              <button type="button" class="btn btn-primary" id="TooltipTop">
                Tooltip on top
              </button>{" "}
              <button type="button" class="btn btn-primary" id="TooltipRight">
                Tooltip on right
              </button>{" "}
              <button type="button" class="btn btn-primary" id="TooltipBottom">
                Tooltip on bottom
              </button>{" "}
              <button type="button" class="btn btn-primary" id="TooltipLeft">
                Tooltip on left
              </button>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4 mb-4">Pagination</CardTitle>
            <Row>
              <Col xl={6}>
                <CardTitle class="h5 font-size-14">Default Example</CardTitle>
                <p class="card-title-desc">
                  Pagination links indicate a series of related content exists
                  across multiple pages.
                </p>

                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <Link class="page-link" to="#">Previous</Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="#">1</Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="#">2</Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="#">3</Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="#">Next</Link>
                    </li>
                  </ul>
                </nav>

                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <Link class="page-link" to="#" aria-label="Previous">
                        <i class="mdi mdi-chevron-left" />
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="#">1</Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="#">2</Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="#">3</Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="#" aria-label="Next">
                        <i class="mdi mdi-chevron-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Col>

              <Col xl={6}>
                <div class="mt-4 mt-lg-0">
                  <CardTitle class="h5 font-size-14"
                    >Disabled and active states</CardTitle
                  >
                  <p class="card-title-desc">
                    Pagination links are customizable for different
                    circumstances. Use <code>.disabled</code> for links that
                    appear un-clickable and <code>.active</code> to indicate the
                    current page.
                  </p>

                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <Link class="page-link" to="#" tabIndex="-1">
                          Previous
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">1</Link>
                      </li>
                      <li class="page-item active">
                        <Link class="page-link" to="#">
                          2 <span class="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">3</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">Next</Link>
                      </li>
                    </ul>
                  </nav>

                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <span class="page-link"
                          ><i class="mdi mdi-chevron-left" /></span
                        >
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">1</Link>
                      </li>
                      <li class="page-item active">
                        <span class="page-link">
                          2<span class="sr-only">(current)</span>
                        </span>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">3</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">
                          <i class="mdi mdi-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <div class="mt-4">
                  <CardTitle class="h5 font-size-14">Sizing</CardTitle>
                  <p class="card-title-desc">
                    Fancy larger or smaller pagination? Add{" "}
                    <code>.pagination-lg</code> or{" "}
                    <code>.pagination-sm</code> for additional sizes.
                  </p>

                  <nav aria-label="...">
                    <ul class="pagination pagination-lg">
                      <li class="page-item disabled">
                        <Link class="page-link" to="#" tabIndex="-1">
                          Previous
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">1</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">2</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">3</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">Next</Link>
                      </li>
                    </ul>
                  </nav>

                  <nav aria-label="...">
                    <ul class="pagination pagination-sm">
                      <li class="page-item disabled">
                        <Link class="page-link" to="#" tabIndex="-1">
                          Previous
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">1</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">2</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">3</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">Next</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>

              <Col xl={6}>
                <div class="mt-4">
                  <CardTitle class="h5 font-size-14">Alignment</CardTitle>
                  <p class="card-title-desc">
                    Change the alignment of pagination components with flexbox
                    utilities.
                  </p>

                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <Link class="page-link" to="#" tabIndex="-1">
                          Previous
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">1</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">2</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">3</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">Next</Link>
                      </li>
                    </ul>
                  </nav>

                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li class="page-item disabled">
                        <Link class="page-link" to="#" tabIndex="-1">
                          Previous
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">1</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">2</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">3</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" to="#">Next</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Border spinner</CardTitle>
            <p class="card-title-desc">
              Use the border spinners for a lightweight loading indicator.
            </p>
            <div>
              <div class="spinner-border text-primary m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-secondary m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-success m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-info m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-warning m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-danger m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-border text-dark m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </CardBody>{" "}
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Growing spinner</CardTitle>
            <p class="card-title-desc">
              If you don’t fancy a border spinner, switch to the grow spinner.
              While it doesn’t technically spin, it does repeatedly grow!
            </p>
            <div>
              <div class="spinner-grow text-primary m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-secondary m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-success m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-info m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-warning m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-danger m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-dark m-1" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={6}>
          <Card>
              <CardBody>
                  <h4 class="card-title">Close Button</h4>
                  <p class="card-title-desc">Provide an option to dismiss or close a component with <code>.btn-close</code>. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default <code>background-image</code>. <strong>Be sure to include text for screen readers</strong>, as we’ve done with <code>aria-label</code>.</p>

                  <div>
                      <button type="button" class="btn-close" aria-label="Close"></button>
                  </div>                                                
              </CardBody>
          </Card>
      </Col>
      <Col xl={6}>
          <Card>
              <CardBody>
                  <h4 class="card-title">Disable Close Button</h4>
                  <p class="card-title-desc">Disabled close buttons change their <code>opacity</code>. We’ve also applied <code>pointer-events: none</code> and <code>user-select: none</code> to preventing hover and active states from triggering.</p>

                  <div>
                      <button type="button" class="btn-close" disabled aria-label="Close"></button>
                  </div>

              </CardBody>
          </Card>
      </Col>
  </Row>
  <Row>
      <Col xl={6}>
          <Card>
              <CardBody>
                  <h4 class="card-title">Close Button White Variant</h4>
                  <p class="card-title-desc">Change the default <code>.btn-close</code> to be white with the <code>.btn-close-white</code> class. This class uses the <code>filter</code> property to invert the <code>background-image</code>.</p>

                  <div class="card-body bg-dark">                                        
                      <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
                      <button type="button" class="btn-close btn-close-white" disabled="" aria-label="Close"></button>
                  </div>

              </CardBody>
          </Card>
      </Col>
  </Row>
  </Container>
</div>
