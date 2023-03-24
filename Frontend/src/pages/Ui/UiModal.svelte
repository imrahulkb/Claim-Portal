<script>
  import {
    Card,
    CardBody,
    Col,
    Container,
    Modal,
    Row,
    CardTitle,
    Label
  } from "sveltestrap";

  import Breadcrumb from "../../common/Breadcrumb.svelte";

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };

  let modal_standard = false;

  const tog_standard = () => {
    (modal_standard = !modal_standard), removeBodyCss();
  };

  let modal_fullscreen = false;
  const tog_fullscreen = () => {
    (modal_fullscreen = !modal_fullscreen), removeBodyCss();
  };

  let modal_backdrop = false;
  const tog_backdrop = () => {
    (modal_backdrop = !modal_backdrop), removeBodyCss();
  };

  let modal_firstmodal = false;
  const tog_firstmodal = () => {
    (modal_firstmodal = !modal_firstmodal), removeBodyCss();
  };

  let varyingModal = false;
  const tog_varyingModal = () => {
    (varyingModal = !varyingModal), removeBodyCss();
  };

  let modal_secondmodal = false;
  const tog_secondmodal = () => {
    (modal_secondmodal = !modal_secondmodal), removeBodyCss();
  };

  let modal_large = false;
  const tog_large = () => {
    (modal_large = !modal_large), removeBodyCss();
  };

  let modal_xlarge = false;
  const tog_xlarge = () => {
    (modal_xlarge = !modal_xlarge), removeBodyCss();
  };

  let modal_small = false;
  const tog_small = () => {
    (modal_small = !modal_small), removeBodyCss();
  };

  let modal_center = false;
  const tog_center = () => {
    (modal_center = !modal_center), removeBodyCss();
  };

  let modal_scroll = false;
  const tog_scroll = () => {
    (modal_scroll = !modal_scroll), removeBodyCss();
  };
  var modal_1 = "varying";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="Modals" />

    <Row>
      <Col class="col-12">
        <Card>
          <CardBody>
            <CardTitle class="h4">Modals Examples</CardTitle>
            <p class="card-title-desc">
              Modals are streamlined, but flexible dialog prompts powered by
              JavaScript. They support a number of use cases from user
              notification to completely custom content and feature a handful of
              helpful subcomponents, sizes, and more.
            </p>

            <div class="modal bs-example-modal" tabIndex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div class="modal-body">
                    <p>One fine body&hellip;</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Default Modal</CardTitle>
            <p class="card-title-desc">
              Toggle a working modal demo by clicking the button below. It will
              slide down and fade in from the top of the page.
            </p>
            <div>
              <button
                type="button"
                on:click={tog_standard}
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#myModal"
              >
                Standard Modal
              </button>

              <Modal isOpen={modal_standard} toggle={tog_standard}>
                <div class="modal-header">
                  <h5 class="modal-title mt-0" id="myModalLabel">
                    Modal Heading
                  </h5>
                  <button
                    type="button"
                    on:click={tog_standard}
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h5>Overflowing text to show scroll behavior</h5>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    on:click={tog_standard}
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Fullscreen Modal</CardTitle>
            <p class="card-title-desc">
              Another override is the option to pop up a modal that covers the
              user viewport, available via modifier classes that are placed on a <code
                >.modal-fullscreen</code
              >.
            </p>
            <div>
              <button
                type="button"
                on:click={tog_fullscreen}
                class="btn btn-primary"
                data-toggle="modal"
              >
                Fullscreen Modal
              </button>
              <Modal
                size="xl"
                isOpen={modal_fullscreen}
                toggle={tog_fullscreen}
                class="modal-fullscreen"
              >
                <div class="modal-header">
                  <h5 class="modal-title mt-0" id="exampleModalFullscreenLabel">
                    Fullscreen Modal
                  </h5>
                  <button
                    on:click={tog_fullscreen}
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h5>Overflowing text to show scroll behavior</h5>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    on:click={tog_fullscreen}
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Optional Sizes</CardTitle>
            <p class="card-title-desc">
              Modals have three optional sizes, available via modifier classes
              to be placed on a <code>.modal-dialog</code>.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <button
                type="button"
                on:click={tog_xlarge}
                class="btn btn-primary"
                data-toggle="modal"
                data-target=".bs-example-modal-xl"
              >
                Extra large modal
              </button>
              <button
                type="button"
                on:click={tog_large}
                class="btn btn-light"
                data-toggle="modal"
                data-target=".bs-example-modal-lg"
              >
                Large modal
              </button>
              <button
                type="button"
                on:click={tog_small}
                class="btn btn-success"
                data-toggle="modal"
                data-target=".bs-example-modal-sm"
              >
                Small modal
              </button>
            </div>

            <div>
              <Modal size="xl" isOpen={modal_xlarge} toggle={tog_xlarge}>
                <div class="modal-header">
                  <h5 class="modal-title mt-0" id="myExtraLargeModalLabel">
                    Extra large modal
                  </h5>
                  <button
                    on:click={tog_xlarge}
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p class="mb-0">
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                </div>
              </Modal>
              <Modal size="lg" isOpen={modal_large} toggle={tog_large}>
                <div class="modal-header">
                  <h5 class="modal-title mt-0" id="myLargeModalLabel">
                    Large Modal
                  </h5>
                  <button
                    on:click={tog_large}
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p class="mb-0">
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                </div>
              </Modal>
              <Modal size="sm" isOpen={modal_small} toggle={tog_small}>
                <div class="modal-header">
                  <h5 class="modal-title mt-0" id="mySmallModalLabel">
                    Small Modal
                  </h5>
                  <button
                    on:click={tog_small}
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p class="mb-0">
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                </div>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h5">Vertically Centered</CardTitle>
            <p class="card-title-desc">
              Add <code>.modal-dialog-centered</code> to
              <code>.modal-dialog</code> to vertically center the modal.
            </p>
            <div>
              <button
                type="button"
                class="btn btn-primary"
                on:click={tog_center}
                data-toggle="modal"
                data-target=".bs-example-modal-center"
              >
                Center modal
              </button>
              <Modal isOpen={modal_center} toggle={tog_center} centered={true}>
                <div class="modal-header">
                  <h5 class="modal-title mt-0">Center Modal</h5>
                  <button
                    type="button"
                    on:click={tog_center}
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p class="mb-0">
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                </div>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h5">Scrollable modal</CardTitle>
            <p class="card-title-desc">
              Another override is the option to pop up a modal that covers the
              user viewport, available via modifier classes that are placed on a <code
                >.modal-dialog</code
              >.
            </p>
            <div>
              <button
                type="button"
                class="btn btn-primary"
                on:click={tog_scroll}
                data-toggle="modal"
              >
                Scrollable modal
              </button>
              <Modal
                isOpen={modal_scroll}
                toggle={tog_scroll}
                scrollable={true}
              >
                <div class="modal-header">
                  <h5 class="modal-title mt-0">Scrollable modal</h5>
                  <button
                    type="button"
                    on:click={tog_scroll}
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      on:click={tog_scroll}
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle>Static Backdrop</CardTitle>
            <p class="card-title-desc">
              When backdrop is set to static, the modal will not close when
              clicking outside it. Click the button below to try it.
            </p>
            <div>
              <button
                type="button"
                class="btn btn-primary"
                on:click={tog_backdrop}
                data-toggle="modal"
              >
                Static backdrop modal
              </button>
              <Modal
                isOpen={modal_backdrop}
                toggle={tog_backdrop}
                scrollable={true}
                backdrop={"static"}
                id="staticBackdrop"
              >
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    on:click={tog_backdrop}
                    aria-label="Close"
                  />
                </div>
                <div class="modal-body">
                  <p>
                    I will not close if you click outside me. Don&apos;t even
                    try to press escape key.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light"
                    on:click={tog_backdrop}>Close</button
                  >
                  <button type="button" class="btn btn-primary"
                    >Understood</button
                  >
                </div>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <h4 class="card-title">Toggle Between Modals</h4>
            <p class="card-title-desc">
              Toggle between multiple modals with some clever placement of the <code
                >data-bs-target</code
              >
              and <code>data-bs-toggle</code> attributes.
            </p>

            <div>
              <button
                type="button"
                class="btn btn-primary waves-effect waves-light"
                on:click={tog_firstmodal}>Open First Modal</button
              >

              <Modal isOpen={modal_firstmodal} toggle={tog_firstmodal}>
                <div class="modal-header">
                  <h5 class="modal-title">Modal 1</h5>
                </div>
                <div class="modal-body">
                  <p>
                    Show a second modal and hide this one with the button below.
                  </p>
                </div>
                <div class="modal-footer">
                  <!-- Toogle to second dialog -->
                  <button
                    class="btn btn-primary"
                    on:click={tog_secondmodal}>Open Second Modal</button
                  >
                </div>
              </Modal>

              <Modal isOpen={modal_secondmodal} toggle={tog_secondmodal}>
                <div class="modal-header">
                  <h5 class="modal-title">Modal 2</h5>
                </div>
                <div class="modal-body">
                  <p>
                    Hide this modal and show the first with the button below.
                  </p>
                </div>
                <div class="modal-footer">
                  <!-- Toogle to first dialog, `data-bs-dismiss` attribute can be omitted - clicking on link will close dialog anyway -->
                  <button
                    class="btn btn-primary" on:click={tog_firstmodal}>Back to First</button
                  >
                </div>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Varying Modal Content</CardTitle>
            <p class="card-title-desc">Modal of buttons that all trigger the same modal with slightly different contents. Use <code>event.relatedTarget</code> and HTML <code>data-bs-target</code> attributes to vary the contents of the modal depending on which button was clicked.</p>

            <div>
              <div class="d-flex flex-wrap gap-3">
                <button
                  type="button"
                  class="btn btn-primary"
                  on:click={() => {
                    tog_varyingModal();
                    modal_1 = "@mdo"
                  }}
                >
                  Open modal for @mdo
                </button>
                <button 
                type="button" 
                class="btn btn-primary"
                on:click={() => {
                    tog_varyingModal();
                    modal_1 = "@fat"
                  }}
                >
                Open modal for @fat
                </button>
                <button 
                type="button" 
                class="btn btn-primary"
                on:click={() => {
                    tog_varyingModal();
                    modal_1 = "@getbootstrap"
                  }}
                >
                Open modal for @getbootstrap
                </button>
              </div>

              <Modal
                isOpen={varyingModal}
                toggle={() => {
                  tog_varyingModal()
                }}
              >
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">New message {modal_1}</h5>
                  <button type="button"
                    on:click={() => {
                      varyingModal = false;
                    }} class="btn-close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <Label htmlfor="recipient-name" class="col-form-label">Recipient:</Label>
                      <input type="text" class="form-control" id="recipient-name" defaultValue={modal_1}/>
                    </div>
                    <div class="mb-3">
                      <Label htmlfor="message-text" class="col-form-label">Message:</Label>
                      <textarea class="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Send message</button>
                </div>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
