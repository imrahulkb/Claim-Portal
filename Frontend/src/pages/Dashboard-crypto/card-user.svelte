<script>
  import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Tooltip,
  } from "sveltestrap";
  import { Link } from "svelte-routing";
</script>

<Col xl="4">
  <Card>
    <CardBody>
      <Dropdown class="float-end ms-2">
        <DropdownToggle tag="i" color="" class="text-muted">
          <i class="mdi mdi-dots-horizontal font-size-18" />
        </DropdownToggle>
        <DropdownMenu class="dropdown-menu-end">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div>
        <div class="mb-4 me-3">
          <i class="mdi mdi-account-circle text-primary h1" />
        </div>

        <div>
          <h5>Henry Wells</h5>
          <p class="text-muted mb-1">henrywells@abc.com</p>
          <p class="text-muted mb-0">Id no: #SK0234</p>
        </div>
      </div>
    </CardBody>

    <CardBody class="border-top">
      <Row>
        <div class="col-sm-6">
          <div>
            <p class="fw-medium mb-2">Balance :</p>
            <h4>$ 6134.39</h4>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="mt-4 mt-sm-0">
            <p class="fw-medium mb-2">Coin :</p>
            <div class="d-inline-flex align-items-center mt-1">
              <Link to="#" class="m-1" id="bitcoin">
                <div class="avatar-xs">
                  <span
                    class="avatar-title rounded-circle bg-warning bg-soft text-warning font-size-18"
                  >
                    <i class="mdi mdi-bitcoin" />
                  </span>
                </div>
                <Tooltip placement="top" target="bitcoin">
                  Bitcoin
                </Tooltip>
              </Link>
              <Link to="#" class="m-1" id="ethereum">
                <div class="avatar-xs">
                  <span
                    class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18"
                  >
                    <i class="mdi mdi-ethereum" />
                  </span>
                </div>
                <Tooltip placement="top" target="ethereum">
                  Ethereum
                </Tooltip>
              </Link>
              <Link to="#" class="m-1" id="litecoin">
                <div class="avatar-xs">
                  <span
                    class="avatar-title rounded-circle bg-info bg-soft text-info font-size-18"
                  >
                    <i class="mdi mdi-litecoin" />
                  </span>
                </div>
                <Tooltip placement="top" target="litecoin">
                  Litecoin
                </Tooltip>
              </Link>
            </div>
          </div>
        </div>
      </Row>
    </CardBody>

    <CardFooter class="bg-transparent border-top">
      <div class="text-center">
        <Link to="#" class="btn btn-outline-light me-2 w-md">Deposit</Link>{" "}
        <Link to="#" class="btn btn-primary me-2 w-md">Buy / Sell</Link>
      </div>
    </CardFooter>
  </Card>
</Col>