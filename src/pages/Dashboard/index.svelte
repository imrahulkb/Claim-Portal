<script>
  import { onMount } from "svelte";
  import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    Modal,
    Input,
  } from "sveltestrap";

  import { Link } from "svelte-routing";

  //import Charts
  import StackedColumnChart from "./StackedColumnChart.svelte";

  // Pages Components
  import WelcomeComp from "./WelcomeComp.svelte";
  import MonthlyEarning from "./MonthlyEarning.svelte";
  import SocialSource from "./SocialSource.svelte";
  import ActivityComp from "./ActivityComp.svelte";
  import TopCities from "./TopCities.svelte";
  import LatestTranaction from "./LatestTranaction.svelte";

  //Import Breadcrumb
  import Breadcrumbs from "../../common/Breadcrumb.svelte";

  let subscribemodal = false;

  const togglesubscribemodal = () => (subscribemodal = !subscribemodal);

  const reports = [
    { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
    {
      title: "Revenue",
      iconClass: "bx-archive-in",
      description: "$35, 723",
    },
    {
      title: "Average Price",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
  ];

  onMount(() => {
    setTimeout(() => {
      subscribemodal = true;
    }, 2000);
  });
  
</script>

<div class="page-content">
  
  <Container fluid>
    <Breadcrumbs title="Dashboards" breadcrumbItem="Dashboard" />
    <!-- <Row>
      <Col xl="4">
        <WelcomeComp />
        <MonthlyEarning />
      </Col>
      <Col xl="8">
        <Row>
          {#each reports as report}
            <Col md="4">
              <Card class="mini-stats-wid">
                <CardBody>
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">
                        {report.title}
                      </p>
                      <h4 class="mb-0">{report.description}</h4>
                    </div>
                    <div
                      class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center"
                    >
                      <span class="avatar-title">
                        <i class={"bx " + report.iconClass + " font-size-24"} />
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          {/each}
        </Row>

        <Card>
          <CardBody>
            <div class="d-sm-flex flex-wrap">
              <CardTitle class="card-title mb-4 h4">Email Sent</CardTitle>
              <div class="ms-auto">
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <Link class="nav-link" href="/">Week</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="/">Month</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" href="/">Year</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="clearfix" />
            <StackedColumnChart />
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl="4">
        <SocialSource />
      </Col>
      <Col xl="4">
        <ActivityComp />
      </Col>
      <Col xl="4">
        <TopCities />
      </Col>
    </Row>
 -->

    <Row>
      <Col lg="12">
        <LatestTranaction />
      </Col>
    </Row>
  </Container>

</div>

<Modal
  isOpen={subscribemodal}
  role="dialog"
  autoFocus={true}
  data-toggle="modal"
  centered
  on:click={togglesubscribemodal}
>
  <div class="modal-content">
    <div class="modal-header border-bottom-0">
      <button
        type="button"
        class="btn-close"
        on:click={togglesubscribemodal}
        data-bs-dismiss="modal"
        aria-label="Close"
      />
    </div>
    <div class="modal-body">
      <div class="text-center mb-4">
        <div class="avatar-md mx-auto mb-4">
          <div class="avatar-title bg-light  rounded-circle text-primary h1">
            <i class="mdi mdi-email-open" />
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-xl-10">
            <h4 class="text-primary">Subscribe !</h4>
            <p class="text-muted font-size-14 mb-4">
              Subscribe our newletter and get notification to stay update.
            </p>

            <div class="input-group  rounded bg-light">
              <Input
                type="email"
                class="form-control bg-transparent border-0"
                placeholder="Enter Email address"
              />
              <Button color="primary" type="button" id="button-addon2">
                <i class="bx bxs-paper-plane" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>