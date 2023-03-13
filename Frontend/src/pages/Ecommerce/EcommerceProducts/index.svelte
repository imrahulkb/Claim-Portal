<script>
  import { Link } from "svelte-routing";

  import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Form,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
  } from "sveltestrap";

  import RangeSlider from "svelte-range-slider-pips";
  import StarRating from "svelte-star-rating";
  import Breadcrumb from "./../../../common/Breadcrumb.svelte";
  import data from "../../../common/data/ecommerce";

  const FilterClothes = [
    { id: 1, name: "T-shirts", link: "#" },
    { id: 2, name: "Shirts", link: "#" },
    { id: 3, name: "Jeans", link: "#" },
    { id: 4, name: "Jackets", link: "#" },
  ];
  let activeTab = 1;
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Ecommerce" breadcrumbItem="Products" />
    <Row>
      <Col lg="3">
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Filter</CardTitle>
            <div>
              <h5 class="font-size-14 mb-3">Clothes</h5>

              <ul class="list-unstyled product-list">
                {#each FilterClothes as cloth}
                  <li>
                    <Link to={cloth.link}>
                      <i class="mdi mdi-chevron-right me-1" />{" "}
                      {cloth.name}
                    </Link>
                  </li>
                {/each}
              </ul>
            </div>
            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-4">Price</h5>

              <RangeSlider
                min={0}
                max={1000}
                pipstep={100}
                pips
                range
                values={[200, 800]}
                first='label' last='label'
                prefix="$"
                float={true}
              />
            </div>

            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Discount</h5>
              {#each data.discountData as discount}
                <div class="form-check mt-2">
                  <input
                    type="checkbox"
                    value={discount.value}
                    class="form-check-input"
                  />{" "}
                  <Label class="form-check-label">
                    {discount.label}
                  </Label>
                </div>
              {/each}
            </div>

            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Customer Rating</h5>
              <div>
                <div class="form-check mt-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="productratingCheck1"
                  />{" "}
                  <Label class="form-check-label" htmlFor="productratingCheck1">
                    4 <i class="bx bxs-star text-warning" /> & Above
                  </Label>
                </div>
                <div class="form-check mt-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="productratingCheck2"
                  />{" "}
                  <Label class="form-check-label" htmlFor="productratingCheck2">
                    3 <i class="bx bxs-star text-warning" /> & Above
                  </Label>
                </div>
                <div class="form-check mt-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="productratingCheck3"
                  />{" "}
                  <Label class="form-check-label" htmlFor="productratingCheck3">
                    2 <i class="bx bxs-star text-warning" /> & Above
                  </Label>
                </div>
                <div class="form-check mt-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="productratingCheck4"
                  />{" "}
                  <Label class="form-check-label" htmlFor="productratingCheck4">
                    1 <i class="bx bxs-star text-warning" />
                  </Label>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg="9">
        <Row class="mb-3">
          <Col xl="4" sm="6">
            <div class="mt-2">
              <h5>Clothes</h5>
            </div>
          </Col>
          <Col lg="8" sm="6">
            <Form class="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
              <div class="search-box me-2">
                <div class="position-relative">
                  <Input
                    type="text"
                    class="form-control border-0"
                    placeholder="Search..."
                  />
                  <i class="bx bx-search-alt search-icon" />
                </div>
              </div>
              <Nav class="product-view-nav" pills>
                <NavItem>
                  <NavLink
                    on:click={() => (activeTab = 1)}
                    active={activeTab == 1}
                  >
                    <i class="bx bx-grid-alt" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    on:click={() => (activeTab = 2)}
                    active={activeTab == 2}
                  >
                    <i class="bx bx-list-ul" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Form>
          </Col>
        </Row>
        <Row>
          {#each data.productsData as product}
            <Col xl="4" sm="6">
              <Card>
                <CardBody>
                  <Link to="#">
                    <div class="product-img position-relative">
                      {#if product.isOffer}
                        <div class="avatar-sm product-ribbon">
                          <span class="avatar-title rounded-circle  bg-primary">
                            {`-${product.offer}%`}
                          </span>
                        </div>
                      {/if}
                      <img
                        src={product.image}
                        alt=""
                        class="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Link>

                  <div class="mt-4 text-center">
                    <h5 class="mb-3 text-truncate">
                      <Link
                        to={"/ecommerce-product-details/" + product.id}
                        class="text-dark"
                      >
                        {product.name}{" "}
                      </Link>
                    </h5>
                    <div class="text-muted mb-3">
                      <StarRating rating={product.rating} />
                    </div>
                    <h5 class="my-0">
                      <span class="text-muted me-2">
                        <del>${product.oldPrice}</del>
                      </span>{" "}
                      <b>${product.newPrice}</b>
                    </h5>
                  </div>
                </CardBody>
              </Card>
            </Col>
          {/each}
        </Row>

        <Row>
          <Col lg="12">
            <ul
              class="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1"
            >
              <li class="page-item disabled">
                <a href="/" class="page-link"
                  ><i class="mdi mdi-chevron-left" /></a
                >
              </li>
              <li class="page-item">
                <a href="/" class="page-link">1</a>
              </li>
              <li class="page-item active">
                <a href="/" class="page-link">2</a>
              </li>
              <li class="page-item">
                <a href="/" class="page-link">3</a>
              </li>
              <li class="page-item">
                <a href="/" class="page-link">4</a>
              </li>
              <li class="page-item">
                <a href="/" class="page-link">5</a>
              </li>
              <li class="page-item">
                <a href="/" class="page-link"
                  ><i class="mdi mdi-chevron-right" /></a
                >
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
</div>
