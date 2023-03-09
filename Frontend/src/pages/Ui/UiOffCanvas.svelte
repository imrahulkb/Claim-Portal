<script>
  import {
    Button,
    Offcanvas,
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "sveltestrap";

  let open = false;
  let endOpen = false;
  let bottomOpen = false;
  let topOpen = false;
  let leftopen = false;
  let scollopen = false;
  let sloteopen = false;
  let manualtoggle = false;
  let customopen = false;
  let manualopen= false;
  
  let status = 'Closed';
  const togglemanual = () => (manualopen = !manualopen);
  const toggle = () => (open = !open);
  const toggleEnd = () => (endOpen = !endOpen);
  const toggleBottom = () => (bottomOpen = !bottomOpen);
  const toggleTop = () => (topOpen = !topOpen);
  const toggleLeftCanvas = () => (leftopen = !leftopen);
  const toggleslot = () => (sloteopen = !sloteopen);
  const togglescollopen = () => (scollopen = !scollopen);

  import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="OffCanvas" />

    <Row>
      <Col lg={6}>
        <Card>
            <CardBody>

                <CardTitle class="h4">No Backdrop</CardTitle>
                <div>
                    <Button
                        color="primary"
                        on:click={toggleLeftCanvas}
                        class="me-2"
                    >
                      Open Offcanvas
                    </Button>
                    <Offcanvas header="No Backdrop" backdrop={false} isOpen={leftopen} toggle={toggleLeftCanvas}>
                      <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                      <Dropdown class="mt-3">
                          <DropdownToggle color="primary" type="button" id="dropdownMenuButton">
                              Dropdown button <i class="mdi mdi-chevron-down"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                              <li><DropdownItem>Action</DropdownItem></li>
                              <li><DropdownItem>Another action</DropdownItem></li>
                              <li><DropdownItem>Something else here</DropdownItem></li>
                          </DropdownMenu>
                      </Dropdown>
                    </Offcanvas>
                </div>
            </CardBody>
        </Card>
    </Col>
      <Col lg={6}>
        <Card>
          <CardBody>

            <div class="h4 card-title">Placement</div>

            <Button color="primary" on:click={toggle}>Start</Button>
            <Button color="primary" on:click={() => (endOpen = !endOpen)}
              >End</Button
            >
            <Button color="primary" on:click={() => (topOpen = !topOpen)}
              >Top</Button
            >
            <Button color="primary" on:click={() => (bottomOpen = !bottomOpen)}>
              Bottom
            </Button>

            <Offcanvas isOpen={open} {toggle} header="Start" placement="start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Offcanvas>

            <Offcanvas
              isOpen={endOpen}
              toggle={toggleEnd}
              placement="end"
              header="Right"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Offcanvas>

            <Offcanvas
              isOpen={topOpen}
              toggle={toggleTop}
              placement="top"
              header="Top"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Offcanvas>

            <Offcanvas
              isOpen={bottomOpen}
              toggle={toggleBottom}
              placement="bottom"
              header="Bottom"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Offcanvas>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>

              <CardTitle class="h4">Scrollable</CardTitle>

              <Button color="primary" on:click={togglescollopen}>Open Offcanvas</Button>

              <Offcanvas
                  header="You can scroll body"
                  scroll
                  isOpen={scollopen}
                  toggle={togglescollopen}
                  backdrop={false}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </Offcanvas>
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>

              <CardTitle class="h4">Slots</CardTitle>

              <Button color="primary" on:click={toggleslot}>Open Offcanvas</Button>

              <Offcanvas scroll isOpen={sloteopen} toggle={toggleslot}>
                <h1 slot="header">
                  <i>Hello <b>World!</b></i>
                </h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Offcanvas>
            </CardBody>
          </Card>
      </Col>
    </Row>


    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>

              <CardTitle class="h4">Manual toggling</CardTitle>

              <Button color="primary" on:click={() => (manualtoggle = true)}>Open Offcanvas</Button>
              
              <Offcanvas header="No toggle or esc" scroll isOpen={manualtoggle}>
                <Button color="primary" on:click={() => (manualtoggle = false)}
                  >Close Me Offcanvas</Button
                >
              </Offcanvas>

          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>

              <CardTitle class="h4">Custom Width & Content</CardTitle>

              <Button color="primary" on:click={() => (customopen = true)}>Open Offcanvas</Button>

              <Offcanvas isOpen={customopen} body={false} style="width: 150px" class="bg-danger">
                <img
                  alt="Meaningless content"
                  role="button"
                  src="https://picsum.photos/150/1200"
                  on:click={() => (customopen = false)}
                />
              </Offcanvas>

          </CardBody>
        </Card>
      </Col>

    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>

              <CardTitle class="h4">Manual toggling</CardTitle>

              <h6>Current state: {status}</h6>

              <Button color="primary" on:click={togglemanual}>Open</Button>

              <Offcanvas
                  isOpen={manualopen}
                  toggle={togglemanual}
                  placement="end"
                  on:opening={() => (status = 'Opening...')}
                  on:open={() => (status = 'Opened')}
                  on:closing={() => (status = 'Closing...')}
                  on:close={() => (status = 'Closed')}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </Offcanvas>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
