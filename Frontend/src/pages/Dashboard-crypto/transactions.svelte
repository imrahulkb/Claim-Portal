<script>
    import {
  Col,
  Card,
  Nav,
  CardBody,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "sveltestrap";
// import SimpleBar from "@woden/svelte-simplebar";

let activeTab = "1";
</script>
<Col xl="4">
    <Card>
      <CardBody>
        <h4 class="card-title mb-4">Transactions</h4>

        <Nav pills class="bg-light rounded" role="tablist">
          <NavItem>
            <NavLink on:click={() => (activeTab = "1")} active={activeTab == "1"}>
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink on:click={() => (activeTab = "2")} active={activeTab == "2"}>
              Buy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink on:click={() => (activeTab = "3")} active={activeTab == "3"}>
              Sell
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent {activeTab} class="mt-4">
          <TabPane tabId="1" class="{activeTab == 1 ? 'active': ''}">
            <div class="table-responsive" data-simplebar style="max-height: 330px;">
              <div class="table-responsive">
                <Table class="align-middle table-nowrap">
                  <tbody>
                    <tr>
                      <td style="width: 50px">
                        <div class="font-size-22 text-primary">
                          <i class="bx bx-down-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Buy BTC</h5>
                          <p class="text-muted mb-0">14 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.016 BTC</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $125.20
                          </h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="font-size-22 text-danger">
                          <i class="bx bx-up-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Sell ETH</h5>
                          <p class="text-muted mb-0">15 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.56 ETH</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $112.34
                          </h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="font-size-22 text-primary">
                          <i class="bx bx-down-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Buy LTC</h5>
                          <p class="text-muted mb-0">16 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">1.88 LTC</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $94.22
                          </h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="font-size-22 text-primary">
                          <i class="bx bx-down-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Buy ETH</h5>
                          <p class="text-muted mb-0">17 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.42 ETH</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $84.32
                          </h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="font-size-22 text-danger">
                          <i class="bx bx-up-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Sell BTC</h5>
                          <p class="text-muted mb-0">18 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.018 BTC</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $145.80
                          </h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="width: 50px">
                        <div class="font-size-22 text-primary">
                          <i class="bx bx-down-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Buy BTC</h5>
                          <p class="text-muted mb-0">14 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.016 BTC</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $125.20
                          </h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="font-size-22 text-danger">
                          <i class="bx bx-up-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Sell ETH</h5>
                          <p class="text-muted mb-0">15 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.56 ETH</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $112.34
                          </h5>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2" class="{activeTab == 2 ? 'active': ''}">
            <div data-simplebar style="max-height: 330px;">
              <div class="table-responsive">
                <Table class="align-middle table-nowrap">
                  <tbody>

                    <tr>
                      <td style="width: 50px">
                        <div class="font-size-22 text-primary">
                          <i class="bx bx-down-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Buy BTC</h5>
                          <p class="text-muted mb-0">14 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.016 BTC</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $125.20
                          </h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="font-size-22 text-primary">
                          <i class="bx bx-down-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Buy ETH</h5>
                          <p class="text-muted mb-0">17 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.42 ETH</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $84.32
                          </h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="font-size-22 text-primary">
                          <i class="bx bx-down-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Buy LTC</h5>
                          <p class="text-muted mb-0">16 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">1.88 LTC</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $94.22
                          </h5>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="width: 50px">
                        <div class="font-size-22 text-primary">
                          <i class="bx bx-down-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Buy BTC</h5>
                          <p class="text-muted mb-0">14 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.016 BTC</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $125.20
                          </h5>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
          </TabPane>

          <TabPane tabId="3" class="{activeTab == 3 ? 'active': ''}">
            <div data-simplebar style="max-height: 330px;">
              <div class="table-responsive">
                <Table class="align-middle table-nowrap">
                  <tbody>

                    <tr>
                      <td>
                        <div class="font-size-22 text-danger">
                          <i class="bx bx-up-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Sell ETH</h5>
                          <p class="text-muted mb-0">15 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.56 ETH</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $112.34
                       </h5>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="font-size-22 text-danger">
                          <i class="bx bx-up-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Sell BTC</h5>
                          <p class="text-muted mb-0">18 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.018 BTC</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $145.80
                       </h5>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="font-size-22 text-danger">
                          <i class="bx bx-up-arrow-circle" />
                        </div>
                      </td>

                      <td>
                        <div>
                          <h5 class="font-size-14 mb-1">Sell ETH</h5>
                          <p class="text-muted mb-0">15 Mar, 2020</p>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 mb-0">0.56 ETH</h5>
                        </div>
                      </td>

                      <td>
                        <div class="text-end">
                          <h5 class="font-size-14 text-muted mb-0">
                            $112.34
                       </h5>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  </Col>