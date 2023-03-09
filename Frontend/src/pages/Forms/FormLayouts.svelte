<script>
  import {
    Card,
    Col,
    Container,
    Row,
    CardBody,
    CardTitle,
    FormGroup,
    Label,
    Button,
    Form,
    Input,
    InputGroupText,
    InputGroup,
  } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="Forms" breadcrumbItem="Form Layouts" />
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4 mb-4">Form Grid Layout</CardTitle>

            <Form>
              <FormGroup class="mb-3">
                <Label for="formrow-firstname-Input">First name</Label>
                <Input
                  type="text"
                  class="form-control"
                  id="formrow-firstname-Input"
                />
              </FormGroup>

              <Row>
                <Col md={6}>
                  <FormGroup class="mb-3">
                    <Label for="formrow-email-Input">Email</Label>
                    <Input
                      type="email"
                      class="form-control"
                      id="formrow-email-Input"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup class="mb-3">
                    <Label for="formrow-password-Input">Password</Label>
                    <Input
                      type="password"
                      class="form-control"
                      id="formrow-password-Input"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col lg={4}>
                  <FormGroup class="mb-3">
                    <Label for="formrow-InputCity">City</Label>
                    <Input
                      type="text"
                      class="form-control"
                      id="formrow-InputCity"
                    />
                  </FormGroup>
                </Col>
                <Col lg={4}>
                  <FormGroup class="mb-3">
                    <Label for="formrow-InputState">State</Label>
                    <Input
                      id="formrow-InputState"
                      class="form-control"
                      type="select"
                    >
                      <option>Choose...</option>
                      <option>...</option>
                    </Input>
                  </FormGroup>
                </Col>

                <Col lg={4}>
                  <FormGroup class="mb-3">
                    <Label for="formrow-InputZip">Zip</Label>
                    <Input
                      type="text"
                      class="form-control"
                      id="formrow-InputZip"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup class="mb-3">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="formrow-customCheck"
                  />
                  <Label class="form-check-label" for="formrow-customCheck"
                    >{" "}
                    Check me out
                  </Label>
                </div>
              </FormGroup>
              <div>
                <button type="submit" class="btn btn-primary w-md">
                  Submit
                </button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4 mb-4">Horizontal Form layout</CardTitle>

            <Form>
              <FormGroup class="row mb-4">
                <Label
                  for="horizontal-firstname-Input"
                  class="col-sm-3 col-form-label"
                >
                  First name
                </Label>
                <Col sm={9}>
                  <Input
                    type="text"
                    class="form-control"
                    id="horizontal-firstname-Input"
                  />
                </Col>
              </FormGroup>
              <FormGroup class="row mb-4">
                <Label
                  for="horizontal-email-Input"
                  class="col-sm-3 col-form-label"
                >
                  Email
                </Label>
                <Col sm={9}>
                  <Input
                    type="email"
                    class="form-control"
                    id="horizontal-email-Input"
                  />
                </Col>
              </FormGroup>
              <FormGroup class="row mb-4">
                <Label
                  for="horizontal-password-Input"
                  class="col-sm-3 col-form-label"
                >
                  Password
                </Label>
                <Col sm={9}>
                  <Input
                    type="password"
                    class="form-control"
                    id="horizontal-password-Input"
                  />
                </Col>
              </FormGroup>

              <Row class="justify-content-end">
                <Col sm={9}>
                  <div class="form-check mb-4">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="horizontal-customCheck"
                    />
                    <Label
                      class="form-check-label"
                      for="horizontal-customCheck"
                    >
                      Remember me
                    </Label>
                  </div>

                  <div>
                    <Button type="submit" color="primary" class="w-md">
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4 mb-4">Auto Sizing</CardTitle>

            <Form class="row gy-2 gx-3 align-items-center">
              <div class="col-sm-auto">
                <Label class="visually-hidden" for="autoSizingInput">Name</Label
                >
                <Input
                  type="text"
                  class="form-control"
                  id="autoSizingInput"
                  placeholder="Jane Doe"
                />
              </div>
              <div class="col-sm-auto">
                <Label class="visually-hidden" for="autoSizingInputGroup">Username</Label
                >
                <InputGroup>
                 
                    <InputGroupText>@</InputGroupText>
                  
                  <Input
                    type="text"
                    placeholder="Username"
                  />
                </InputGroup>
              </div>
              <div class="col-sm-auto">
                <Label class="visually-hidden" for="autoSizingSelect"
                  >Preference</Label
                >
                <Input type="select" class="form-select" id="autoSizingSelect">
                  <option defaultValue>Choose...</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </Input>
              </div>
              <div class="col-sm-auto">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <Label class="form-check-label" for="autoSizingCheck">
                    Remember me
                  </Label>
                </div>
              </div>
              <div class="col-sm-auto">
                <Button type="submit" color="primary" class="w-md"
                  >Submit</Button
                >
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <CardTitle class="h5 mb-4">Inline forms</CardTitle>
            <Form class="row row-cols-lg-auto g-3 align-items-center">
              <div class="col-12">
                <Label
                  class="visually-hidden"
                  for="inlineFormInputGroupUsername">Username</Label
                >
                <InputGroup>
                  
                    <InputGroupText>@</InputGroupText>
                  
                  <Input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </InputGroup>
              </div>

              <div class="col-12">
                <Label class="visually-hidden" for="inlineFormSelectPref"
                  >Preference</Label
                >
                <Input
                  type="select"
                  class="form-select"
                  id="inlineFormSelectPref"
                >
                  <option defaultValue>Choose...</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </Input>
              </div>

              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineFormCheck"
                  />
                  <Label class="form-check-label" for="inlineFormCheck">
                    Remember me</Label
                  >
                </div>
              </div>

              <div class="col-12">
                <Button type="submit" color="primary" class="w-md"
                  >Submit</Button
                >
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl="6">
        <Card>
          <CardBody>
            <CardTitle class="h5">Floating labels</CardTitle>
            <p class="card-title-desc">
              Create beautifully simple form labels that float over your input
              fields.
            </p>
            <Form>
              <div class="form-floating mb-3">
                <Input
                  type="text"
                  class="form-control"
                  id="floatingnameInput"
                  placeholder="Enter Name"
                />
                <Label for="floatingnameInput">Name</Label>
              </div>
              <Row>
                <Col mg={6}>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingemailInput"
                      placeholder="Enter Email address"
                    />
                    <Label for="floatingemailInput">Email address</Label>
                  </div>
                </Col>
                <Col mg={6}>
                  <div class="form-floating mb-3">
                    <Input
                      type="select"
                      class="form-select"
                      id="floatingSelectGrid"
                      aria-label="Floating label select example"
                    >
                      <option defaultValue>Open this select menu</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                    </Input>
                    <Label for="floatingSelectGrid">Works with selects</Label>
                  </div>
                </Col>
              </Row>

              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="floatingCheck"
                  />
                  <Label class="form-check-label" for="floatingCheck">
                    Check me out</Label
                  >
                </div>
              </div>
              <div>
                <Button type="submit" color="primary" class="w-md">Submit</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
            <CardBody>
                <h5 class="card-title mb-4">Inline Forms With Hstack</h5>
                <div class="hstack gap-3">
                    <input class="form-control me-auto" type="text" placeholder="Add your item here..."
                        aria-label="Add your item here...">
                    <button type="button" class="btn btn-secondary">Submit</button>
                    <div class="vr"></div>
                    <button type="button" class="btn btn-outline-danger">Reset</button>
                </div>
            </CardBody>
            <!-- end card body -->
        </Card>
        <!-- end card -->
    </Col>
    </Row>
  </Container>
</div>