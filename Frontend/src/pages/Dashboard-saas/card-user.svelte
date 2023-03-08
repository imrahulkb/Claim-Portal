<script>
  import {
    Row,
    Col,
    Card,
    CardBody,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "sveltestrap";

</script>

<Row>
  <Col lg="12">
    <Card>
      <CardBody>
        <Row>
          <Col lg="4">
            <div class="d-flex">
              <div class="me-3">
                <img
                  src="/assets/images/users/avatar-1.jpg"
                  alt=""
                  class="avatar-md rounded-circle img-thumbnail"
                />
              </div>
              <div class="flex-grow-1 align-self-center">
                <div class="text-muted">
                  <p class="mb-2">Welcome to skote dashboard</p>
                  <h5 class="mb-1">Henry wells</h5>
                  <p class="mb-0">UI / UX Designer</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="4" class="align-self-center">
            <div class="text-lg-center mt-4 mt-lg-0">
              <Row>
                <Col xs="4">
                  <div>
                    <p class="text-muted text-truncate mb-2">
                      Total Projects
                    </p>
                    <h5 class="mb-0">48</h5>
                  </div>
                </Col>
                <Col xs="4">
                  <div>
                    <p class="text-muted text-truncate mb-2">Projects</p>
                    <h5 class="mb-0">40</h5>
                  </div>
                </Col>
                <Col xs="4">
                  <div>
                    <p class="text-muted text-truncate mb-2">Clients</p>
                    <h5 class="mb-0">18</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg="4" class="d-none d-lg-block">
            <div class="clearfix mt-4 mt-lg-0">
              <Dropdown class="float-end">
                <DropdownToggle tag="button" color="primary">
                  <i class="bx bxs-cog align-middle me-1" />{" "}
                  Setting
                </DropdownToggle>

                <DropdownMenu class="dropdown-menu-end">
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">Another action</DropdownItem>
                  <DropdownItem href="#">Something else</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
</Row>