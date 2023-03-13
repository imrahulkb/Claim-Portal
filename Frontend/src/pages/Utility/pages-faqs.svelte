<script>
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
  } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  let activeTab = "1";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Utility" breadcrumbItem="FAQs" />

    <div class="checkout-tabs">
      <Row>
        <Col lg="2">
          <Nav class="flex-column" pills>
            <NavItem>
              <NavLink
                on:click={() => (activeTab = "1")}
                active={activeTab == "1"}
              >
                <i
                  class="bx bx-question-mark d-block check-nav-icon mt-4 mb-2"
                />
                <p class="font-weight-bold mb-4">General Questions</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                on:click={() => (activeTab = "2")}
                active={activeTab == "2"}
              >
                <i
                  class="bx bx-check-shield d-block check-nav-icon mt-4 mb-2"
                />
                <p class="font-weight-bold mb-4">Privacy Policy</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                on:click={() => (activeTab = "3")}
                active={activeTab == "3"}
              >
                <i class="bx bx-support d-block check-nav-icon mt-4 mb-2" />
                <p class="font-weight-bold mb-4">Support</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col lg="10">
          <Card>
            <CardBody>
              <TabContent {activeTab}>
                <TabPane tabId="1" class="{activeTab == 1 ? 'active': ''}">
                  <CardTitle class="mb-5 h4">General Questions</CardTitle>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">What is Lorem Ipsum?</h5>
                      <p class="text-muted">
                        New common language will be more simple and regular than
                        the existing European languages. It will be as simple as
                        occidental.
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where does it come from?</h5>
                      <p class="text-muted">
                        Everyone realizes why a new common language would be
                        desirable one could refuse to pay expensive translators.
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages.
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Why do we use it?</h5>
                      <p class="text-muted">
                        Their separate existence is a myth. For science, music,
                        sport, etc, Europe uses the same vocabulary.
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">
                        To an English person, it will seem like simplified
                        English, as a skeptical Cambridge friend of mine told me
                        what Occidental
                      </p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2" class="{activeTab == 2 ? 'active': ''}">
                  <CardTitle class="mb-5">Privacy Policy</CardTitle>

                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where does it come from?</h5>
                      <p class="text-muted">
                        Everyone realizes why a new common language would be
                        desirable one could refuse to pay expensive translators.
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">
                        To an English person, it will seem like simplified
                        English, as a skeptical Cambridge friend of mine told me
                        what Occidental
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">What is Lorem Ipsum?</h5>
                      <p class="text-muted">
                        New common language will be more simple and regular than
                        the existing European languages. It will be as simple as
                        occidental.
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Why do we use it?</h5>
                      <p class="text-muted">
                        Their separate existence is a myth. For science, music,
                        sport, etc, Europe uses the same vocabulary.
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages.
                      </p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3" class="{activeTab == 3 ? 'active': ''}">
                  <CardTitle class="mb-5">Support</CardTitle>

                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">
                        To an English person, it will seem like simplified
                        English, as a skeptical Cambridge friend of mine told me
                        what Occidental
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where does it come from?</h5>
                      <p class="text-muted">
                        Everyone realizes why a new common language would be
                        desirable one could refuse to pay expensive translators.
                      </p>
                    </div>
                  </div>

                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Why do we use it?</h5>
                      <p class="text-muted">
                        Their separate existence is a myth. For science, music,
                        sport, etc, Europe uses the same vocabulary.
                      </p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages.
                      </p>
                    </div>
                  </div>

                  <div class="faq-box d-flex">
                    <div class="flex-shrink-0 faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success" />
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">What is Lorem Ipsum?</h5>
                      <p class="text-muted">
                        New common language will be more simple and regular than
                        the existing European languages. It will be as simple as
                        occidental.
                      </p>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  </Container>
</div>