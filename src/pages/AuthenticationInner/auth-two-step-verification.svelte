<script>
    import { Link } from "svelte-routing";
    import {   Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Row, } from "sveltestrap";
    import CarouselPage from "./CarouselPage.svelte";
    let count = 2

const handleKeyup = () => {

  event.preventDefault()

        document.getElementById("digit"+count+"-input").focus();

        count = count + 1;

}
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
                      <i class="bx bxs-envelope h1 mb-0 text-primary"></i>
                    </div>
                  </div>
                  <div class="p-2 mt-4">
                    <h4>Verify your email</h4>
                    <p class="mb-5">
                      Please enter the 4 digit code sent to{" "}
                      <span class="fw-semibold">
                        example@abc.com
                      </span>
                    </p>

                    <Form>
                      <Row>
                          <div class="col-3">
                              <div class="mb-3">
                                  <label for="digit1-input" class="visually-hidden">Dight 1</label>
                                  <input type="text"
                                      class="form-control form-control-lg text-center"
                                      on:keyup|preventDefault={handleKeyup} maxLength="1"
                                      id="digit1-input" />
                              </div>
                          </div>

                          <div class="col-3">
                              <div class="mb-3">
                                  <label for="digit2-input" class="visually-hidden">Dight 2</label>
                                  <input type="text"
                                      class="form-control form-control-lg text-center"
                                      on:keyup|preventDefault={handleKeyup}
                                      maxLength="1"
                                      id="digit2-input" />
                              </div>
                          </div>

                          <div class="col-3">
                              <div class="mb-3">
                                  <label for="digit3-input" class="visually-hidden">Dight 3</label>
                                  <input type="text"
                                      class="form-control form-control-lg text-center"
                                      on:keyup|preventDefault={handleKeyup}
                                      maxLength="1"
                                      id="digit3-input" />
                              </div>
                          </div>

                          <div class="col-3">
                              <div class="mb-3">
                                  <label for="digit4-input" class="visually-hidden">Dight 4</label>
                                  <input type="text"
                                      class="form-control form-control-lg text-center"
                                      maxLength="1"
                                      id="digit4-input" />
                              </div>
                          </div>
                      </Row>
                  </Form>

                    <div class="mt-4">
                      <Link
                        to="/dashboard"
                        class="btn btn-success w-md"
                      >
                        Confirm
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <div class="mt-5 text-center">
            <p>
              Did&apos;t receive a code ?{" "}
              <Link to="#" class="fw-medium text-primary">
                {" "}
                Resend{" "}
              </Link>{" "}
            </p>
            <p>
              © {new Date().getFullYear()} Skote. Crafted with{" "}
              <i class="mdi mdi-heart text-danger"></i> by Themesbrand
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>