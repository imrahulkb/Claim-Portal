<script>
  import productData from "./data";
  import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Form,
    FormGroup,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
  } from "sveltestrap";

  import Breadcrumb from "../../../common/Breadcrumb.svelte";
  import { Datatable } from "svelte-simple-datatables";

  const settings = {
    sortable: true,
    pagination: true,
    rowPerPage: 10,
  };

  let activeTab = 1;
  let rows
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Crypto" breadcrumbItem="Orders" />

    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <h4 class="card-title mb-3">Orders</h4>
            <Nav class="nav nav-tabs nav-tabs-custom" role="tablist">
              <NavItem>
                <NavLink
                  on:click={() => (activeTab = 1)}
                  active={activeTab == 1}
                >
                  All Orders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  on:click={() => (activeTab = 2)}
                  active={activeTab == 2}
                >
                  Processing
                </NavLink>
              </NavItem>
            </Nav>
            <Form>
              <Row>
                <Col sm="6" class="col-xl">
                  <FormGroup class="mt-3 mb-0">
                    <Label>Date :</Label>
                    <input
                      type="date"
                      class="form-control"
                      id="orderid-input"
                      placeholder="Select date"
                      value=""
                    />
                  </FormGroup>
                </Col>

                <Col sm="6" class="col-xl">
                  <FormGroup class="mt-3 mb-0">
                    <Label>Coin</Label>
                    <select class="form-control select2-search-disable">
                      <option value="BTC"> Bitcoin </option>
                      <option value="ETH">Ethereum</option>
                      <option value="LTC">litecoin</option>
                    </select>
                  </FormGroup>
                </Col>

                <Col sm="6" class="col-xl">
                  <FormGroup class="mt-3 mb-0">
                    <Label>Type</Label>
                    <select class="form-control select2-search-disable">
                      <option value="BU"> Buy </option>
                      <option value="SE">Sell</option>
                    </select>
                  </FormGroup>
                </Col>

                <Col sm="6" class="col-xl">
                  <FormGroup class="mt-3 mb-0">
                    <Label>Status</Label>
                    <select class="form-control select2-search-disable">
                      <option value="CO"> Completed </option>
                      <option value="PE">Pending</option>
                    </select>
                  </FormGroup>
                </Col>

                <Col sm="6" class="col-xl align-self-end">
                  <div class="mb-3">
                    <Button type="button" color="primary" class="w-md">
                      Add Order
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>

            <div class="mt-3">
              <Datatable {settings} data={productData} bind:dataRows={rows}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Coin</th>
                    <th>Value</th>
                    <th>Value in USD</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {#if rows}
                  {#each $rows as row}
                    <tr>
                      <td>{row.pdate}</td>
                      <td>{row.type}</td>
                      <td>{row.coin}</td>
                      <td>{row.value}</td>
                      <td>{row.valueInUsd}</td>
                      <td>
                        <span class="badge bg-{row.badgecolor} font-size-10">{row.status}</span>
                      </td>
                    </tr>
                  {/each}

                {/if}
                </tbody>
              </Datatable>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>