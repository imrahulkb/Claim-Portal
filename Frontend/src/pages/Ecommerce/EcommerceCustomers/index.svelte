<script>
  import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
    Table,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "sveltestrap";
  import Breadcrumb from "./../../../common/Breadcrumb.svelte";
  import data from "../../../common/data/ecommerce";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Ecommerce" breadcrumbItem="Customers" />

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
                    ><i class="mdi mdi-plus me-1" /> New Customers</button
                  >
                </div>
              </Col>
              <!-- end col-->
            </Row>

            <div class="table-responsive">
              <Table class="align-middle table-nowrap">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Phone / Email</th>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>Wallet Balance</th>
                    <th>Joining Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {#each data.customerData as customer}
                    <tr>
                      <td>
                        <div class="form-check font-size-16">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="customerlistcheck01"
                          />
                          <label
                            class="form-check-label"
                            for="customerlistcheck01"
                          />
                        </div>
                      </td>
                      <td>{customer.username}</td>
                      <td>
                        <p class="mb-1">{customer.phone}</p>
                        <p class="mb-0">{customer.email}</p>
                      </td>

                      <td>{customer.address}</td>
                      <td
                        ><span class="badge bg-success font-size-12"
                          ><i class="mdi mdi-star me-1" />
                          {customer.rating}</span
                        ></td
                      >
                      <td>{customer.walletBalance}</td>
                      <td>{customer.joiningDate}</td>
                      <td>
                        <Dropdown>
                          <DropdownToggle
                            class="card-drop"
                            tag="a"
                            color=""
                          >
                            <i class="mdi mdi-dots-horizontal font-size-18" />
                          </DropdownToggle>
                          <DropdownMenu class="dropdown-menu-end">
                            <DropdownItem>
                              <i
                                class="mdi mdi-pencil font-size-16 text-success me-1"
                              /> Edit
                            </DropdownItem>
                            <DropdownItem>
                              <i
                                class="mdi mdi-trash-can font-size-16 text-danger me-1"
                              /> Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
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
              <li class="page-item">
                <a class="page-link" href="/">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/">5</a>
              </li>
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
