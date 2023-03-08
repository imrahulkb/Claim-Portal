<script>
  import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
  } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";

  let idIncrement = 1;
  let idIncrement1 = 1;

  var storeFE = [
    // other items can go here
  ];

  function handleAddFields() {
    var l = storeFE.length; // get our current items list count
    storeFE[l] = {
      id: idIncrement,
      name: "admin",
      email: "admin@gmail.com",
      subject: "Test",
      resume: "demo",
      message: "testing",
    };

    idIncrement++; // increment our id to add additional items
  }

  function handleRemoveFields(id) {
    storeFE = storeFE.filter(function (value, index, arr) {
      if (value.id != id) return value;
    });
  }

  var storeFE1 = [
    // other items can go here
  ];

  function handleAddRowNested() {
    var l = storeFE1.length; // get our current items list count
    storeFE1[l] = {
      id: idIncrement1,
      phoneno: "9856754858",
    };

    idIncrement1++; // increment our id to add additional items
  }

  function handleremoveRowNested(id) {
    storeFE1 = storeFE1.filter(function (value, index, arr) {
      if (value.id != id) return value;
    });
  }
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="Forms" breadcrumbItem="Form Repeater" />

    <Row>
      <Col xs="12">
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Example</CardTitle>
            <table style="width: 100%">
              <tbody>
                <tr id="addr01" key="">
                  <td>
                    <Form class="repeater">
                      <div>
                        <Row>
                          <Col lg="2" class="mb-3">
                            <Label for="name">Name</Label>
                            <Input
                              type="text"
                              id="name"
                              name="untyped-input"
                              class="form-control"
                              placeholder="Enter Your Name"
                            />
                          </Col>

                          <Col lg="2" class="mb-3">
                            <Label for="email">Email</Label>
                            <Input
                              type="email"
                              id="email"
                              class="form-control"
                              placeholder="Enter Your Email ID"
                            />
                          </Col>

                          <Col lg="2" class="mb-3">
                            <Label for="subject">Subject</Label>
                            <Input
                              type="text"
                              id="subject"
                              class="form-control"
                              placeholder="Enter Your Subject"
                            />
                          </Col>

                          <Col lg="2" class="mb-3">
                            <Label for="resume">Resume</Label>
                            <Input
                              type="file"
                              id="resume"
                              class="form-control"
                            />
                          </Col>

                          <Col lg="2" class="mb-3">
                            <Label for="message">Message</Label>
                            <Input
                              type="textarea"
                              id="message"
                              placeholder="Enter Your Message"
                            />
                          </Col>
                          <Col lg="2" class="align-self-center">
                            <div class="d-grid">
                              <Button color="primary" style="width: 100%" block>
                                {" "}
                                Delete
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </td>
                </tr>

                {#each storeFE as field}
                  <tr>
                    <td>
                      <Form class="repeater mt-3" encType="multipart/form-data">
                        <div>
                          <Row>
                            <Col lg="2" class="mb-3">
                              <Label for="name">Name</Label>
                              <Input
                                type="text"
                                name="untyped-input"
                                defaultValue={field.name}
                                placeholder="Enter Your Name"
                              />
                            </Col>

                            <Col lg="2" class="mb-3">
                              <Label for="email">Email</Label>
                              <Input
                                type="email"
                                placeholder="Enter Your Email ID"
                                defaultValue={field.email}
                              />
                            </Col>

                            <Col lg="2" class="mb-3">
                              <Label for="subject">Subject</Label>
                              <Input
                                type="text"
                                placeholder="Enter Your Subject"
                                defaultValue={field.subject}
                              />
                            </Col>

                            <Col lg="2" class="mb-3">
                              <Label for="resume">Resume</Label>
                              <Input
                                type="file"
                                class="form-control"
                                defaultValue={field.resume}
                              />
                            </Col>

                            <Col lg="2" class="mb-3">
                              <Label for="message">Message</Label>
                              <Input
                                type="textarea"
                                placeholder="Enter Your Message"
                                defaultValue={field.message}
                              />
                            </Col>
                            <Col lg="2" class="form-group align-self-center">
                              <Button
                                on:click={handleRemoveFields(field.id)}
                                color="primary"
                                class="mt-3"
                                style="width: 100%"
                              >
                                Delete
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </Form>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
            <Button
              on:click={handleAddFields}
              color="success"
              class="mt-3 mt-lg-0"
            >
              Add{" "}
            </Button>{" "}
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Nested</CardTitle>
            
              <div data-repeater-list="outer-group" class="outer">
                <div data-repeater-item class="outer">
                  <div class="mb-3">
                    <Label for="formname">Name :</Label>
                    <Input
                      type="text"
                      id="formname"
                      placeholder="Enter your Name..."
                      class="form-control"
                    />
                  </div>

                  <div class="mb-3">
                    <Label for="formemail">Email :</Label>
                    <Input
                      type="email"
                      id="formemail"
                      placeholder="Enter your Email..."
                      class="form-control"
                    />
                  </div>

                  <div class="inner-repeater mb-4">
                    <Label>Phone no :</Label>
                    <table style="width: 100%">
                      <tbody>
                        <tr id="addrMain">
                          <td>
                            <Row class="inner mb-3 ">
                              <Col md="10" class="col-8">
                                <Input
                                  type="text"
                                  class="inner form-control"
                                  placeholder="Enter your phone no... 1"
                                />
                              </Col>
                              <Col md="2" class="col-4">
                                <Button
                                  disabled
                                  color="primary"
                                  class="btn-block inner"
                                  style="width: 100%"
                                >
                                  {" "}
                                  Delete
                                </Button>
                              </Col>
                            </Row>
                          </td>
                        </tr>

                        {#each storeFE1 as field}
                          <tr>
                            <td>
                              <Row class="inner mb-3">
                                <Col md="10" class="col-8">
                                  <Input
                                    type="text"
                                    class="inner form-control"
                                    name="phoneno"
                                    placeholder={"Enter your phone no... "}
                                  />
                                </Col>
                                <Col md="2" class="col-4">
                                  <Button
                                    on:click={handleremoveRowNested(field.id)}
                                    color="primary"
                                    class="btn-block inner"
                                    style="width: 100%"
                                  >
                                    {" "}
                                    Delete
                                  </Button>
                                </Col>
                              </Row>
                            </td>
                          </tr>
                        {/each}
                      </tbody>
                    </table>

                    <Button on:click={handleAddRowNested} color="success">
                      Add Number
                    </Button>
                  </div>

                  <FormGroup class="mb-3">
                    <Label class="d-block mb-3">Gender :</Label>
                    <div class="form-check form-check-inline">
                      <input
                        type="radio"
                        id="customRadioInline1"
                        name="customRadioInline1"
                        class="form-check-input"
                      />
                      <Label
                        class="form-check-label"
                        for="customRadioInline1"
                      >
                        Male
                      </Label>
                    </div>
                    &nbsp;
                    <div class="form-check form-check-inline">
                      <input
                        type="radio"
                        id="customRadioInline2"
                        name="customRadioInline1"
                        class="form-check-input"
                      />
                      <Label
                        class="form-check-label"
                        for="customRadioInline2"
                      >
                        Female
                      </Label>
                    </div>
                  </FormGroup>

                  <FormGroup class="mb-3">
                    <Label for="formmessage">Message :</Label>
                    <Input
                      type="textarea"
                      id="formmessage"
                      class="form-control"
                      rows="3"
                      placeholder="Enter your Message"
                    />
                  </FormGroup>
                  <Button type="submit" color="primary">Submit</Button>
                </div>
              </div>
            
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>