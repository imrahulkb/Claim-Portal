<script>
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
  } from "sveltestrap";
  let activeTab = "1";
  import Accordian from "./accordian.svelte";
</script>

<section class="section" id="faqs">
  <Container>
    <Row>
      <Col lg="12">
        <div class="text-center mb-5">
          <div class="small-title">FAQs</div>
          <h4>Frequently asked questions</h4>
        </div>
      </Col>
    </Row>

    <Row>
      <Col lg="12">
        <div class="vertical-nav">
          <Row>
            <Col lg="2" sm="4">
              <Nav class="flex-column" pills>
                <NavItem>
                  <NavLink
                    on:click={() => (activeTab = "1")}
                    active={activeTab == "1"}
                  >
                    <i class="bx bx-help-circle nav-icon d-block mb-2" />
                    <p class="font-weight-bold mb-0">General Questions</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    on:click={() => (activeTab = "2")}
                    active={activeTab == "2"}
                  >
                    <i class="bx bx-receipt nav-icon d-block mb-2" />
                    <p class="font-weight-bold mb-0">Token sale</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    on:click={() => (activeTab = "3")}
                    active={activeTab == "3"}
                  >
                    <i class="bx bx-timer d-block nav-icon mb-2" />
                    <p class="font-weight-bold mb-0">Roadmap</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg="10" sm="8">
              <Card>
                <CardBody>
                  <TabContent {activeTab}>
                    <TabPane tabId="1" id="buy" class="{activeTab == 1 ? 'active': ''}">
                      <h4 class="card-title mb-4">General Questions</h4>
                      <Accordian
                        question1="What is Lorem Ipsum ?"
                        answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                        question2="Why do we use it ?"
                        answer2="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                        question3="Where does it come from ?"
                        answer3="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                        question4="Where can I get some ?"
                        answer4="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                      />
                    </TabPane>

                    <TabPane tabId="2" class="{activeTab == 2 ? 'active': ''}">
                      <h4 class="card-title mb-4">Token sale</h4>

                      <Accordian
                        question1="Why do we use it ?"
                        answer1="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                        question2="What is Lorem Ipsum ?"
                        answer2="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                        question3="Where can I get some ?"
                        answer3="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                        question4="Where does it come from ?"
                        answer4="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                      />
                    </TabPane>

                    <TabPane tabId="3" class="{activeTab == 3 ? 'active': ''}">
                      <h4 class="card-title mb-4">Roadmap</h4>

                      <Accordian
                        question1="Why do we use it ?"
                        answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                        question2="What is Lorem Ipsum ?"
                        answer2="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                        question3="Where can I get some ?"
                        answer3="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                        question4="Where does it come from ?"
                        answer4="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                      />
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
</section>
