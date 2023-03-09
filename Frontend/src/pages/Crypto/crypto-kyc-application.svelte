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
  import Dropzone from "svelte-file-dropzone";
  let files = {
    accepted: [],
    rejected: [],
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }

  let activeTab = 1;

  function toggleTab(tab) {
    activeTab = tab;
  }

  let modal = false;

  const togglemodal = () => (modal = !modal);
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Crypto" breadcrumbItem="KYC Application" />

    <Row class="justify-content-center mt-lg-5">
      <Col xl="5" sm="8">
        <Card>
          <CardBody>
            <div class="text-center">
              <Row class="justify-content-center">
                <Col lg="10">
                  <h4 class="mt-4 fw-semibold">KYC Verification</h4>
                  <p class="text-muted mt-3">
                    Itaque earum rerum hic tenetur a sapiente delectus ut aut
                    reiciendis perferendis asperiores repellat.
                  </p>

                  <div class="mt-4">
                    <Button
                      type="button"
                      color="primary"
                      on:click={togglemodal}
                    >
                      Click here for Verification
                    </Button>
                  </div>
                </Col>
              </Row>

              <Row class="justify-content-center mt-5 mb-2">
                <Col sm="6" xs="8">
                  <div>
                    <img
                      src="/assets/images/verification-img.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <Modal
              isOpen={modal}
              role="dialog"
              size="lg"
              autoFocus={true}
              centered
              id="verificationModal"
              on:click={togglemodal}
            >
              <div class="modal-content">
                <div class="modal-header border-bottom-0">
                  <h4>Verify your Account</h4>
                  <button
                    type="button"
                    class="btn-close"
                    on:click={togglemodal}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <ModalBody>
                  <div id="kyc-verify-wizard" class="wizard clearfix">
                    <div class="steps clearfix">
                      <ul>
                        <NavItem>
                          <NavLink
                            on:click={() => (activeTab = 1)}
                            active={activeTab == 1}
                          >
                            <span class="number">1.</span>
                            Personal Info
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            on:click={() => (activeTab = 2)}
                            active={activeTab == 2}
                          >
                            <span class="number">2.</span>
                            Confirm email
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            on:click={() => (activeTab = 3)}
                            active={activeTab == 3}
                          >
                            <span class="number">3.</span>
                            Document Verification
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div class="content clearfix">
                      <TabContent
                        {activeTab}
                        class="twitter-bs-wizard-tab-content"
                      >
                        <TabPane tabId={1} id="personal-info" class="{activeTab == 1 ? 'active': ''}">
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup class="mb-3">
                                  <Label
                                    for="kycfirstname-input"
                                    class="form-label"
                                  >
                                    First name
                                  </Label>
                                  <Input
                                    type="text"
                                    class="form-control"
                                    id="kycfirstname-input"
                                    placeholder="Enter First name"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup class="mb-3">
                                  <Label
                                    for="kyclastname-input"
                                    class="form-label"
                                  >
                                    Last name
                                  </Label>
                                  <Input
                                    type="text"
                                    class="form-control"
                                    id="kyclastname-input"
                                    placeholder="Enter Last name"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="6">
                                <FormGroup class="mb-3">
                                  <Label
                                    for="kycphoneno-input"
                                    class="form-label"
                                  >
                                    Phone
                                  </Label>
                                  <Input
                                    type="text"
                                    class="form-control"
                                    id="kycphoneno-input"
                                    placeholder="Enter Phone number"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup class="mb-3">
                                  <Label
                                    for="kycbirthdate-input"
                                    class="form-label"
                                  >
                                    Date of birth
                                  </Label>
                                  <Input
                                    type="text"
                                    class="form-control"
                                    id="kycbirthdate-input"
                                    placeholder="Enter Date of birth"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup class="mb-3">
                                  <Label
                                    for="kycselectcity-input"
                                    class="form-label"
                                  >
                                    City
                                  </Label>
                                  <select
                                    class="form-select"
                                    id="kycselectcity-input"
                                  >
                                    <option> San Francisco </option>
                                    <option>Los Angeles</option>
                                    <option>San Diego</option>
                                  </select>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2} id="confirm-email" class="{activeTab == 2 ? 'active': ''}">
                          <div>
                            <Form>
                              <Row>
                                <Col lg="12">
                                  <FormGroup class="mb-3">
                                    <Label for="kycemail-input">
                                      Email
                                    </Label>
                                    <Input
                                      type="email"
                                      class="form-control"
                                      id="kycemail-input"
                                      placeholder="Enter Email Address"
                                    />
                                  </FormGroup>

                                  <FormGroup class="mb-3">
                                    <Label for="kycconfirmcode-input">
                                      Confirm code
                                    </Label>
                                    <Input
                                      type="email"
                                      class="form-control"
                                      id="kycconfirmcode-input"
                                      placeholder="Enter Confirm code"
                                    />
                                  </FormGroup>

                                  <div class="mb-3">
                                    Didn't recieve code ?
                                    <Button type="button" color="link">
                                      Resend Code
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={3} id="doc-verification" class="{activeTab == 3 ? 'active': ''}">
                          <h5 class="font-size-14 mb-3">
                            Upload document file for a verification
                          </h5>
                          <div class="kyc-doc-verification mb-3">
                            <Dropzone on:drop={handleFilesSelect}>
                              <div>
                                <div class="dz-message needsclick">
                                  <div class="dz-message needsclick">
                                    <div class="mb-3">
                                      <i
                                        class="display-4 text-muted bx bxs-cloud-upload"
                                      />
                                    </div>
                                    <h4>Drop files here or click to upload.</h4>
                                  </div>
                                </div>
                              </div>
                            </Dropzone>
                            <div
                              class="dropzone-previews mt-3"
                              id="file-previews"
                            >
                              {#each files.accepted as item}
                                <Card
                                  class="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                >
                                  <div class="p-2">
                                    <Row class="align-items-center">
                                      <Col>
                                        <Link
                                          to="#"
                                          class="text-muted font-weight-bold"
                                        >
                                          {item.name}
                                        </Link>
                                        <p class="mb-0">
                                          <strong>{item.size}</strong>
                                        </p>
                                      </Col>
                                    </Row>
                                  </div>
                                </Card>
                              {/each}
                            </div>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>

                    <div class="actions clearfix">
                      <ul role="menu" aria-label="Pagination">
                        <li
                          class={activeTab === 1
                            ? "previous disabled"
                            : "previous"}
                        >
                          <Button color="primary" on:click={() => toggleTab(activeTab - 1)}>
                            Previous
                          </Button>
                        </li>
                        <li class={activeTab === 3 ? "next disabled" : "next"}>
                          <Button color="primary" on:click={() => toggleTab(activeTab + 1)}>
                            Next
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ModalBody>
              </div>
            </Modal>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
