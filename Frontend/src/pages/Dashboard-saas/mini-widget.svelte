<script>
  import { Card, Col, CardBody } from "sveltestrap";

  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "Orders",
      value: "1,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-archive-in",
      title: "Revenue",
      value: "$ 28,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Average Price",
      value: "$ 16.2",
      badgeValue: "0%",
      color: "warning",
      desc: "From previous period",
    },
  ];
  
</script>

{#each reports as report}
  <Col sm="4">
    <Card>
      <CardBody>
        <div class="d-flex align-items-center mb-3">
          <div class="avatar-xs me-3">
            <span
              class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18"
            >
              <i class={report.icon} />
            </span>
          </div>
          <h5 class="font-size-14 mb-0">{report.title}</h5>
        </div>
        <div class="text-muted mt-4">
          <h4>
            {report.value}{" "}
            <i class="mdi mdi-chevron-up ms-1 text-success" />
          </h4>
          <div class="d-flex">
            <span class={"badge badge-soft-" + report.color + " font-size-12"}>
              {" "}
              {report.badgeValue}{" "}
            </span>{" "}
            <span class="ms-2 text-truncate">{report.desc}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
{/each}
