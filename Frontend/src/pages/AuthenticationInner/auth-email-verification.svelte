<script>
  import { Link } from "svelte-routing";
  import { Card, CardBody, Col, Container, Row } from "sveltestrap";
</script>

<div class="account-pages my-5 pt-sm-5">
  <Container>
    <Row>
      <Col lg={12}>
        <div class="text-center mb-5 text-muted">
          <Link to="dashboard" class="d-block auth-logo">
            <img
              src="assets/images/logo-dark.png"
              alt=""
              height="20"
              class="auth-logo-dark mx-auto"
            />
            <img
              src="assets/images/logo-light.png"
              alt=""
              height="20"
              class="auth-logo-light mx-auto"
            />
          </Link>
          <p class="mt-3">React Admin & Dashboard Template</p>
        </div>
      </Col>
    </Row>
    <Row class="justify-content-center">
      <Col md={8} lg={6} xl={5}>
        <Card>
          <CardBody>
            <div class="p-2">
              <div class="text-center">
                <div class="avatar-md mx-auto">
                  <div class="avatar-title rounded-circle bg-light">
                    <i class="bx bxs-envelope h1 mb-0 text-primary" />
                  </div>
                </div>
                <div class="p-2 mt-4">
                  <h4>Verify your email</h4>
                  <p>
                    We have sent you verification email{" "}
                    <span class="fw-semibold"> example@abc.com </span>
                    , Please check it
                  </p>
                  <div class="mt-4">
                    <a href="/" class="btn btn-success w-md"> Verify email </a>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <div class="mt-5 text-center">
          <p>
            Didn&apos;t receive an email ?{" "}
            <Link to={"#"} class="fw-medium text-primary">
              {" "}
              Resend{" "}
            </Link>{" "}
          </p>
          <p>
            © {new Date().getFullYear()} Skote. Crafted with{" "}
            <i class="mdi mdi-heart text-danger" /> by Themesbrand
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</div>