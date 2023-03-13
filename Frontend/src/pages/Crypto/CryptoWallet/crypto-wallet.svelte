<script>
  
  import { Container, Row, Col, Card, CardBody } from "sveltestrap";
  import Breadcrumb from "../../../common/Breadcrumb.svelte";
  import WalletActivities from "./walletActivities.svelte";
  import WalletStats from "./walletStats.svelte";
  import WalletOverView from "./walletOverView.svelte";

</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Crypto" breadcrumbItem="Wallet" />

    <Row>
      <Col xl="4">
        <WalletStats />
      </Col>
      <Col xl="8">
        <Row>
          <Col sm="4">
            <Card class="mini-stats-wid">
              <CardBody>
                <div class="d-flex">
                  <div class="me-3 align-self-center">
                    <i class="mdi mdi-bitcoin h2 text-warning mb-0" />
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-2">Bitcoin Wallet</p>
                    <h5 class="mb-0">
                      1.02356 BTC{" "}
                      <span class="font-size-14 text-muted"> = $ 9148.00 </span>
                    </h5>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card class="mini-stats-wid">
              <CardBody>
                <div class="d-flex">
                  <div class="me-3 align-self-center">
                    <i class="mdi mdi-ethereum h2 text-primary mb-0" />
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-2">Ethereum Wallet</p>
                    <h5 class="mb-0">
                      0.04121 ETH{" "}
                      <span class="font-size-14 text-muted"> = $ 8235.00 </span>
                    </h5>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card class="mini-stats-wid">
              <CardBody>
                <div class="d-flex">
                  <div class="me-3 align-self-center">
                    <i class="mdi mdi-litecoin h2 text-info mb-0" />
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-2">litecoin Wallet</p>
                    <h5 class="mb-0">
                      0.00356 BTC{" "}
                      <span class="font-size-14 text-muted"> = $ 4721.00 </span>
                    </h5>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <WalletOverView />
      </Col>
    </Row>

    <Row>
      <Col lg="12">
        <WalletActivities/>
      </Col>
    </Row>
  </Container>
</div>
