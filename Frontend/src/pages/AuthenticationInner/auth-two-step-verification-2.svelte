<script>
  import { Link } from "svelte-routing";
  import {
    Card,
    CardBody,
    Col,
    Container,
    Form,
    FormGroup,
    Row,
  } from "sveltestrap";
  import CarouselPage from "./CarouselPage.svelte";
  let count = 2;

  const handleKeyup = () => {
    event.preventDefault();

    document.getElementById("digit" + count + "-input").focus();

    count = count + 1;
  };
</script>

<div>
  <div class="container-fluid p-0">
    <div class="row g-0">
      <CarouselPage />

      <Col xl={3}>
        <div class="auth-full-page-content p-md-5 p-4">
          <div class="w-100">
            <div class="d-flex flex-column h-100">
              <div class="mb-4 mb-md-5">
                <Link to="dashboard" class="d-block auth-logo">
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
                      Please enter the 4 digit code sent to{" "}
                      <span class="fw-semibold">
                        example@abc.com
                      </span>
                    </p>

                    <Form>
                      <Row>
                        <div class="col-3">
                          <div class="mb-3">
                            <label for="digit1-input" class="visually-hidden"
                              >Dight 1</label
                            >
                            <input
                              type="text"
                              class="form-control form-control-lg text-center"
                              on:keyup|preventDefault={handleKeyup}
                              maxLength="1"
                              id="digit1-input"
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <label for="digit2-input" class="visually-hidden"
                              >Dight 2</label
                            >
                            <input
                              type="text"
                              class="form-control form-control-lg text-center"
                              on:keyup|preventDefault={handleKeyup}
                              maxLength="1"
                              id="digit2-input"
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <label for="digit3-input" class="visually-hidden"
                              >Dight 3</label
                            >
                            <input
                              type="text"
                              class="form-control form-control-lg text-center"
                              on:keyup|preventDefault={handleKeyup}
                              maxLength="1"
                              id="digit3-input"
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <label for="digit4-input" class="visually-hidden"
                              >Dight 4</label
                            >
                            <input
                              type="text"
                              class="form-control form-control-lg text-center"
                              maxLength="1"
                              id="digit4-input"
                            />
                          </div>
                        </div>
                      </Row>
                    </Form>

                    <div class="mt-4">
                      <Link to="dashboard" class="btn btn-success w-md">
                        Confirm
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
    </div>
  </div>
</div>
