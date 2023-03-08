<script>
  import { Link } from "svelte-routing";
  import { Col, Container, Row } from "sveltestrap";
  import CarouselPage from "./CarouselPage.svelte";
</script>

<div>
  <Container fluid class="p-0">
    <Row class="g-0">
      <CarouselPage />

      <Col cl={3}>
        <div class="auth-full-page-content p-md-5 p-4">
          <div class="w-100">
            <div class="d-flex flex-column h-100">
              <div class="mb-4 mb-md-5">
                <Link to={"/"} class="d-block auth-logo">
                  <img
                    src="assets/images/logo-dark.png"
                    alt=""
                    height="18"
                    class="auth-logo-dark"
                  />
                  <img
                    src="assets/images/logo-light.png"
                    alt=""
                    height="18"
                    class="auth-logo-light"
                  />
                </Link>
              </div>
              <div class="my-auto">
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
                      <span class="fw-semibold">
                        example@abc.com
                      </span>
                      , Please check it
                    </p>
                    <div class="mt-4">
                      <Link to={"/"} class="btn btn-success w-md">
                        Verify email
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 mt-md-5 text-center">
                <p class="mb-0">
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i class="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>