<script>
  import { Link } from "svelte-routing";
  import {
    Card,
    CardBody,
    Col,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
  } from "sveltestrap";
  
  // import SimpleBar from "@woden/svelte-simplebar";
</script>

<Col xl={4} lg={6}>
  <Card>
    <CardBody>
      <div class="d-flex flex-wrap">
        <div class="me-2">
          <h5 class="card-title mb-3">Comments</h5>
        </div>
        <Dropdown class="ms-auto">
          <DropdownToggle class="text-muted font-size-16" color="" tag="a">
            <i class="mdi mdi-dots-horizontal" />
          </DropdownToggle>
          <DropdownMenu class="dropdown-menu-end">
            <Link class="dropdown-item" to="#">Action</Link>
            <Link class="dropdown-item" to="#">Another action</Link>
            <Link class="dropdown-item" to="#">Something else here</Link>
            <div class="dropdown-divider" />
            <Link class="dropdown-item" to="#">Separated link</Link>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div data-simplebar style="max-height: 310px;">
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item py-3">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <div
                      class="avatar-title rounded-circle bg-light text-primary"
                    >
                      <i class="bx bxs-user" />
                    </div>
                  </div>
                </div>

                <div class="flex-grow-1">
                  <h5 class="font-size-14 mb-1">
                    Delores Williams{" "}
                    <small class="text-muted float-end"> 1 hr Ago </small>
                  </h5>
                  <p class="text-muted">
                    If several languages coalesce, the grammar of the resulting
                    of the individual
                  </p>
                  <div>
                    <Link to="#" class="text-success">
                      <i class="mdi mdi-reply me-1" /> Reply
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li class="list-group-item py-3">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <img
                      src="/assets/images/users/avatar-2.jpg"
                      alt=""
                      class="img-fluid d-block rounded-circle"
                    />
                  </div>
                </div>
                <div class="flex-grow-1">
                  <h5 class="font-size-14 mb-1">
                    Clarence Smith{" "}
                    <small class="text-muted float-end"> 2 hrs Ago </small>
                  </h5>
                  <p class="text-muted">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet
                  </p>
                  <div>
                    <Link to="#" class="text-success">
                      <i class="mdi mdi-reply" /> Reply
                    </Link>
                  </div>

                  <div class="d-flex pt-3">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar-xs">
                        <div
                          class="avatar-title rounded-circle bg-light text-primary"
                        >
                          <i class="bx bxs-user" />
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-14 mb-1">
                        Silvia Martinez{" "}
                        <small class="text-muted float-end"> 2 hrs Ago </small>
                      </h5>
                      <p class="text-muted">
                        To take a trivial example, which of us ever undertakes
                      </p>
                      <div>
                        <Link to="#" class="text-success">
                          <i class="mdi mdi-reply" /> Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="list-group-item py-3">
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <div
                      class="avatar-title rounded-circle bg-light text-primary"
                    >
                      <i class="bx bxs-user" />
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <h5 class="font-size-14 mb-1">
                    Keith McCoy{" "}
                    <small class="text-muted float-end"> 12 Aug </small>
                  </h5>
                  <p class="text-muted">
                    Donec posuere vulputate arcu. phasellus accumsan cursus
                    velit
                  </p>
                  <div>
                    <Link to="#" class="text-success">
                      <i class="mdi mdi-reply" /> Reply
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </CardBody>
  </Card>
</Col>
