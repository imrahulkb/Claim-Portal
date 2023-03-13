<script>
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    Input,
    Label,
    Button,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
  } from "sveltestrap";

  let activeTab = "1";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Crypto" breadcrumbItem="Buy/Sell" />
    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <div class="float-end">
              <Dropdown>
                <DropdownToggle type="button" tag="button" color="light"><i class="mdi mdi-wallet me-1" />
                  <span class="d-none d-sm-inline-block ms-1">
                    Wallet Balance{" "}
                    <i class="mdi mdi-chevron-down" />
                  </span></DropdownToggle>
                <DropdownMenu class="dropdown-menu-end dropdown-menu-md">
                  <div class="dropdown-item-text">
                    <div>
                      <p class="text-muted mb-2">Available Balance</p>
                      <h5 class="mb-0">$ 9148.23</h5>
                    </div>
                  </div>

                  <DropdownItem divider />

                  <DropdownItem href="#">
                    BTC : <span class="float-end">1.02356</span>
                  </DropdownItem>
                  <DropdownItem href="#">
                    ETH : <span class="float-end">0.04121</span>
                  </DropdownItem>
                  <DropdownItem href="#">
                    LTC : <span class="float-end">0.00356</span>
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem class="text-primary text-center" href="#">
                    Learn more
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <h4 class="card-title mb-4">Buy/Sell Crypto</h4>
            <div class="crypto-buy-sell-nav">
              <Nav class="nav-tabs-custom nav-tabs" role="tablist">
                <NavItem>
                  <NavLink
                    on:click={() => (activeTab = "1")}
                    active={activeTab == "1"}
                  >
                    Buy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    on:click={() => (activeTab = "2")}
                    active={activeTab == "2"}
                  >
                    Sell
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent {activeTab} class="crypto-buy-sell-nav-content p-4">
                <TabPane tabId="1" id="buy" class="{activeTab == 1 ? 'active': ''}">
                  <form>
                    <div class="mb-2">
                      <Label>Currency :</Label>

                      <Row>
                        <Col xl="2" sm="4">
                          <div class="mb-3">
                            <Label class="card-radio-label mb-2">
                              <Input
                                type="radio"
                                name="currency"
                                id="buycurrencyoption1"
                                class="card-radio-input"
                                defaultChecked
                                readonly
                              />

                              <div class="card-radio">
                                <div>
                                  <i
                                    class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"
                                  />{" "}
                                  <span>Bitcoin</span>
                                </div>
                              </div>
                            </Label>

                            <div>
                              <p class="text-muted mb-1">Current price :</p>
                              <h5 class="font-size-16">0.00016 BTC</h5>
                            </div>
                          </div>
                        </Col>

                        <Col xl="2" sm="4">
                          <div class="mb-3">
                            <Label class="card-radio-label mb-2">
                              <Input
                                type="radio"
                                name="currency"
                                id="buycurrencyoption2"
                                class="card-radio-input"
                              />

                              <div class="card-radio">
                                <div>
                                  <i
                                    class="mdi mdi-ethereum font-size-24 text-primary align-middle me-2"
                                  />{" "}
                                  <span>Ethereum</span>
                                </div>
                              </div>
                            </Label>

                            <div>
                              <p class="text-muted mb-1">Current price :</p>
                              <h5 class="font-size-16">0.0073 ETH</h5>
                            </div>
                          </div>
                        </Col>

                        <Col xl="2" sm="4">
                          <div class="mb-3">
                            <Label class="card-radio-label mb-2">
                              <Input
                                type="radio"
                                name="currency"
                                id="buycurrencyoption3"
                                class="card-radio-input"
                              />

                              <div class="card-radio">
                                <div>
                                  <i
                                    class="mdi mdi-litecoin font-size-24 text-info align-middle me-2"
                                  />{" "}
                                  <span>litecoin</span>
                                </div>
                              </div>
                            </Label>

                            <div>
                              <p class="text-muted mb-1">Current price :</p>
                              <h5 class="font-size-16">0.025 LTC</h5>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div class="mb-2">
                      <Label>Payment method :</Label>

                      <Row>
                        <Col xl="2" sm="4">
                          <Label class="card-radio-label mb-3">
                            <Input
                              type="radio"
                              name="pay-method"
                              id="pay-methodoption1"
                              class="card-radio-input"
                            />

                            <div class="card-radio">
                              <i
                                class="fab fa-cc-mastercard font-size-24 text-primary align-middle me-2"
                              />
                              {" "}
                              <span>Credit / Debit Card</span>
                            </div>
                          </Label>
                        </Col>

                        <Col xl="2" sm="4">
                          <Label class="card-radio-label mb-3">
                            <Input
                              type="radio"
                              name="pay-method"
                              id="pay-methodoption3"
                              class="card-radio-input"
                              checked
                              readonly
                            />

                            <div class="card-radio">
                              <i
                                class="fab fa-cc-paypal font-size-24 text-primary align-middle me-2"
                              />
                              {" "}
                              <span>Paypal</span>
                            </div>
                          </Label>
                        </Col>
                      </Row>
                    </div>

                    <div class="mb-3">
                      <Label>Add value :</Label>

                      <Row>
                        <Col sm="6">
                          <InputGroup class="mb-2 currency-value">
                           
                              <span class="input-group-text"> Bitcoin </span>
                            
                            <Input type="text" class="form-control" />
                          </InputGroup>
                        </Col>

                        <Col sm="6">
                          <InputGroup class="mb-2">
                            <Input
                              type="text"
                              class="form-control text-sm-end"
                            />

                            <span class="input-group-text"> USD Amount </span>
                          </InputGroup>
                        </Col>
                      </Row>
                    </div>

                    <div class="mb-3">
                      <Label>Wallet Address :</Label>
                      <Input type="text" class="form-control" />
                    </div>
                    <div class="text-center mt-4">
                      <Button type="button" color="success">
                        Buy Crypto currency
                      </Button>
                    </div>
                  </form>
                </TabPane>

                <TabPane tabId="2" class="{activeTab == 2 ? 'active': ''}">
                  <Form>
                    <div class="mb-2">
                      <Label>Currency :</Label>

                      <Row>
                        <Col xl="2" sm="4">
                          <div class="mb-3">
                            <Label class="card-radio-label mb-2">
                              <Input
                                type="radio"
                                name="currency"
                                id="sellcurrencyoption1"
                                class="card-radio-input"
                                checked
                                readonly
                              />

                              <div class="card-radio">
                                <div>
                                  <i
                                    class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"
                                  />
                                  <span>Bitcoin</span>
                                </div>
                              </div>
                            </Label>
                            <div>
                              <p class="text-muted mb-1">Current price :</p>
                              <h5 class="font-size-16">0.00016 BTC</h5>
                            </div>
                          </div>
                        </Col>

                        <Col xl="2" sm="4">
                          <div class="mb-3">
                            <Label class="card-radio-label mb-2">
                              <Input
                                type="radio"
                                name="currency"
                                id="sellcurrencyoption2"
                                class="card-radio-input"
                              />

                              <div class="card-radio">
                                <div>
                                  <i
                                    class="mdi mdi-ethereum font-size-24 text-primary align-middle me-2"
                                  />
                                  <span>Ethereum</span>
                                </div>
                              </div>
                            </Label>
                            <div>
                              <p class="text-muted mb-1">Current price :</p>
                              <h5 class="font-size-16">0.0073 ETH</h5>
                            </div>
                          </div>
                        </Col>

                        <Col xl="2" sm="4">
                          <div class="mb-3">
                            <Label class="card-radio-label mb-2">
                              <Input
                                type="radio"
                                name="currency"
                                id="sellcurrencyoption3"
                                class="card-radio-input"
                              />

                              <div class="card-radio">
                                <div>
                                  <i
                                    class="mdi mdi-litecoin font-size-24 text-info align-middle me-2"
                                  />
                                  <span>litecoin</span>
                                </div>
                              </div>
                            </Label>

                            <div>
                              <p class="text-muted mb-1">Current price :</p>
                              <h5 class="font-size-16">0.025 LTC</h5>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div class="mb-3">
                      <Label>Email :</Label>
                      <Input type="email" class="form-control" />
                    </div>

                    <div class="mb-3">
                      <Label>Add value :</Label>

                      <Row>
                        <Col sm="6">
                          <InputGroup class="mb-2 currency-value">
                           
                              <span class="input-group-text">
                                Crypto value
                              </span>
                            <Input type="text" class="form-control" />
                          </InputGroup>
                        </Col>

                        <Col sm="6">
                          <InputGroup class="mb-2">
                            <Input
                              type="text"
                              class="form-control text-sm-end"
                            />

                            <span class="input-group-text"> USD Amount </span>
                          </InputGroup>
                        </Col>
                      </Row>
                    </div>

                    <div class="mb-3">
                      <Label>Wallet Address :</Label>
                      <Input type="text" class="form-control" />
                    </div>
                    <div class="text-center mt-4">
                      <Button type="button" color="danger">
                        Sell Crypto currency
                      </Button>
                    </div>
                  </Form>
                </TabPane>
              </TabContent>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>