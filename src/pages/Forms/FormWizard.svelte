<script>
  import { Link } from "svelte-routing";

  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Modal,
    ModalBody,
    TabContent,
    TabPane,
    NavItem,
    NavLink,
    Label,
    Button,
    Input,
    Form,
    FormGroup,
  } from "sveltestrap";

  import Breadcrumb from "../../common/Breadcrumb.svelte";

  let activeTab = 1;
  let activeVerticalTab = 1;

  function toggleTab(tab) {
    activeTab = tab;
  }

  function toggleVerticalTab(tab) {
    activeVerticalTab = tab;
  }
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="Forms" breadcrumbItem="Form Wizard" />

    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <h4 class="card-title mb-4">Basic Wizard</h4>
            <div id="kyc-verify-wizard" class="wizard clearfix">
              <div class="steps clearfix">
                <ul>
                  <NavItem>
                    <NavLink
                      on:click={() => (activeTab = 1)}
                      active={activeTab == 1}
                    >
                      <span class="number">1.</span>
                      Seller Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      on:click={() => (activeTab = 2)}
                      active={activeTab == 2}
                    >
                      <span class="number">2.</span>
                      Company Document
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      on:click={() => (activeTab = 3)}
                      active={activeTab == 3}
                    >
                      <span class="number">3.</span>
                      Bank Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      on:click={() => (activeTab = 4)}
                      active={activeTab == 4}
                    >
                      <span class="number">4.</span>
                      Confirm Detail
                    </NavLink>
                  </NavItem>
                </ul>
              </div>
              <div class="content clearfix">
                <TabContent class="twitter-bs-wizard-tab-content">
                  <TabPane
                    tabId={1}
                    id="personal-info"
                    class={activeTab == 1 ? "active" : ""}
                  >
                    <Form>
                      <Row>
                        <Col lg="6">
                          <div class="mb-3">
                            <Label for="basicpill-firstname-input1"
                              >First name</Label
                            >
                            <Input
                              type="text"
                              class="form-control"
                              id="basicpill-firstname-input1"
                              placeholder="Enter Your First Name"
                            />
                          </div>
                        </Col>
                        <Col lg="6">
                          <div class="mb-3">
                            <Label for="basicpill-lastname-input2"
                              >Last name</Label
                            >
                            <Input
                              type="text"
                              class="form-control"
                              id="basicpill-lastname-input2"
                              placeholder="Enter Your Last Name"
                            />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="6">
                          <div class="mb-3">
                            <Label for="basicpill-phoneno-input3">Phone</Label>
                            <Input
                              type="text"
                              class="form-control"
                              id="basicpill-phoneno-input3"
                              placeholder="Enter Your Phone No."
                            />
                          </div>
                        </Col>
                        <Col lg="6">
                          <div class="mb-3">
                            <Label for="basicpill-email-input4">Email</Label>
                            <Input
                              type="email"
                              class="form-control"
                              id="basicpill-email-input4"
                              placeholder="Enter Your Email ID"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <div class="mb-3">
                            <Label for="basicpill-address-input1">Address</Label
                            >
                            <textarea
                              id="basicpill-address-input1"
                              class="form-control"
                              rows="2"
                              placeholder="Enter Your Address"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </TabPane>
                  <TabPane
                    tabId={2}
                    id="confirm-email"
                    class={activeTab == 2 ? "active" : ""}
                  >
                    <div>
                      <Form>
                        <Row>
                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-pancard-input5"
                                >PAN Card</Label
                              >
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-pancard-input5"
                                placeholder="Enter Your PAN No."
                              />
                            </div>
                          </Col>

                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-vatno-input6"
                                >VAT/TIN No.</Label
                              >
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-vatno-input6"
                                placeholder="Enter Your VAT/TIN No."
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-cstno-input7">CST No.</Label
                              >
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-cstno-input7"
                                placeholder="Enter Your CST No."
                              />
                            </div>
                          </Col>

                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-servicetax-input8">
                                Service Tax No.
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-servicetax-input8"
                                placeholder="Enter Your Service Tax No."
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-companyuin-input9"
                                >Company UIN</Label
                              >
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-companyuin-input9"
                                placeholder="Enter Your Company UIN"
                              />
                            </div>
                          </Col>

                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-declaration-input10"
                                >Declaration</Label
                              >
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-Declaration-input10"
                                placeholder="Declaration Details"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </TabPane>
                  <TabPane
                    tabId={3}
                    id="doc-verification"
                    class={activeTab == 3 ? "active" : ""}
                  >
                    <div>
                      <Form>
                        <Row>
                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-namecard-input11"
                                >Name on Card</Label
                              >
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-namecard-input11"
                                placeholder="Enter Your Name on Card"
                              />
                            </div>
                          </Col>

                          <Col lg="6">
                            <div class="mb-3">
                              <Label>Credit Card Type</Label>
                              <select class="form-select">
                                <option defaultValue> Select Card Type </option>
                                <option value="AE"> American Express </option>
                                <option value="VI">Visa</option>
                                <option value="MC">MasterCard</option>
                                <option value="DI">Discover</option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-cardno-input12">
                                Credit Card Number
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-cardno-input12"
                                placeholder="Credit Card Number"
                              />
                            </div>
                          </Col>

                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-card-verification-input0">
                                Card Verification Number
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-card-verification-input0"
                                placeholder="Credit Verification Number"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <div class="mb-3">
                              <Label for="basicpill-expiration-input13">
                                Expiration Date
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-expiration-input13"
                                placeholder="Card Expiration Date"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </TabPane>
                  <TabPane
                    tabId={4}
                    id="doc-verification"
                    class={activeTab == 4 ? "active" : ""}
                  >
                    <div class="row justify-content-center">
                      <Col lg="6">
                        <div class="text-center">
                          <div class="mb-4">
                            <i
                              class="mdi mdi-check-circle-outline text-success display-4"
                            />
                          </div>
                          <div>
                            <h5>Confirm Detail</h5>
                            <p class="text-muted">
                              If several languages coalesce, the grammar of the
                              resulting
                            </p>
                          </div>
                        </div>
                      </Col>
                    </div>
                  </TabPane>
                </TabContent>
              </div>

              <div class="actions clearfix">
                <ul role="menu" aria-label="Pagination">
                  <li
                    class={activeTab === 1 ? "previous disabled" : "previous"}
                  >
                    <Button
                      color="primary"
                      on:click={() => toggleTab(activeTab - 1)}
                    >
                      Previous
                    </Button>
                  </li>
                  <li class={activeTab === 4 ? "next disabled" : "next"}>
                    <Button
                      color="primary"
                      on:click={() => toggleTab(activeTab + 1)}
                    >
                      Next
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardBody>
            <h4 class="card-title mb-4">Vertical Wizard</h4>
            <div class="vertical-wizard wizard clearfix vertical">
              <div class="steps clearfix">
                <ul>
                  <NavItem class={activeVerticalTab == 1 ? "current" : ""}>
                    <NavLink
                      on:click={() => (activeVerticalTab = 1)}
                      active={activeVerticalTab == 1}
                    >
                      <span class="number">1.</span>{" "}
                      Seller Details
                    </NavLink>
                  </NavItem>
                  <NavItem class={activeVerticalTab == 2 ? "current" : ""}>
                    <NavLink
                      on:click={() => (activeVerticalTab = 2)}
                      active={activeVerticalTab == 2}
                    >
                      <span class="number">2.</span>{" "}
                      <span>Company Document</span>
                    </NavLink>
                  </NavItem>
                  <NavItem class={activeVerticalTab == 3 ? "current" : ""}>
                    <NavLink
                      on:click={() => (activeVerticalTab = 3)}
                      active={activeVerticalTab == 3}
                    >
                      <span class="number">3.</span>{" "}
                      Bank Details
                    </NavLink>
                  </NavItem>
                  <NavItem class={activeVerticalTab == 4 ? "current" : ""}>
                    <NavLink
                      on:click={() => (activeVerticalTab = 4)}
                      active={activeVerticalTab == 4}
                    >
                      <span class="number">4.</span>{" "}
                      Confirm Detail
                    </NavLink>
                  </NavItem>
                </ul>
              </div>
              <div class="content clearfix">
                <TabContent class="twitter-bs-wizard-tab-content">
                  <TabPane
                    tabId={1}
                    class={activeVerticalTab == 1 ? "active" : ""}
                  >
                    <Form>
                      <Row>
                        <Col lg="6">
                          <FormGroup class="mb-3">
                            <Label for="basicpill-firstname-input12">
                              First name
                            </Label>
                            <Input
                              type="text"
                              class="form-control"
                              id="basicpill-firstname-input12"
                              placeholder="Enter Your First Name"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup class="mb-3">
                            <Label for="basicpill-lastname-input22">
                              Last name
                            </Label>
                            <Input
                              type="text"
                              class="form-control"
                              id="basicpill-lastname-input22"
                              placeholder="Enter Your Last Name"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg="6">
                          <FormGroup class="mb-3">
                            <Label for="basicpill-phoneno-input32">
                              Phone
                            </Label>
                            <Input
                              type="text"
                              class="form-control"
                              id="basicpill-phoneno-input32"
                              placeholder="Enter Your Phone No."
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup class="mb-3">
                            <Label for="basicpill-email-input42">
                              Email
                            </Label>
                            <Input
                              type="email"
                              class="form-control"
                              id="basicpill-email-input42"
                              placeholder="Enter Your Email ID"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup class="mb-3">
                            <Label for="basicpill-address-input12">
                              Address
                            </Label>
                            <textarea
                              id="basicpill-address-input12"
                              class="form-control"
                              rows="2"
                              placeholder="Enter Your Address"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </TabPane>
                  <TabPane
                    tabId={2}
                    class={activeVerticalTab == 2 ? "active" : ""}
                  >
                    <div>
                      <Form>
                        <Row>
                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label for="basicpill-pancard-input52">
                                PAN Card
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-pancard-input52"
                                placeholder="Enter Your PAN Card No."
                              />
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label for="basicpill-vatno-input62">
                                VAT/TIN No.
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-vatno-input62"
                                placeholder="Enter Your VAT/TIN No."
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label for="basicpill-cstno-input72">
                                CST No.
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-cstno-input72"
                                placeholder="Enter Your CST No."
                              />
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label for="basicpill-servicetax-input82">
                                Service Tax No.
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-servicetax-input82"
                                placeholder="Enter Your Service Tax No."
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label for="basicpill-companyuin-input92">
                                Company UIN
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-companyuin-input92"
                                placeholder="Company UIN No."
                              />
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label for="basicpill-declaration-input102">
                                Declaration
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-Declaration-input102"
                                placeholder="Declaration Details"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </TabPane>
                  <TabPane
                    tabId={3}
                    class={activeVerticalTab == 3 ? "active" : ""}
                  >
                    <div>
                      <Form>
                        <Row>
                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label for="basicpill-namecard-input112">
                                Name on Card
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-namecard-input112"
                                placeholder="Enter Your Name on Card"
                              />
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label>Credit Card Type</Label>
                              <select class="form-select">
                                <option>Select Card Type</option>
                                <option>American Express</option>
                                <option>Visa</option>
                                <option>MasterCard</option>
                                <option>Discover</option>
                              </select>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label for="basicpill-cardno-input122">
                                Credit Card Number
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-cardno-input122"
                                placeholder="Enter Your Card Number"
                              />
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label
                                for="basicpill-card-verification-input"
                              >
                                Card Verification Number
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-card-verification-input"
                                placeholder="Card Verification Number"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup class="mb-3">
                              <Label for="basicpill-expiration-input132">
                                Expiration Date
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="basicpill-expiration-input132"
                                placeholder="Card Expiration Date"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </TabPane>
                  <TabPane
                    tabId={4}
                    class={activeVerticalTab == 4 ? "active" : ""}
                  >
                    <div class="row justify-content-center">
                      <Col lg="6">
                        <div class="text-center">
                          <div class="mb-4">
                            <i
                              class="mdi mdi-check-circle-outline text-success display-4"
                            />
                          </div>
                          <div>
                            <h5>Confirm Detail</h5>
                            <p class="text-muted">
                              If several languages coalesce, the grammar of the
                              resulting
                            </p>
                          </div>
                        </div>
                      </Col>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
              <div class="actions clearfix">
                <ul role="menu" aria-label="Pagination">
                  <li
                    class={activeVerticalTab === 1 ? "previous disabled" : "previous"}
                  >
                    <Button
                      color="primary"
                      on:click={() => toggleVerticalTab(activeVerticalTab - 1)}
                    >
                      Previous
                    </Button>
                  </li>
                  <li class={activeVerticalTab === 4 ? "next disabled" : "next"}>
                    <Button
                      color="primary"
                      on:click={() => toggleVerticalTab(activeVerticalTab + 1)}
                    >
                      Next
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
