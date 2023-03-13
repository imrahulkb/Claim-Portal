<script>
  import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
    Table,
    Button
  } from "sveltestrap";
  import Breadcrumb from "./../../../common/Breadcrumb.svelte";
  import data from "../../../common/data/ecommerce";
  import EcommerceOrdersModal from "./EcommerceOrdersModal.svelte";

  let orderModal = false;

  const setOrderModal = (status) => {
    orderModal = status;
  };
</script>

<EcommerceOrdersModal
  show={orderModal}
  onCloseClick={() => setOrderModal(false)}
/>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Ecommerce" breadcrumbItem="Orders" />

    <Row>
      <div class="col-12">
        <Card>
          <CardBody>
            <Row class="mb-2">
              <Col sm={4}>
                <div class="search-box me-2 mb-2 d-inline-block">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                    />
                    <i class="bx bx-search-alt search-icon" />
                  </div>
                </div>
              </Col>
              <Col sm={8}>
                <div class="text-sm-end">
                  <button
                    type="button"
                    class="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                    ><i class="mdi mdi-plus me-1" /> Add New Order</button
                  >
                </div>
              </Col><!-- end col-->
            </Row>

            <div class="table-responsive">
              <Table class="align-middle table-nowrap table-check">
                <thead class="table-light">
                  <tr>
                    <th style="width: 20px;" class="align-middle">
                      <div class="form-check font-size-16">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="checkAll"
                        />
                        <label class="form-check-label" for="checkAll" />
                      </div>
                    </th>
                    <th class="align-middle">Order ID</th>
                    <th class="align-middle">Billing Name</th>
                    <th class="align-middle">Date</th>
                    <th class="align-middle">Total</th>
                    <th class="align-middle">Payment Status</th>
                    <th class="align-middle">Payment Method</th>
                    <th class="align-middle">View Details</th>
                    <th class="align-middle">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {#each data.orders as order}
                    <tr>
                      <td>
                        <div class="form-check font-size-16">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="orderidcheck01"
                          />
                          <label
                            class="form-check-label"
                            for="orderidcheck01"
                          />
                        </div>
                      </td>
                      <td
                        ><a href="/" class="text-body fw-bold"
                          >{order.orderId}</a
                        >
                      </td>
                      <td>{order.billingName}</td>
                      <td>
                        {order.orderdate}
                      </td>
                      <td>
                        {order.total}
                      </td>
                      <td>
                        <span
                          class={"badge badge-pill font-size-12 badge-soft-" +
                            order.badgeclass}>{order.paymentStatus}</span
                        >
                      </td>
                      <td>
                        <i class={"me-1 fab " + order.methodIcon} />
                        {order.paymentMethod}
                      </td>
                      <td>
                        <!-- Button trigger modal -->
                        <Button
                          type="button"
                          color="primary"
                          class="btn btn-primary btn-sm btn-rounded"
                          on:click={setOrderModal}
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div class="d-flex gap-3">
                          <a href="/" class="text-success"
                            ><i class="mdi mdi-pencil font-size-18" /></a
                          >
                          <a href="/" class="text-danger"
                            ><i class="mdi mdi-delete font-size-18" /></a
                          >
                        </div>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </Table>
            </div>
            <ul class="pagination pagination-rounded justify-content-end mb-2">
              <li class="page-item disabled">
                <a class="page-link" href="/" aria-label="Previous">
                  <i class="mdi mdi-chevron-left" />
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="/">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="/">2</a></li>
              <li class="page-item"><a class="page-link" href="/">3</a></li>
              <li class="page-item"><a class="page-link" href="/">4</a></li>
              <li class="page-item"><a class="page-link" href="/">5</a></li>
              <li class="page-item">
                <a class="page-link" href="/" aria-label="Next">
                  <i class="mdi mdi-chevron-right" />
                </a>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Container>
</div>