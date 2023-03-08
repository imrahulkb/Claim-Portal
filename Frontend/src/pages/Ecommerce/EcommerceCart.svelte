<script>
  import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
    Table,
    Button,
    CardTitle,
    InputGroup,
    Input,
  } from "sveltestrap";
  import { Link } from "svelte-routing";
  import Breadcrumb from "./../../common/Breadcrumb.svelte";
  import data from "../../common/data/ecommerce";

	const plusItem = (product) => {
			for(let item of data.cartData.products) {
        if(item.id === product.id) {
          product.data_attr += 1
          data.cartData.products = data.cartData.products;
          return;
        }
    }
	}

	const minusItem = (product) => {
		for(let item of data.cartData.products) {
				if(item.id === product.id) {
					if(product.data_attr > 1 ) {
							product.data_attr -= 1
							data.cartData.products = data.cartData.products
					} else {
							data.cartData.products = data.cartData.products.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}
  
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Ecommerce" breadcrumbItem="Cart" />
    <Row>
      <Col lx="8">
        <Card>
          <CardBody>
            <div class="table-responsive">
              <Table class="table align-middle mb-0 table-nowrap">
                <thead class="thead-light">
                  <tr>
                    <th>Product</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th colSpan="2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {#each data.cartData.products as product}
                  <tr key={product.id}>
                    <td>
                        <img
                          src={product.img}
                          alt="product-img"
                          title="product-img"
                          class="avatar-md"
                        />
                      </td>
                      <td>
                        <h5 class="font-size-14 text-truncate">
                          <Link
                            to={"/ecommerce-product-details/" + product.id}
                            class="text-dark"
                          >
                            {product.name}
                          </Link>
                        </h5>
                        <p class="mb-0">
                          Color :{" "}
                          <span class="fw-medium">
                            {product.color}
                          </span>
                        </p>
                      </td>
                      <td>$ {product.price}</td>
                      <td>
                        <div style="width:120px">
                          <InputGroup>
                            
                              <Button
                                color="primary"
                                on:click={() => plusItem(product)}
                              >
                                +
                              </Button>
                            <Input
                              type="text"
                              value={product.data_attr}
                              name="demo_vertical"
                              readOnly
                            />
                            
                              <Button
                                color="primary"
                                on:click={() => minusItem(product)}
                              >
                                -
                              </Button>
                          </InputGroup>
                        </div>
                      </td>
                      <td>$ {product.total}</td>
                      <td>
                        <Link
                          to="#"
                          class="action-icon text-danger"
                        >
                          {" "}
                          <i class="mdi mdi-trash-can font-size-18" />
                        </Link>
                      </td>
                  </tr>
                  {/each}
                </tbody>
              </Table>
            </div>
            <Row class="mt-4">
              <Col sm="6">
                <Link to="/ecommerce-products" class="btn btn-secondary">
                  <i class="mdi mdi-arrow-left me-1" /> Continue Shopping{" "}
                </Link>
              </Col>
              <Col sm="6">
                <div class="text-sm-end mt-2 mt-sm-0">
                  <Link to="/ecommerce-checkout" class="btn btn-success">
                    <i class="mdi mdi-cart-arrow-right me-1" />{" "}
                    Checkout{" "}
                  </Link>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl="4">
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h5">Card Details</CardTitle>

            <div class="card bg-primary text-white visa-card mb-0">
              <CardBody>
                <div>
                  <i class="bx bxl-visa visa-pattern" />

                  <div class="float-end">
                    <i class="bx bxl-visa visa-logo display-3" />
                  </div>

                  <div>
                    <i class="bx bx-chip h1 text-warning" />
                  </div>
                </div>

                <Row class="mt-5">
                  <Col xs="4">
                    <p>
                      <i class="fas fa-star-of-life m-1" />
                      <i class="fas fa-star-of-life m-1" />
                      <i class="fas fa-star-of-life m-1" />
                    </p>
                  </Col>
                  <Col xs="4">
                    <p>
                      <i class="fas fa-star-of-life m-1" />
                      <i class="fas fa-star-of-life m-1" />
                      <i class="fas fa-star-of-life m-1" />
                    </p>
                  </Col>
                  <Col xs="4">
                    <p>
                      <i class="fas fa-star-of-life m-1" />
                      <i class="fas fa-star-of-life m-1" />
                      <i class="fas fa-star-of-life m-1" />
                    </p>
                  </Col>
                </Row>

                <div class="mt-5">
                  <h5 class="text-white float-end mb-0">12/22</h5>
                  <h5 class="text-white mb-0">Fredrick Taylor</h5>
                </div>
              </CardBody>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle class="mb-3 h4">Order Summary</CardTitle>
              <div class="table-responsive">
                <Table class="table mb-0">
                  <tbody>
                    <tr>
                      <td>Grand Total :</td>
                      <td>{data.cartData.orderSummary.grandTotal}</td>
                    </tr>
                    <tr>
                      <td>Discount :</td>
                      <td>{data.cartData.orderSummary.discount}</td>
                    </tr>
                    <tr>
                      <td>Shipping Charge :</td>
                      <td>{data.cartData.orderSummary.shippingCharge}</td>
                    </tr>
                    <tr>
                      <td>Estimated Tax :</td>
                      <td>{data.cartData.orderSummary.estimatedTax}</td>
                    </tr>
                    <tr>
                      <th>Total :</th>
                      <td>{data.cartData.orderSummary.total}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
