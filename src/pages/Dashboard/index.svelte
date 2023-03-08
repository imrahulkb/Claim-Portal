<script>
  import {
    Container,
    Row,
    Col,
    Button,
   
    Modal,
    Input,
  } from "sveltestrap";


  //import Charts

  // Pages Components
 
  import LatestTranaction from "./LatestTranaction.svelte";

  //Import Breadcrumb
  import Breadcrumbs from "../../common/Breadcrumb.svelte";

  let subscribemodal = false;

  const togglesubscribemodal = () => (subscribemodal = !subscribemodal);

  

  
</script>

<div class="page-content">
  
  <Container fluid>
    <Breadcrumbs title="Dashboards" breadcrumbItem="Dashboard" />
   
    <Row>
      <Col lg="12">
        <LatestTranaction />
      </Col>
    </Row>
  </Container>

</div>

