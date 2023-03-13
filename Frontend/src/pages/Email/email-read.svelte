<script>
  import { Link } from "svelte-routing";
  import {
    Container,
    Row,
    Col,
    CardBody,
    Card,
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
  } from "sveltestrap";
  import EmailSidebar from "./EmailSidebar.svelte";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Email" breadcrumbItem="Read Email" />

    <Row>
      <Col xs="12">
        <EmailSidebar />
        <div class="email-rightbar mb-3">
          <Card>
            <div class="btn-toolbar p-3" role="toolbar">
              <div class="btn-group me-2 mb-2 mb-sm-0">
                <Button color="primary" class="waves-light waves-effect"
                  ><i class="fa fa-inbox" /></Button
                >
                <Button color="primary" class="waves-light waves-effect"
                  ><i class="fa fa-exclamation-circle" /></Button
                >
                <Button color="primary" class="waves-light waves-effect"
                  ><i class="far fa-trash-alt" /></Button
                >
              </div>
              <div class="btn-group me-2 mb-2 mb-sm-0">
                <Dropdown>
                  <DropdownToggle color="primary"><i class="fa fa-folder"></i>{" "}<i class="mdi mdi-chevron-down ms-1"></i></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Updates</DropdownItem>
                    <DropdownItem>Social</DropdownItem>
                    <DropdownItem>Team Manage</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div class="btn-group me-2 mb-2 mb-sm-0">
                <Dropdown>
                  <DropdownToggle color="primary"> <i class="fa fa-tag"></i> <i class="mdi mdi-chevron-down ms-1"></i></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Updates</DropdownItem>
                    <DropdownItem>Social</DropdownItem>
                    <DropdownItem>Team Manage</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              <div class="btn-group me-2 mb-2 mb-sm-0">
                <Dropdown>
                  <DropdownToggle color="primary">More <i class="mdi mdi-dots-vertical ms-2"></i></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem >Mark as Unread</DropdownItem>
                    <DropdownItem >Mark as Important</DropdownItem>
                    <DropdownItem >Add to Tasks</DropdownItem>
                    <DropdownItem >Add Star</DropdownItem>
                    <DropdownItem >Mute</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            <CardBody>
              <div class="d-flex mb-4">
                <div class="flex-shrink-0 me-3">
                  <img
                    class="rounded-circle avatar-sm"
                    src="/assets/images/users/avatar-2.jpg"
                    alt="Card 1"
                  />
                </div>
                <div class="flex-grow-1">
                  <h5 class="font-size-14 mt-1">Humberto D. Champion</h5>
                  <small class="text-muted">support@domain.com</small>
                </div>
              </div>

              <h4 class="font-size-16">This Week's Top Stories</h4>

              <p>Dear Lorem Ipsum,</p>
              <p>
                Praesent dui ex, dapibus eget mauris ut, finibus vestibulum
                enim. Quisque arcu leo, facilisis in fringilla id, luctus in
                tortor. Nunc vestibulum est quis orci varius viverra. Curabitur
                dictum volutpat massa vulputate molestie. In at felis ac velit
                maximus convallis.
              </p>
              <p>
                Sed elementum turpis eu lorem interdum, sed porttitor eros
                commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam
                in dui et porta. Sed bibendum orci non tincidunt ultrices.
                Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna
                lacinia lacus, vel tincidunt mi nibh sit amet lorem.
              </p>
              <p>Sincerly,</p>
              <hr />

              <Row>
                <Col xl={2} class="col-6">
                  <Card>
                    <img
                      class="card-img-top img-fluid"
                      src="/assets/images/small/img-3.jpg"
                      alt="Card 2"
                    />
                    <div class="py-2 text-center">
                      <Link href={"#"} class="fw-medium">Download</Link>
                    </div>
                  </Card>
                </Col>
                <Col xl={2} class="col-6">
                  <Card>
                    <img
                      src="/assets/images/small/img-4.jpg"
                      class="card-img-top img-fluid"
                      alt="Card 3"
                    />
                    <div class="py-2 text-center">
                      <Link href={"#"} class="fw-medium">Download</Link>
                    </div>
                  </Card>
                </Col>
              </Row>

              <Link to="#" class="btn btn-secondary waves-effect mt-4"
                ><i class="mdi mdi-reply" /> Reply</Link
              >
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  </Container>
</div>
