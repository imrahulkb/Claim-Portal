<script>
  import {
    Card,
    CardBody,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
  } from "sveltestrap";
  import { Link } from "svelte-routing";
  import data from "../../../common/data/crypto";
</script>

<Card>
  <CardBody>
    <div class="d-flex">
      <div class="me-4">
        <i class="mdi mdi-account-circle text-primary h1" />
      </div>

      <div class="flex-grow-1">
        <div class="text-muted">
          <h5>{data.wallet.userName}</h5>
          <p class="mb-1">{data.wallet.email}</p>
          <p class="mb-0">Id no: {data.wallet.id}</p>
        </div>
      </div>

      <Dropdown>
        <DropdownToggle tag="a" class="ms-2" color="">
            <i class="mdi mdi-dots-horizontal font-size-18" />
          </DropdownToggle>
        <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </div>
  </CardBody>
  <CardBody class="border-top">
    <Row>
      <Col sm="6">
        <div>
          <p class="text-muted mb-2">Available Balance</p>
          <h5>{data.wallet.availableBalance}</h5>
        </div>
      </Col>
      <Col sm="6">
        <div class="text-sm-end mt-4 mt-sm-0">
          <p class="text-muted mb-2">Since last month</p>
          <h5>
            {data.wallet.lastMonthDifference}{"  "}
            <span class="badge bg-success ms-1 align-bottom">
              {data.wallet.lastMonthDifferencePercent}
            </span>
          </h5>
        </div>
      </Col>
    </Row>
  </CardBody>
  <CardBody class="border-top">
    <p class="text-muted mb-4">In this month</p>
    <div class="text-center">
      <Row>
        <Col sm="4">
          <div>
            <div class="font-size-24 text-primary mb-2">
              <i class="bx bx-send" />
            </div>

            <p class="text-muted mb-2">Send</p>
            <h5>{data.wallet.send}</h5>

            <div class="mt-3">
              <Link to="#" class="btn btn-primary btn-sm w-md">Send</Link>
            </div>
          </div>
        </Col>
        <Col sm="4">
          <div class="mt-4 mt-sm-0">
            <div class="font-size-24 text-primary mb-2">
              <i class="bx bx-import" />
            </div>

            <p class="text-muted mb-2">receive</p>
            <h5>{data.wallet.receive}</h5>

            <div class="mt-3">
              <Link to="#" class="btn btn-primary btn-sm w-md">
                Receive
              </Link>
            </div>
          </div>
        </Col>
        <Col sm="4">
          <div class="mt-4 mt-sm-0">
            <div class="font-size-24 text-primary mb-2">
              <i class="bx bx-wallet" />
            </div>

            <p class="text-muted mb-2">Withdraw</p>
            <h5>{data.wallet.withdraw}</h5>

            <div class="mt-3">
              <Link to="#" class="btn btn-primary btn-sm w-md">
                Withdraw
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </CardBody>
</Card>