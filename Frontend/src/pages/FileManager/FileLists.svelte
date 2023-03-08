<script>
  import { Link } from "svelte-routing";
  import {
    Card,
    CardBody,
    Col,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Form,
    Row,
    Dropdown,
  } from "sveltestrap";

  const myfiles = [
    {
      id: 1,
      name: "Design",
      file: "12",
      Gb: 6,
    },
    {
      id: 2,
      name: "Development",
      file: "20",
      Gb: 8,
    },
    {
      id: 3,
      name: "Project A",
      file: "06 ",
      Gb: 2,
    },
    {
      id: 4,
      name: "Admin",
      file: "08",
      Gb: 4,
    },
    {
      id: 5,
      name: "Sketch Design",
      file: "12",
      Gb: 6,
    },
    {
      id: 6,
      name: "Applications",
      file: "20",
      Gb: 8,
    },
  ];
</script>

<div>
  <Row class="mb-3">
    <Col xl={3} sm={6}>
      <div class="mt-2">
        <h5>My Files</h5>
      </div>
    </Col>
    <Col xl={9} sm={6}>
      <Form class="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
        <div class="search-box mb-2 me-2">
          <div class="position-relative">
            <input
              type="text"
              class="form-control bg-light border-light rounded"
              placeholder="Search..."
            />
            <i class="bx bx-search-alt search-icon" />
          </div>
        </div>

        <!-- <UncontrolledDropdown class="mb-0">
          <DropdownToggle
            color=""
            class="btn btn-link text-muted dropdown-toggle mt-n2 headerbtn"
            tag="a"
          >
            <i class="mdi mdi-dots-vertical font-size-20" />
          </DropdownToggle>

          <DropdownMenu class="dropdown-menu-end">
            <Link class="dropdown-item" to="#">Share Files</Link>
            <Link class="dropdown-item" to="#">Share with me</Link>
            <Link class="dropdown-item" to="#">Other Actions</Link>
          </DropdownMenu>
        </UncontrolledDropdown> -->
      </Form>
    </Col>
  </Row>
</div>
<div>
  <Row>
    {#each myfiles as myfile}
      <Col xl={4} sm={6}>
        <Card class="shadow-none border">
          <CardBody class="p-3">
            <div class="">
              <div class="float-end ms-2">
                <!-- <UncontrolledDropdown class="mb-2">
                  <DropdownToggle class="font-size-16 text-muted" color=""><i class="mdi mdi-dots-horizontal"></i></DropdownToggle>
                  <DropdownMenu class="dropdown-menu-end">
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> -->
              </div>
              <div class="avatar-xs me-3 mb-3">
                <div class="avatar-title bg-transparent rounded">
                  <i class="bx bxs-folder font-size-24 text-warning" />
                </div>
              </div>
              <div class="d-flex">
                <div class="overflow-hidden me-auto">
                  <h5 class="font-size-14 text-truncate mb-1">
                    <Link to="#" class="text-body">
                      {myfile.name}
                    </Link>
                  </h5>
                  <p class="text-muted text-truncate mb-0">
                    {myfile.file} Files
                  </p>
                </div>
                <div class="align-self-end ms-2">
                  <p class="text-muted mb-0">{myfile.Gb}GB</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    {/each}
  </Row>
</div>