<script>
  import { Link } from "svelte-routing";
  import { Col, Container, Row, Form, Label, Input, Button } from "sveltestrap";
  import CarouselPage from "./CarouselPage.svelte";
</script>

<div>
  <Container fluid class="p-0">
    <Row class="g-0">
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
                <div>
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p class="text-muted">Sign in to continue to Skote.</p>
                </div>

                <div class="mt-4">
                  <Form>
                    <div class="mb-3">
                      <label for="username" class="form-label">Username</label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <a href="auth-recoverpw-2" class="text-muted"
                          >Forgot password?</a
                        >
                      </div>
                      <Label class="form-label" for="user-password"
                        >Password</Label
                      >
                      <div class="input-group auth-pass-inputgroup">
                        <Input
                          type="password"
                          id="user-password"
                          class="form-control"
                          placeholder="Enter password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                        />
                        <Button color="light" type="button" id="password-addon"
                          ><i class="mdi mdi-eye-outline" /></Button
                        >
                      </div>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="remember-check"
                      />
                      <Label class="form-check-label" for="remember-check">
                        Remember me
                      </Label>
                    </div>

                    <div class="mt-3 d-grid">
                      <Button
                        color="primary"
                        class="waves-effect waves-light"
                        type="submit">Log In</Button
                      >
                    </div>

                    <div class="mt-4 text-center">
                      <h5 class="font-size-14 mb-3">Sign in with</h5>

                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <Link
                            to={"#"}
                            class="social-list-item bg-primary text-white border-primary"
                          >
                            <i class="mdi mdi-facebook" />
                          </Link>
                        </li>
                        <li class="list-inline-item">
                          <Link
                            to={"#"}
                            class="social-list-item bg-info text-white border-info"
                          >
                            <i class="mdi mdi-twitter" />
                          </Link>
                        </li>
                        <li class="list-inline-item">
                          <Link
                            to={"#"}
                            class="social-list-item bg-danger text-white border-danger"
                          >
                            <i class="mdi mdi-google" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Form>
                  <div class="mt-5 text-center">
                    <p>
                      Don&apos;t have an account ? <a
                        href="auth-register-2"
                        class="fw-medium text-primary"
                      >
                        Signup now
                      </a>
                    </p>
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
