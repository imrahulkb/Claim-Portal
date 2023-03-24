<script>
  import {
    Col,
    Card,
    CardBody,
    InputGroup,
    Button,
    Label,
    Input,
    FormGroup,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
  } from "sveltestrap";
  let activeTab = "1";
  
</script>

<Col xl="4">
  <Card>
    <CardBody>
      <h4 class="card-title mb-4">Buy / Sell</h4>

      <Nav pills class="bg-light rounded" role="tablist">
        <NavItem>
          <NavLink on:click={() => (activeTab = "1")} active={activeTab == "1"}>
            Buy
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink on:click={() => (activeTab = "2")} active={activeTab == "2"}>
            Sell
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent {activeTab} class="mt-4" style="max-height: 340px;">
        <TabPane tabId="1" class="{activeTab == 1 ? 'active': ''}">
          <div class="float-end ms-2">
            <h5 class="font-size-14">
              <i
                class="bx bx-wallet text-primary font-size-16 align-middle me-1"
              />{" "}
              $4235.23
            </h5>
          </div>
          <h5 class="font-size-14 mb-4">Buy Coin</h5>

          <div>
            <FormGroup class="mb-3">
              <Label>Payment method :</Label>
              <select class="form-select">
                <option>Credit / Debit Card</option>
                <option>Paypal</option>
              </select>
            </FormGroup>

            <div>
              <Label>Add Amount :</Label>
              <InputGroup class="mb-3">
                
                  <Label class="input-group-text">Amount</Label>
                
                <select class="form-select" style="max-width:90px;">
                  <option value="1" default> BTC </option>
                  <option value="2">ETH</option>
                  <option value="3">LTC</option>
                </select>
                <Input type="text" class="form-control" />
              </InputGroup>

              <InputGroup class="mb-3">
                
                  <Label class="input-group-text">Price</Label>
                
                <Input type="text" class="form-control" />
                
                  <Label class="input-group-text">$</Label>
                
              </InputGroup>

              <InputGroup class="mb-3">
                
                  <Label class="input-group-text">Total</Label>
                
                <Input type="text" class="form-control" />
              </InputGroup>
            </div>

            <div class="text-center">
              <Button type="button" color="success" class="w-md">
                Buy Coin
              </Button>
            </div>
          </div>
        </TabPane>
        <TabPane tabId="2" class="{activeTab == 2 ? 'active': ''}">
          <div class="float-end ms-2">
            <h5 class="font-size-14">
              <i
                class="bx bx-wallet text-primary font-size-16 align-middle me-1"
              />{" "}
              $4235.23
            </h5>
          </div>
          <h5 class="font-size-14 mb-4">Sell Coin</h5>

          <div>
            <FormGroup class="mb-3">
              <Label>Email :</Label>
              <Input type="email" class="form-control" />
            </FormGroup>

            <div>
              <Label>Add Amount :</Label>
              <InputGroup class="mb-3">
                
                  <Label class="input-group-text">Amount</Label>
                
                <select class="form-select" style="max-width: 90px">
                  <option value="1" default> BTC </option>
                  <option value="2">ETH</option>
                  <option value="3">LTC</option>
                </select>
                <Input type="text" class="form-control" />
              </InputGroup>

              <InputGroup class="mb-3">
                
                  <Label class="input-group-text">Price</Label>
                
                <Input type="text" class="form-control" />
                
                  <Label class="input-group-text">$</Label>
                
              </InputGroup>

              <InputGroup class="mb-3">
                
                  <Label class="input-group-text">Total</Label>
                
                <Input type="text" class="form-control" />
              </InputGroup>
            </div>

            <div class="text-center">
              <Button type="button" color="danger" class="w-md">
                Sell Coin
              </Button>
            </div>
          </div>
        </TabPane>
      </TabContent>
    </CardBody>
  </Card>
</Col>