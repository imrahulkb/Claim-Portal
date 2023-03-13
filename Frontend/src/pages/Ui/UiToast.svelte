<script>
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
    Toast,
    ToastBody,
    ToastHeader,
  } from "sveltestrap";

  let isOpen = false;


</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="Toast" />
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Live Example</h5>
            <p class="card-title-des">
              Click the button below to show a toast (positioned with our
              utilities in the lower right corner) that has been hidden by
              default.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <div>
                <button
                  type="button"
                  id="liveToastBtn"
                  class="btn btn-primary"
                  on:click={() => (isOpen = true)}
                  disabled={isOpen}>Show live toast</button
                >
                <div class="position-fixed top-0 end-0 p-3" style="z-index:1005">
                  <Toast
                    {isOpen}
                    on:close={() => (isOpen = false)}
                  >
                    <ToastHeader>
                      <strong class="me-auto">
                        <img
                          src="assets/images/logo.svg"
                          alt=""
                          class="me-2"
                          height="18"
                        />Sveltestrap</strong
                      >
                    </ToastHeader>
                    <ToastBody>Hello, world! This is a toast message.</ToastBody>
                  </Toast>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <h5 class="card-title">Basic Toast with Background</h5>

            <p class="card-title-des">
              Push notifications to your visitors with a Toast, a lightweight
              and easily customizable alert message.
            </p>

            <div class="p-3 bg-primary mb-3">
              <Toast class="me-1">
                <ToastHeader>Sveltestrap</ToastHeader>
                <ToastBody>
                  This is a toast on a primary background — check it out!
                </ToastBody>
              </Toast>
            </div>

            <div class="p-3 bg-secondary mb-3">
              <Toast class="me-1">
                <ToastHeader>Sveltestrap</ToastHeader>
                <ToastBody>
                  This is a toast on a secondary background — check it out!
                </ToastBody>
              </Toast>
            </div>

            <div class="p-3 bg-success mb-3">
              <Toast class="me-1">
                <ToastHeader>Sveltestrap</ToastHeader>
                <ToastBody>
                  This is a toast on a success background — check it out!
                </ToastBody>
              </Toast>
            </div>

            <div class="p-3 bg-danger mb-3">
              <Toast class="me-1">
                <ToastHeader>Sveltestrap</ToastHeader>
                <ToastBody>
                  This is a toast on a danger background — check it out!
                </ToastBody>
              </Toast>
            </div>

            <div class="p-3 bg-warning mb-3">
              <Toast class="me-1">
                <ToastHeader>Sveltestrap</ToastHeader>
                <ToastBody>
                  This is a toast on a warning background — check it out!
                </ToastBody>
              </Toast>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <h5 class="card-title">Toast Header Icon</h5>
            <p class="card-title-des">
              Push notifications to your visitors with a Toast, a lightweight
              and easily customizable alert message.
            </p>
            <div class="p-3 mb-3">
              <Toast class="me-1">
                <ToastHeader icon="primary">primary</ToastHeader>
                <ToastBody>This is a toast with a primary icon.</ToastBody>
              </Toast>
            </div>

            <div class="p-3 mb-3">
              <Toast class="me-1">
                <ToastHeader icon="secondary">secondary</ToastHeader>
                <ToastBody>This is a toast with a secondary icon.</ToastBody>
              </Toast>
            </div>

            <div class="p-3 mb-3">
              <Toast class="me-1">
                <ToastHeader icon="success">success</ToastHeader>
                <ToastBody>This is a toast with a success icon.</ToastBody>
              </Toast>
            </div>

            <div class="p-3 mb-3">
              <Toast class="me-1">
                <ToastHeader icon="danger">danger</ToastHeader>
                <ToastBody>This is a toast with a danger icon.</ToastBody>
              </Toast>
            </div>

            <div class="p-3 mb-3">
              <Toast class="me-1">
                <ToastHeader icon="warning">warning</ToastHeader>
                <ToastBody>This is a toast with a warning icon.</ToastBody>
              </Toast>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
