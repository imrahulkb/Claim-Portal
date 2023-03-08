<script>
  import { Link } from "svelte-routing";
  import { Card, CardBody, Col, Row, Tooltip } from "sveltestrap";
  export let data;
  const name = data.founder;
  const nameIcon = name.charAt(0);
</script>

<Col xl="4" sm="6">
  <Card>
    <CardBody>
      <Row>
        <Col lg="4">
          <div class="text-lg-center">
            {#if data.image}
              <img
                src={data.image}
                class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle"
                alt="img"
              />
            {:else}
              <div
                class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none"
              >
                <span
                  class={"avatar-title rounded-circle bg-soft bg-" +
                    data.color +
                    " text-primary font-size-16"}
                >
                  {nameIcon}
                </span>
              </div>
            {/if}

            <h5 class="mb-1 font-size-15 text-truncate">
              {data.founder}
            </h5>
            <Link to="#" class="text-muted">@Skote</Link>
          </div>
        </Col>

        <Col lg="8">
          <div>
            <Link
              to={"/invoices-detail/" + data.id}
              class="d-block text-primary text-decoration-underline mb-2"
            >
              Invoice #{data.invoiceID}
            </Link>
            <h5 class="text-truncate mb-4 mb-lg-5">{data.company}</h5>
            <ul class="list-inline mb-0">
              <li class="list-inline-item me-3">
                <h5 class="font-size-14" id="amountTooltip">
                  <i class="bx bx-money me-1 text-muted" />{" "}${" "}
                  {data.invoicePrice}
                  <Tooltip placement="top" target="amountTooltip">
                    Amount
                  </Tooltip>
                </h5>
              </li>
              {" "}
              <li class="list-inline-item">
                <h5 class="font-size-14" id="duedateTooltip">
                  <i class="bx bx-calendar me-1 text-muted" />{" "}
                  {data.date}
                  <Tooltip placement="top" target="duedateTooltip">
                    Due Date
                  </Tooltip>
                </h5>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </CardBody>
  </Card>
</Col>