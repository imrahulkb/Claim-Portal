<script>
    import {
      Row,
      Col,
      Card,
      CardBody,
    } from "sveltestrap";

    import { Link } from "svelte-routing"

</script>

<Card class="overflow-hidden">
  <div class="bg-primary bg-soft">
    <Row>
      <Col xs="7">
        <div class="text-primary p-3">
          <h5 class="text-primary">Welcome Back !</h5>
          <p>Skote Dashboard</p>
        </div>
      </Col>
      <Col xs="5" class="align-self-end">
        <img src="/assets/images/profile-img.png" alt="" class="img-fluid" />
      </Col>
    </Row>
  </div>
  <CardBody class="pt-0">
    <Row>
      <Col sm="4">
        <div class="avatar-md profile-user-wid mb-4">
          <img
            src="/assets/images/users/avatar-1.jpg"
            alt="avatar-1"
            class="img-thumbnail rounded-circle"
          />
        </div>
        <h5 class="font-size-15 text-truncate">Henry Price</h5>
        <p class="text-muted mb-0 text-truncate">UI/UX Designer</p>
      </Col>

      <Col sm="8">
        <div class="pt-4">
          <Row>
            <Col xs="6">
              <h5 class="font-size-15">125</h5>
              <p class="text-muted mb-0">Projects</p>
            </Col>
            <Col xs="6">
              <h5 class="font-size-15">$1245</h5>
              <p class="text-muted mb-0">Revenue</p>
            </Col>
          </Row>
          <div class="mt-4">
            <Link
              to=""
              class="btn btn-primary btn-sm"
            >
              View Profile {" "}<i class="mdi mdi-arrow-right ms-1"/>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  </CardBody>
</Card>