<script>
  import { Container, Row, Col, Card } from "sveltestrap";
  import data from "../../../common/data/ecommerce";
  import Breadcrumb from "../../../common/Breadcrumb.svelte";
  import { Link } from "svelte-routing";
</script>
<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Ecommerce" breadcrumbItem="Shops" />
    <Row>
      {#each data.shops as shop}
      <Col xl="4" sm="6">
        <Card>
          <Row>
            <Col xl="5">
              <div class="text-center p-4 border-end">
                <div class="avatar-sm mx-auto mb-3 mt-1">
                  <span
                    class={
                      "avatar-title rounded-circle bg-soft bg-" +
                      shop.color +
                      " primary text-" +
                      shop.color +
                      " font-size-16"
                    }
                  >
                   {shop.name.charAt(0)}
                  </span>
                </div>
                <h5 class="text-truncate pb-1">{shop.name}</h5>
              </div>
            </Col>
    
            <Col xl="7">
              <div class="p-4 text-center text-xl-start">
                <Row>
                  <Col xs="6">
                    <div>
                      <p class="text-muted mb-2 text-truncate">
                        Products
                      </p>
                      <h5>{shop.product}</h5>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div>
                      <p class="text-muted mb-2 text-truncate">
                        Wallet Balance
                      </p>
                      <h5>${shop.balance}</h5>
                    </div>
                  </Col>
                </Row>
                <div class="mt-4">
                  <Link to="#" class="text-decoration-underline text-reset">See Profile <i class="mdi mdi-arrow-right"></i></Link>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      {/each}
    </Row>
    <Row>
      <Col xs="12">
        <div class="text-center my-3">
          <Link to="#" class="text-success">
            <i class="bx bx-loader bx-spin font-size-18 align-middle me-2" />
            Load more
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
</div>