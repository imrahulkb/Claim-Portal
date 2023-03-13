<script>
  import { Link } from "svelte-routing";
  import {
    Card,
    CardBody,
    Col,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    Row,
  } from "sveltestrap";
</script>

<Col xl={4}>
  <Card>
    <CardBody>
      <div class="d-flex">
        <div class="me-3">
          <img
            src="/assets/images/users/avatar-1.jpg"
            alt=""
            class="avatar-sm rounded-circle img-thumbnail"
          />
        </div>
        <div class="flex-grow-1">
          <div class="d-flex">
            <div class="flex-grow-1">
              <div class="text-muted">
                <h5 class="mb-1">Henry wells</h5>
                <p class="mb-0">UI / UX Designer</p>
              </div>
            </div>

            <Dropdown class="flex-shrink-0 ms-2">
              <DropdownToggle
                class="btn-sm"
                color="light"
                type="button"
              >
                <i class="bx bxs-cog align-middle me-1" /> Setting
              </DropdownToggle>
              <DropdownMenu class="dropdown-menu-end">
                <Link class="dropdown-item" to="#">Action</Link>
                <Link class="dropdown-item" to="#">Another action</Link>
                <Link class="dropdown-item" to="#">Something else</Link>
              </DropdownMenu>
            </Dropdown>
            
          </div>

          <hr />

          <Row>
            <div class="col-4">
              <div>
                <p class="text-muted text-truncate mb-2">Total Post</p>
                <h5 class="mb-0">32</h5>
              </div>
            </div>
            <div class="col-4">
              <div>
                <p class="text-muted text-truncate mb-2">Subscribes</p>
                <h5 class="mb-0">10k</h5>
              </div>
            </div>
          </Row>

        </div>
      </div>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <div class="d-flex flex-wrap align-items-start">
        <h5 class="card-title mb-3 me-2">Subscribes</h5>

        <Dropdown
          class="dropdown ms-auto"
        >
          <DropdownToggle
            class="text-muted font-size-16"
            color=""
            tag="a"
          >
            <i class="mdi mdi-dots-horizontal" />
          </DropdownToggle>
          <DropdownMenu class="dropdown-menu-end">
            <Link class="dropdown-item" to="#">Action</Link>
            <Link class="dropdown-item" to="#">Another action</Link>
            <Link class="dropdown-item" to="#">Something else</Link>
            <div class="dropdown-divider" />
            <Link class="dropdown-item" to="#">Separated link</Link>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div class="d-flex flex-wrap">
        <div>
          <p class="text-muted mb-1">Total Subscribe</p>
          <h4 class="mb-3">10,512</h4>
          <p class="text-success mb-0">
            <span>
              0.6 % <i class="mdi mdi-arrow-top-right ms-1" />
            </span>
          </p>
        </div>
        <div class="ms-auto align-self-end">
          <i class="bx bx-group display-4 text-light" />
        </div>
      </div>
    </CardBody>
  </Card>

  <Card>
    <CardBody class="p-4">
      <div class="text-center">
        <div class="avatar-md mx-auto mb-4">
          <div class="avatar-title bg-light rounded-circle text-primary h1">
            <i class="mdi mdi-email-open" />
          </div>
        </div>

        <Row class="justify-content-center">
          <Col xl={10}>
            <h4 class="text-primary">Subscribe !</h4>
            <p class="text-muted font-size-14 mb-4">
              Subscribe our newletter and get notification to stay update.
            </p>

            <div class="input-group bg-light rounded">
              <input
                type="email"
                class="form-control bg-transparent border-0"
                placeholder="Enter Email address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button class="btn btn-primary" type="button" id="button-addon2">
                <i class="bx bxs-paper-plane" />
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </CardBody>
  </Card>
</Col>
