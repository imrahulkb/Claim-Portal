<script>
  import { Link } from "svelte-routing";
  import {
    Row,
    Col,
    CardBody,
    Card,
    Container,
    Form,
    Label,
    Input,
    Button,
  } from "sveltestrap";
</script>

<div class="account-pages my-5 pt-sm-5">
  <Container>
    <Row class="justify-content-center">
      <Col md={8} lg={8} xl={5}>
        <Card class="overflow-hidden">
          <div class="bg-primary bg-soft">
            <Row>
              <Col class="col-7">
                <div class="text-primary p-4">
                  <h5 class="text-primary">Free Register</h5>
                  <p>Get your free Skote account now.</p>
                </div>
              </Col>
              <Col class="col-5 align-self-end">
                <img
                  src="assets/images/profile-img.png"
                  alt=""
                  class="img-fluid"
                />
              </Col>
            </Row>
          </div>
          <CardBody class="pt-0">
            <div>
              <Link to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title rounded-circle bg-light">
                    <img
                      src="assets/images/logo.svg"
                      alt=""
                      class="rounded-circle"
                      height="34"
                    />
                  </span>
                </div>
              </Link>
            </div>
            <div class="p-2">
              <Form class="needs-validation" novalidate action="/">
                <div class="mb-3">
                  <Label for="useremail" class="form-label">Email</Label>
                  <Input
                    type="email"
                    class="form-control"
                    id="useremail"
                    placeholder="Enter email"
                    required
                  />
                  <div class="invalid-feedback">Please Enter Email</div>
                </div>

                <div class="mb-3">
                  <Label for="username" class="form-label">Username</Label>
                  <Input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter username"
                    required
                  />
                  <div class="invalid-feedback">Please Enter Username</div>
                </div>

                <div class="mb-3">
                  <Label for="userpassword" class="form-label">Password</Label>
                  <Input
                    type="password"
                    class="form-control"
                    id="userpassword"
                    placeholder="Enter password"
                    required
                  />
                  <div class="invalid-feedback">Please Enter Password</div>
                </div>

                <div class="mt-4 d-grid">
                  <Button
                    color="primary"
                    class="waves-effect waves-light"
                    type="submit">Register</Button
                  >
                </div>

                <div class="mt-4 text-center">
                  <h5 class="font-size-14 mb-3">Sign up using</h5>

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

                <div class="mt-4 text-center">
                  <p class="mb-0">
                    By registering you agree to the Skote <Link
                      to={"#"}
                      class="text-primary">Terms of Use</Link
                    >
                  </p>
                </div>
              </Form>
            </div>
          </CardBody>
        </Card>
        <div class="mt-5 text-center">
          <p>
            Already have an account ?
            <Link to="/auth-login" class="fw-medium text-primary">Login</Link>
          </p>
          <p>
            © {new Date().getFullYear()} Skote. Crafted with
            <i class="mdi mdi-heart text-danger" /> by Themesbrand
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</div>
