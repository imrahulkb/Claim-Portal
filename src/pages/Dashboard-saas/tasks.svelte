<script>
  import { Link } from "svelte-routing";
  import {
    Card,
    CardBody,
    Col,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Table,
  } from "sveltestrap";

  //import SimpleBar from "@woden/svelte-simplebar";
  
  let activeTab = "1";
</script>

<Col xl="4">
  <Card>
    <CardBody>
      <h4 class="card-title mb-4">Tasks</h4>

      <Nav pills class="bg-light rounded">
        <NavItem>
          <NavLink on:click={() => (activeTab = "1")} active={activeTab == "1"}>
            In Process
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink on:click={() => (activeTab = "2")} active={activeTab == "2"}>
            Upcoming
          </NavLink>
        </NavItem>
      </Nav>

      <div class="mt-4">
        <div data-simplebar style="max-height: 250px;">
          <div class="table-responsive">
            <Table class="table table-nowrap align-middle table-hover mb-0">
              <tbody>
                <tr>
                  <td style="width:50px">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="tasklistCheck01"
                      />
                      <Label
                        class="form-check-label"
                        for="tasklistCheck01"
                      />
                    </div>
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14 mb-1">
                      <Link to="#" class="text-dark">Skote Saas Dashboard</Link>
                    </h5>
                    <p class="text-muted mb-0">Assigned to Mark</p>
                  </td>
                  <td style="width:90px">
                    <div>
                      <ul class="list-inline mb-0 font-size-16">
                        <li class="list-inline-item">
                          <Link to="#" class="text-success p-1">
                            <i class="bx bxs-edit-alt" />
                          </Link>
                        </li>
                        {" "}
                        <li class="list-inline-item">
                          <Link to="#" class="text-danger p-1">
                            <i class="bx bxs-trash" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="tasklistCheck02"
                      />
                      <Label
                        class="form-check-label"
                        for="tasklistCheck02"
                      />
                    </div>
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14 mb-1">
                      <Link to="#" class="text-dark">New Landing UI</Link>
                    </h5>
                    <p class="text-muted mb-0">Assigned to Team A</p>
                  </td>
                  <td>
                    <div>
                      <ul class="list-inline mb-0 font-size-16">
                        <li class="list-inline-item">
                          <Link to="#" class="text-success p-1">
                            <i class="bx bxs-edit-alt" />
                          </Link>
                        </li>
                        {" "}
                        <li class="list-inline-item">
                          <Link to="#" class="text-danger p-1">
                            <i class="bx bxs-trash" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="tasklistCheck03"
                      />
                      <Label
                        class="form-check-label"
                        for="tasklistCheck03"
                      />
                    </div>
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14 mb-1">
                      <Link to="#" class="text-dark">Brand logo design</Link>
                    </h5>
                    <p class="text-muted mb-0">Assigned to Janis</p>
                  </td>
                  <td>
                    <div>
                      <ul class="list-inline mb-0 font-size-16">
                        <li class="list-inline-item">
                          <Link to="#" class="text-success p-1">
                            <i class="bx bxs-edit-alt" />
                          </Link>
                        </li>
                        {" "}
                        <li class="list-inline-item">
                          <Link to="#" class="text-danger p-1">
                            <i class="bx bxs-trash" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="tasklistCheck04"
                      />
                      <Label
                        class="form-check-label"
                        for="tasklistCheck04"
                      />
                    </div>
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14 mb-1">
                      <Link to="#" class="text-dark">Blog Template UI</Link>
                    </h5>
                    <p class="text-muted mb-0">Assigned to Dianna</p>
                  </td>
                  <td>
                    <div>
                      <ul class="list-inline mb-0 font-size-16">
                        <li class="list-inline-item">
                          <Link to="#" class="text-success p-1">
                            <i class="bx bxs-edit-alt" />
                          </Link>
                        </li>
                        {" "}
                        <li class="list-inline-item">
                          <Link to="#" class="text-danger p-1">
                            <i class="bx bxs-trash" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="tasklistCheck05"
                      />
                      <Label
                        class="form-check-label"
                        for="tasklistCheck05"
                      />
                    </div>
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14 mb-1">
                      <Link to="#" class="text-dark">Multipurpose Landing</Link>
                    </h5>
                    <p class="text-muted mb-0">Assigned to Team B</p>
                  </td>
                  <td>
                    <div>
                      <ul class="list-inline mb-0 font-size-16">
                        <li class="list-inline-item">
                          <Link to="#" class="text-success p-1">
                            <i class="bx bxs-edit-alt" />
                          </Link>
                        </li>
                        {" "}
                        <li class="list-inline-item">
                          <Link to="#" class="text-danger p-1">
                            <i class="bx bxs-trash" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="tasklistCheck06"
                      />
                      <Label
                        class="form-check-label"
                        for="tasklistCheck06"
                      />
                    </div>
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14 mb-1">
                      <Link to="#" class="text-dark">
                        Redesign - Landing page
                      </Link>
                    </h5>
                    <p class="text-muted mb-0">Assigned to Jerry</p>
                  </td>
                  <td>
                    <div>
                      <ul class="list-inline mb-0 font-size-16">
                        <li class="list-inline-item">
                          <Link to="#" class="text-success p-1">
                            <i class="bx bxs-edit-alt" />
                          </Link>
                        </li>
                        {" "}
                        <li class="list-inline-item">
                          <Link to="#" class="text-danger p-1">
                            <i class="bx bxs-trash" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="tasklistCheck07"
                      />
                      <Label
                        class="form-check-label"
                        for="tasklistCheck07"
                      />
                    </div>
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14 mb-1">
                      <Link to="#" class="text-dark">
                        Skote Crypto Dashboard
                      </Link>
                    </h5>
                    <p class="text-muted mb-0">Assigned to Eric</p>
                  </td>
                  <td>
                    <div>
                      <ul class="list-inline mb-0 font-size-16">
                        <li class="list-inline-item">
                          <Link to="#" class="text-success p-1">
                            <i class="bx bxs-edit-alt" />
                          </Link>
                        </li>
                        {" "}
                        <li class="list-inline-item">
                          <Link to="#" class="text-danger p-1">
                            <i class="bx bxs-trash" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </CardBody>

    <div class="card-footer bg-transparent border-top">
      <div class="text-center">
        <Link to="#" class="btn btn-primary">
          {" "}
          Add new Task
        </Link>
      </div>
    </div>
  </Card>
</Col>