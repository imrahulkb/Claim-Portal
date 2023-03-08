<script>
  import { Card, CardBody, Col } from "sveltestrap";
  const coins = [
    {
      title: "Bitcoin",
      color: "warning",
      icon: "mdi mdi-bitcoin",
      value: "9134.39",
      rate: "0.0012.23 ( 0.2 % )",
      isIncrease: true,
    },
    {
      title: "Ethereum",
      color: "primary",
      icon: "mdi mdi-ethereum",
      value: "245.44",
      rate: "004.12 ( 0.1 % )",
      isIncrease: false,
    },
    {
      title: "Litecoin",
      color: "info",
      icon: "mdi mdi-litecoin",
      value: "63.61",
      rate: "0.0001.12 ( 0.1 % ) ",
      isIncrease: true,
    },
  ];
</script>

{#each coins as coin}
  <Col md="4">
    <Card>
      <CardBody>
        <div class="d-flex">
          <div class="avatar-xs me-3">
            <span
              class={"avatar-title rounded-circle bg-soft bg-" +
                coin.color +
                " text-" +
                coin.color +
                " font-size-18"}
            >
              <i class={coin.icon} />
            </span>
          </div>
          <div class="flex-grow-1">
            <p class="text-muted">{coin.title}</p>
            <h5>$ {coin.value}</h5>
            <p class="text-muted text-truncate mb-0">
              {coin.isIncrease ? "+ " : "- "}
              {coin.rate}{" "}
              <i
                class={coin.isIncrease
                  ? "mdi mdi-arrow-up ms-1 text-success"
                  : "mdi mdi-arrow-down ms-1 text-danger"}
              />
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
{/each}