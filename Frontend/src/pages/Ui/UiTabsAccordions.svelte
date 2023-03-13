<script>
  import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Collapse,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    Accordion,
    AccordionItem,
    Button 
  } from "sveltestrap";

  import { Link } from 'svelte-routing';
  import Breadcrumb from "../../common/Breadcrumb.svelte";

  let activeTab = "1";
  let activeTab1 = "5";
  let customActiveTab = "1";
  let customIconActiveTab = "9";
  let verticalActiveTab = "1";
  let verticalActiveTabWithIcon= "1";
  let isOpen = true;
  let col6 = true;
  let col7 = true;
  let isHorizontalOpen = true;

  const t_col6 = () =>{
    col6 = !col6
  }
  const t_col7 = () =>{
    col7 = !col7
  }
  const t_col8 = () =>{
    col6 = !col6
    col7 = !col7
  }
  const horizontal_col = () =>{
    isHorizontalOpen = !isHorizontalOpen
  }

</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="UI Elements" breadcrumbItem="Tabs & Accordions" />

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Default Tabs</CardTitle>
            <p class="card-title-desc">
              Use the tab JavaScript plugin—include it individually or through
              the compiled{" "}
              <code class="highlighter-rouge">bootstrap.js</code>{" "}
              file—to extend our navigational tabs and pills to create tabbable panes
              of local content, even via dropdown menus.
            </p>

            <Nav tabs>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (activeTab = "1")}
                  active={activeTab == "1"}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (activeTab = "2")}
                  active={activeTab == "2"}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (activeTab = "3")}
                  active={activeTab == "3"}
                >
                  Messages
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (activeTab = "4")}
                  active={activeTab == "4"}
                >
                  Settings
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent {activeTab} class="p-3 text-muted">
              <TabPane tabId="1" class="{activeTab == "1" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Raw denim you probably haven&apos;t heard of them jean
                      shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                      master cleanse. Mustache cliche tempor, williamsburg
                      carles vegan helvetica. Reprehenderit butcher retro
                      keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui
                      irure terry richardson ex squid. Aliquip placeat salvia
                      cillum iphone. Seitan aliquip quis cardigan american
                      apparel, butcher voluptate nisi qui.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2" class="{activeTab == "2" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Food truck fixie locavore, accusamus mcsweeney&apos;s
                      marfa nulla single-origin coffee squid. Exercitation +1
                      labore velit, blog sartorial PBR leggings next level wes
                      anderson artisan four loko farm-to-table craft beer twee.
                      Qui photo booth letterpress, commodo enim craft beer
                      mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                      Homo nostrud organic, assumenda labore aesthetic magna
                      delectus mollit. Keytar helvetica VHS salvia yr, vero
                      magna velit sapiente labore stumptown. Vegan fanny pack
                      odio cillum wes anderson 8-bit.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3" class="{activeTab == "3" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Etsy mixtape wayfarers, ethical wes anderson tofu before
                      they sold out mcsweeney&apos;s organic lomo retro fanny
                      pack lo-fi farm-to-table readymade. Messenger bag gentrify
                      pitchfork tattooed craft beer, iphone skateboard locavore
                      carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                      banksy irony. Leggings gentrify squid 8-bit cred
                      pitchfork. Williamsburg banh mi whatever gluten-free,
                      carles pitchfork biodiesel fixie etsy retro mlkshk vice
                      blog. Scenester cred you probably haven&apos;t heard of
                      them, vinyl craft beer blog stumptown. Pitchfork
                      sustainable tofu synth chambray yr.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4" class="{activeTab == "4" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Trust fund seitan letterpress, keytar raw denim keffiyeh
                      etsy art party before they sold out master cleanse
                      gluten-free squid scenester freegan cosby sweater. Fanny
                      pack portland seitan DIY, art party locavore wolf cliche
                      high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                      PBR, banh mi before they sold out farm-to-table VHS viral
                      locavore cosby sweater. Lomo wolf viral, mustache
                      readymade thundercats keffiyeh craft beer marfa ethical.
                      Wolf salvia freegan, sartorial keffiyeh echo park vegan.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Justify Tabs</CardTitle>
            <p class="card-title-desc">
              Use the tab JavaScript plugin—include it individually or through
              the compiled{" "}
              <code class="highlighter-rouge">bootstrap.js</code>{" "}
              file—to extend our navigational tabs and pills to create tabbable panes
              of local content, even via dropdown menus.
            </p>

            <Nav pills class="navtab-bg nav-justified">
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (activeTab1 = "5")}
                  active={activeTab1 == "5"}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (activeTab1 = "6")}
                  active={activeTab1 == "6"}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (activeTab1 = "7")}
                  active={activeTab1 == "7"}
                >
                  Messages
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (activeTab1 = "8")}
                  active={activeTab1 == "8"}
                >
                  Settings
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent {activeTab1} class="p-3 text-muted">
              <TabPane tabId="5" class="{activeTab1 == "5" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Raw denim you probably haven&apos;t heard of them jean
                      shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                      master cleanse. Mustache cliche tempor, williamsburg
                      carles vegan helvetica. Reprehenderit butcher retro
                      keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui
                      irure terry richardson ex squid. Aliquip placeat salvia
                      cillum iphone. Seitan aliquip quis cardigan american
                      apparel, butcher voluptate nisi qui.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="6" class="{activeTab1 == "6" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Food truck fixie locavore, accusamus mcsweeney&apos;s
                      marfa nulla single-origin coffee squid. Exercitation +1
                      labore velit, blog sartorial PBR leggings next level wes
                      anderson artisan four loko farm-to-table craft beer twee.
                      Qui photo booth letterpress, commodo enim craft beer
                      mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                      Homo nostrud organic, assumenda labore aesthetic magna
                      delectus mollit. Keytar helvetica VHS salvia yr, vero
                      magna velit sapiente labore stumptown. Vegan fanny pack
                      odio cillum wes anderson 8-bit.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="7" class="{activeTab1 == "7" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Etsy mixtape wayfarers, ethical wes anderson tofu before
                      they sold out mcsweeney&apos;s organic lomo retro fanny
                      pack lo-fi farm-to-table readymade. Messenger bag gentrify
                      pitchfork tattooed craft beer, iphone skateboard locavore
                      carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                      banksy irony. Leggings gentrify squid 8-bit cred
                      pitchfork. Williamsburg banh mi whatever gluten-free,
                      carles pitchfork biodiesel fixie etsy retro mlkshk vice
                      blog. Scenester cred you probably haven&apos;t heard of
                      them, vinyl craft beer blog stumptown. Pitchfork
                      sustainable tofu synth chambray yr.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="8" class="{activeTab1 == "8" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Trust fund seitan letterpress, keytar raw denim keffiyeh
                      etsy art party before they sold out master cleanse
                      gluten-free squid scenester freegan cosby sweater. Fanny
                      pack portland seitan DIY, art party locavore wolf cliche
                      high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                      PBR, banh mi before they sold out farm-to-table VHS viral
                      locavore cosby sweater. Lomo wolf viral, mustache
                      readymade thundercats keffiyeh craft beer marfa ethical.
                      Wolf salvia freegan, sartorial keffiyeh echo park vegan.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Custom Tabs With Icon</CardTitle>
            <p class="card-title-desc">Example of custom tabs with icon</p>

            <Nav class="icon-tab nav-justified nav-pills">
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (customIconActiveTab = "9")}
                  active={customIconActiveTab == "9"}
                >
                  <span class="d-none d-sm-block">
                    <i class="fas fa-home" /> Home
                  </span>
                  <span class="d-block d-sm-none">
                    <i class="fas fa-home" />
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (customIconActiveTab = "10")}
                  active={customIconActiveTab == "10"}
                >
                  <span class="d-none d-sm-block">
                    <i class="fas fa-user" /> Profile
                  </span>
                  <span class="d-block d-sm-none">
                    <i class="fas fa-user" />
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (customIconActiveTab = "11")}
                  active={customIconActiveTab == "11"}
                >
                  <span class="d-none d-sm-block">
                    <i class="fab fa-facebook-messenger" />{" "}
                    Messages
                  </span>
                  <span class="d-block d-sm-none">
                    <i class="fab fa-facebook-messenger" />
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (customIconActiveTab = "12")}
                  active={customIconActiveTab == "12"}
                >
                  <span class="d-none d-sm-block">
                    <i class="fas fa-cog" /> Settings
                  </span>
                  <span class="d-block d-sm-none">
                    <i class="fas fa-cog" />
                  </span>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={customIconActiveTab} class="p-3 text-muted">
              <TabPane tabId="1" class="{customIconActiveTab == "9" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Raw denim you probably haven&apos;t heard of them jean
                      shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                      master cleanse. Mustache cliche tempor, williamsburg
                      carles vegan helvetica. Reprehenderit butcher retro
                      keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui
                      irure terry richardson ex squid. Aliquip placeat salvia
                      cillum iphone. Seitan aliquip quis cardigan american
                      apparel, butcher voluptate nisi qui.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2" class="{customIconActiveTab == "10" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Food truck fixie locavore, accusamus mcsweeney&apos;s
                      marfa nulla single-origin coffee squid. Exercitation +1
                      labore velit, blog sartorial PBR leggings next level wes
                      anderson artisan four loko farm-to-table craft beer twee.
                      Qui photo booth letterpress, commodo enim craft beer
                      mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                      Homo nostrud organic, assumenda labore aesthetic magna
                      delectus mollit. Keytar helvetica VHS salvia yr, vero
                      magna velit sapiente labore stumptown. Vegan fanny pack
                      odio cillum wes anderson 8-bit.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3" class="{customIconActiveTab == "11" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Etsy mixtape wayfarers, ethical wes anderson tofu before
                      they sold out mcsweeney&apos;s organic lomo retro fanny
                      pack lo-fi farm-to-table readymade. Messenger bag gentrify
                      pitchfork tattooed craft beer, iphone skateboard locavore
                      carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                      banksy irony. Leggings gentrify squid 8-bit cred
                      pitchfork. Williamsburg banh mi whatever gluten-free,
                      carles pitchfork biodiesel fixie etsy retro mlkshk vice
                      blog. Scenester cred you probably haven&apos;t heard of
                      them, vinyl craft beer blog stumptown. Pitchfork
                      sustainable tofu synth chambray yr.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4" class="{customIconActiveTab == "12" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Trust fund seitan letterpress, keytar raw denim keffiyeh
                      etsy art party before they sold out master cleanse
                      gluten-free squid scenester freegan cosby sweater. Fanny
                      pack portland seitan DIY, art party locavore wolf cliche
                      high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                      PBR, banh mi before they sold out farm-to-table VHS viral
                      locavore cosby sweater. Lomo wolf viral, mustache
                      readymade thundercats keffiyeh craft beer marfa ethical.
                      Wolf salvia freegan, sartorial keffiyeh echo park vegan.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Custom Tabs</CardTitle>
            <p class="card-title-desc">Example of custom tabs</p>

            <Nav tabs class="nav-tabs-custom nav-justified">
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (customActiveTab = "1")}
                  active={customActiveTab == "1"}
                >
                  <span class="d-block d-sm-none">
                    <i class="fas fa-home" />
                  </span>
                  <span class="d-none d-sm-block">Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (customActiveTab = "2")}
                  active={customActiveTab == "2"}
                >
                  <span class="d-block d-sm-none">
                    <i class="far fa-user" />
                  </span>
                  <span class="d-none d-sm-block">Profile</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (customActiveTab = "3")}
                  active={customActiveTab == "3"}
                >
                  <span class="d-block d-sm-none">
                    <i class="far fa-envelope" />
                  </span>
                  <span class="d-none d-sm-block">Messages</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style="cursor: pointer"
                  on:click={() => (customActiveTab = "4")}
                  active={customActiveTab == "4"}
                >
                  <span class="d-block d-sm-none">
                    <i class="fas fa-cog" />
                  </span>
                  <span class="d-none d-sm-block">Settings</span>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={customActiveTab} class="p-3 text-muted">
              <TabPane tabId="1" class="{customActiveTab == "1" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Raw denim you probably haven&apos;t heard of them jean
                      shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                      master cleanse. Mustache cliche tempor, williamsburg
                      carles vegan helvetica. Reprehenderit butcher retro
                      keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui
                      irure terry richardson ex squid. Aliquip placeat salvia
                      cillum iphone. Seitan aliquip quis cardigan american
                      apparel, butcher voluptate nisi qui.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2" class="{customActiveTab == "2" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Food truck fixie locavore, accusamus mcsweeney&apos;s
                      marfa nulla single-origin coffee squid. Exercitation +1
                      labore velit, blog sartorial PBR leggings next level wes
                      anderson artisan four loko farm-to-table craft beer twee.
                      Qui photo booth letterpress, commodo enim craft beer
                      mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                      Homo nostrud organic, assumenda labore aesthetic magna
                      delectus mollit. Keytar helvetica VHS salvia yr, vero
                      magna velit sapiente labore stumptown. Vegan fanny pack
                      odio cillum wes anderson 8-bit.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3" class="{customActiveTab == "3" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Etsy mixtape wayfarers, ethical wes anderson tofu before
                      they sold out mcsweeney&apos;s organic lomo retro fanny
                      pack lo-fi farm-to-table readymade. Messenger bag gentrify
                      pitchfork tattooed craft beer, iphone skateboard locavore
                      carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                      banksy irony. Leggings gentrify squid 8-bit cred
                      pitchfork. Williamsburg banh mi whatever gluten-free,
                      carles pitchfork biodiesel fixie etsy retro mlkshk vice
                      blog. Scenester cred you probably haven&apos;t heard of
                      them, vinyl craft beer blog stumptown. Pitchfork
                      sustainable tofu synth chambray yr.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4" class="{customActiveTab == "4" ? 'active': ''}">
                <Row>
                  <Col sm="12">
                    <CardText class="mb-0">
                      Trust fund seitan letterpress, keytar raw denim keffiyeh
                      etsy art party before they sold out master cleanse
                      gluten-free squid scenester freegan cosby sweater. Fanny
                      pack portland seitan DIY, art party locavore wolf cliche
                      high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                      PBR, banh mi before they sold out farm-to-table VHS viral
                      locavore cosby sweater. Lomo wolf viral, mustache
                      readymade thundercats keffiyeh craft beer marfa ethical.
                      Wolf salvia freegan, sartorial keffiyeh echo park vegan.
                    </CardText>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Vertical Nav Tabs</CardTitle>
            <p class="card-title-desc">Example of Vertical nav tabs</p>
            <Row>
              <Col md="3">
                <Nav pills class="flex-column">
                  <NavItem>
                    <NavLink
                      style="cursor: pointer"
                      on:click={() => (verticalActiveTab = "1")}
                      active={verticalActiveTab == "1"}
                      class="mb-2"
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style="cursor: pointer"
                      on:click={() => (verticalActiveTab = "2")}
                      active={verticalActiveTab == "2"}
                      class="mb-2"
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style="cursor: pointer"
                      on:click={() => (verticalActiveTab = "3")}
                      active={verticalActiveTab == "3"}
                      class="mb-2"
                    >
                      Messages
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style="cursor: pointer"
                      on:click={() => (verticalActiveTab = "4")}
                      active={verticalActiveTab == "4"}
                      class="mb-2"
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="9">
                <TabContent
                  activeTab={verticalActiveTab}
                  class="text-muted mt-4 mt-md-0"
                >
                  <TabPane tabId="1" class="{verticalActiveTab == "1" ? 'active': ''}">
                    <p>
                      Raw denim you probably haven&apos;t heard of them jean
                      shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                      master cleanse. Mustache cliche tempor, williamsburg
                      carles vegan helvetica. Reprehenderit butcher retro
                      keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui
                      irure terry richardson ex squid. Aliquip placeat salvia
                      cillum iphone. Seitan aliquip quis cardigan.
                    </p>
                    <p>
                      Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid.
                    </p>
                  </TabPane>
                  <TabPane tabId="2" class="{verticalActiveTab == "2" ? 'active': ''}">
                    <p>
                      Food truck fixie locavore, accusamus mcsweeney&apos;s
                      marfa nulla single-origin coffee squid. Exercitation +1
                      labore velit, blog sartorial PBR leggings next level wes
                      anderson artisan four loko farm-to-table craft beer twee.
                      Qui photo booth letterpress, commodo enim craft beer
                      mlkshk.
                    </p>
                    <p class="mb-0">
                      {" "}
                      Qui photo booth letterpress, commodo enim craft beer mlkshk
                      aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
                      organic, assumenda labore aesthetic magna 8-bit
                    </p>
                  </TabPane>
                  <TabPane tabId="3" class="{verticalActiveTab == "3" ? 'active': ''}">
                    <p>
                      Etsy mixtape wayfarers, ethical wes anderson tofu before
                      they sold out mcsweeney&apos;s organic lomo retro fanny
                      pack lo-fi farm-to-table readymade. Messenger bag gentrify
                      pitchfork tattooed craft beer, iphone skateboard locavore
                      carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                      banksy irony. Leggings gentrify squid 8-bit cred.
                    </p>
                    <p class="mb-0">
                      DIY synth PBR banksy irony. Leggings gentrify squid 8-bit
                      cred pitchfork. Williamsburg banh mi whatever gluten-free.
                    </p>
                  </TabPane>

                  <TabPane tabId="4" class="{verticalActiveTab == "4" ? 'active': ''}">
                    <p>
                      Trust fund seitan letterpress, keytar raw denim keffiyeh
                      etsy art party before they sold out master cleanse
                      gluten-free squid scenester freegan cosby sweater. Fanny
                      pack portland seitan DIY, art party locavore wolf cliche
                      high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                      PBR, banh mi before they sold out farm-to-table.
                    </p>
                    <p class="mb-0">
                      Fanny pack portland seitan DIY, art party locavore wolf
                      cliche high life echo park Austin. Cred vinyl keffiyeh DIY
                      salvia PBR, banh mi before they sold out farm-to-table.
                    </p>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Vertical Nav Tabs With Icon</CardTitle>
            <p class="card-title-desc">
              Example of Vertical nav tabs with icon
            </p>
            <Row>
              <Col md="3">
                <Nav class="flex-column vertical-icon nav-pills">
                  <NavItem>
                    <NavLink
                      style="cursor: pointer"
                      on:click={() => (verticalActiveTabWithIcon = "1")}
                      active={verticalActiveTabWithIcon == "1"}
                      class="mb-2"
                    >
                      <i class="fas fa-home" /> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      on:click={() => (verticalActiveTabWithIcon = "2")}
                      active={verticalActiveTabWithIcon == "2"}
                      class="mb-2"
                    >
                      <i class="fas fa-user" /> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      on:click={() => (verticalActiveTabWithIcon = "3")}
                      active={verticalActiveTabWithIcon == "3"}
                      class="mb-2"
                    >
                      <i class="fab fa-facebook-messenger" />{" "}
                      Messages
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      on:click={() => (verticalActiveTabWithIcon = "4")}
                      active={verticalActiveTabWithIcon == "4"}
                      class="mb-2"
                    >
                      <i class="fas fa-cog" /> Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="9">
                <TabContent
                  activeTab={verticalActiveTabWithIcon}
                  class="text-muted mt-4 mt-md-0"
                >
                  <TabPane tabId="1" class="{verticalActiveTabWithIcon == "1" ? 'active': ''}">
                    <p>
                      Raw denim you probably haven&apos;t heard of them jean
                      shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                      master cleanse. Mustache cliche tempor, williamsburg
                      carles vegan helvetica. Reprehenderit butcher retro
                      keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui
                      irure terry richardson ex squid. Aliquip placeat salvia
                      cillum iphone. Seitan aliquip quis cardigan.
                    </p>
                    <p>
                      Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid.
                    </p>
                  </TabPane>
                  <TabPane tabId="2" class="{verticalActiveTabWithIcon == "2" ? 'active': ''}">
                    <p>
                      Food truck fixie locavore, accusamus mcsweeney&apos;s
                      marfa nulla single-origin coffee squid. Exercitation +1
                      labore velit, blog sartorial PBR leggings next level wes
                      anderson artisan four loko farm-to-table craft beer twee.
                      Qui photo booth letterpress, commodo enim craft beer
                      mlkshk.
                    </p>
                    <p class="mb-0">
                      {" "}
                      Qui photo booth letterpress, commodo enim craft beer mlkshk
                      aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
                      organic, assumenda labore aesthetic magna 8-bit
                    </p>
                  </TabPane>
                  <TabPane tabId="3" class="{verticalActiveTabWithIcon == "3" ? 'active': ''}">
                    <p>
                      Etsy mixtape wayfarers, ethical wes anderson tofu before
                      they sold out mcsweeney&apos;s organic lomo retro fanny
                      pack lo-fi farm-to-table readymade. Messenger bag gentrify
                      pitchfork tattooed craft beer, iphone skateboard locavore
                      carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                      banksy irony. Leggings gentrify squid 8-bit cred.
                    </p>
                    <p class="mb-0">
                      DIY synth PBR banksy irony. Leggings gentrify squid 8-bit
                      cred pitchfork. Williamsburg banh mi whatever gluten-free.
                    </p>
                  </TabPane>

                  <TabPane tabId="4" class="{verticalActiveTabWithIcon == "4" ? 'active': ''}">
                    <p>
                      Trust fund seitan letterpress, keytar raw denim keffiyeh
                      etsy art party before they sold out master cleanse
                      gluten-free squid scenester freegan cosby sweater. Fanny
                      pack portland seitan DIY, art party locavore wolf cliche
                      high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                      PBR, banh mi before they sold out farm-to-table.
                    </p>
                    <p class="mb-0">
                      Fanny pack portland seitan DIY, art party locavore wolf
                      cliche high life echo park Austin. Cred vinyl keffiyeh DIY
                      salvia PBR, banh mi before they sold out farm-to-table.
                    </p>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Card>
        <CardBody>
          <Row>
            <Col lg={6}>
              <h5 class="font-size-14">Accordions</h5>
              <p class="card-title-desc">
                Extend the default collapse behavior to create an accordion.
              </p>

              <Accordion class="custom-accordion">
                <AccordionItem active>
                  <div slot="header">Collapsible Group Item #1</div>
                  <div class="text-muted">
                    <strong class="text-dark">This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </AccordionItem>
                <AccordionItem>
                  <div slot="header">Collapsible Group Item #2</div>
                  <div class="text-muted">
                    <strong class="text-dark">This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </AccordionItem>
                <AccordionItem>
                  <div slot="header">Collapsible Group Item #3</div>
                  <div class="text-muted">
                    <strong class="text-dark">This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </AccordionItem>
              </Accordion>
              
            </Col>
            <Col xl={6}>
              <div class="mt-4">
                <CardTitle class="h4">Flush</CardTitle>
                <p class="card-title-desc">
                  Add <code>.accordion-flush</code> to remove the default
                  <code>background-color</code>, some borders, and some rounded
                  corners to render accordions edge-to-edge with their parent
                  container.
                </p>

                <Accordion class="custom-accordion" flush>
                  <AccordionItem active>
                    <div slot="header">Collapsible Group Item #1</div>
                    <div class="text-muted">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice.</div>
                  </AccordionItem>
                  <AccordionItem>
                    <div slot="header">Collapsible Group Item #2</div>
                    <div class="text-muted">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice.</div>
                  </AccordionItem>
                  <AccordionItem>
                    <div slot="header">Collapsible Group Item #3</div>
                    <div class="text-muted">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice.</div>
                  </AccordionItem>
                </Accordion>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Row>

    <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle class="h4 mb-0">Collapse</CardTitle>
              <Row>
                <Col xl="6">
                  <div class="mt-4">
                    <h5 class="font-size-14">Example</h5>
                    <p class="card-title-desc">
                      You can use a link with the{" "}
                      <code class="highlighter-rouge">href</code>{" "}
                      attribute, or a button with the{" "}
                      <code class="highlighter-rouge">
                        data-target
                      </code>{" "}
                      attribute. In both cases, the{" "}
                      <code class="highlighter-rouge">
                        {" "}
                        data-toggle=&quot;collapse&ldquo;
                      </code>{" "}
                      is required.
                    </p>

                    <div class="d-flex gap-2 flex-wrap mb-3">
                      <Button
                        on:click={() => (isOpen = !isOpen)}
                        color="primary"
                        style="cursor: pointer"
                        class="mo-mb-2"
                      >
                        Link with href{" "}
                      </Button>
                      <Button
                        on:click={() => (isOpen = !isOpen)}
                        color="primary"
                        class="mo-mb-2"
                        type="button"
                        style="cursor: pointer"
                      >
                        Button with data-target
                      </Button>
                    </div>
                    <Collapse {isOpen}>
                      <Card>
                        <CardBody>
                          Anim pariatur cliche reprehenderit, enim eiusmod
                          high life accusamus terry richardson ad squid.
                          Nihil anim keffiyeh helvetica, craft beer labore
                          wes anderson cred nesciunt sapiente ea proident.
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                </Col>
                <Col xl="6">
                  <div class="mt-4">
                    <h5 class="font-size-14">Multiple targets</h5>
                    <p class="card-title-desc">
                      A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its <code>href</code> or <code>data-bs-target</code> attribute.
                    </p>

                    <div class="d-flex gap-2 flex-wrap mb-3">
                      <button
                        to="#"
                        on:click={t_col6}
                        style="cursor: pointer"
                        class="btn btn-primary"
                      >
                        Toggle first element
                      </button>
                      <button
                        on:click={t_col7}
                        class="btn btn-primary"
                        type="button"
                        style="cursor: pointer"
                      >
                        Toggle second element
                      </button>

                      <button
                      on:click={t_col8}
                        class="btn btn-primary"
                        type="button"
                        style="cursor: pointer"
                      >
                        Toggle both element
                      </button>
                    </div>
                    <div class="row">
                      <div class="col">
                        <Collapse isOpen={col6}>
                          <Card>
                            <CardBody class="border shadow-none text-muted mb-0">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </CardBody>
                          </Card>
                        </Collapse>
                      </div>
                      <div class="col">
                        <Collapse isOpen={col7}>
                          <Card>
                            <CardBody class="border shadow-none text-muted mb-0">
                              Anim pariatur cliche reprehenderit, enim eiusmod high
                              life accusamus terry richardson ad squid. Nihil anim
                              keffiyeh helvetica, craft beer labore wes anderson
                              cred nesciunt sapiente ea proident.
                            </CardBody>
                          </Card>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row> 
      <Row>
        <Col sm={6}>
          <Card>
            <CardBody>
                <h4 class="card-title">Horizontal Collapse</h4>
                <p class="card-title-desc">The collapse plugin also supports horizontal collapsing. Add the <code>horizontal</code> modifier tag to transition the <code>width</code> instead of <code>height</code> and set a <code>width</code> on the immediate child element.</p>

                <p>
                    <button class="btn btn-primary" type="button"  on:click={horizontal_col}>
                        Toggle width collapse
                    </button>
                </p>
                <div style="min-height: 110px;">
                  <Collapse isOpen={isHorizontalOpen} horizontal>
                    <Card body style="width: 300px">
                      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when
                      triggered.
                    </Card>
                  </Collapse>
                </div><!-- end accordion -->

            </CardBody>
        </Card>
        </Col>
      </Row>

  </Container>
</div>