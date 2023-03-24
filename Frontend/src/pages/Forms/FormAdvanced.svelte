<script>
  import {
    Card,
    CardBody,
    Col,
    Container,
    FormGroup,
    Label,
    Row,
  } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  import Select from "svelte-select";

  const optionGroup = [
    { value: "chocolate", label: "Chocolate", group: "Sweet" },
    { value: "pizza", label: "Pizza", group: "Savory" },
    { value: "cake", label: "Cake", group: "Sweet" },
    { value: "chips", label: "Chips", group: "Savory" },
    { value: "ice-cream", label: "Ice Cream", group: "Sweet" },
  ];

  const optionGroup1 = [
    { label: "Mustard", value: "Mustard", group: "Picnic" },
    { label: "Ketchup", value: "Ketchup", group: "Picnic" },
    { label: "Relish", value: "Relish", group: "Picnic" },
    { label: "Tent", value: "Tent", group: "Camping" },
    { label: "Flashlight", value: "Flashlight", group: "Camping" },
    { label: "Toilet Paper", value: "Toilet Paper", group: "Camping" },
  ];

  const optionGroup2 = [
    { label: "Mustard", value: "Mustard", group: "Picnic" },
    { label: "Ketchup", value: "Ketchup", group: "Picnic" },
    { label: "Relish", value: "Relish", group: "Picnic" },
    { label: "Tent", value: "Tent", group: "Camping" },
    { label: "Flashlight", value: "Flashlight", group: "Camping" },
    { label: "Toilet Paper", value: "Toilet Paper", group: "Camping" },
  ];

  const groupBy = (item) => item.group;
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="Forms" breadcrumbItem="Form Advanced" />

    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <h4 class="card-title">Select2</h4>
            <p class="card-title-desc">
              A mobile and touch friendly input spinner component for Bootstrap
            </p>

            <form>
              <Row>
                <Col lg="6">
                  <div class="mb-3 select2-container">
                    <Label>Single Select</Label>
                    <Select items={optionGroup} />
                  </div>
                  <div class="mb-3 select2-container">
                    <Label class="control-label">Multiple Select</Label>
                    <Select
                      isMulti={true}
                      items={optionGroup}
                      {groupBy}
                    />
                  </div>

                  <FormGroup class="select2-container">
                    <Label>Search Disable</Label>
                    <Select
                      isMulti={true}
                      items={optionGroup}
                      {groupBy}
                      isDisabled={true}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6">
                  <FormGroup class="mb-3 ajax-select select2-container">
                    <Label>Ajax (remote data)</Label>
                    <Select
                      isMulti={true}
                      items={optionGroup1}
                      {groupBy}
                    />
                  </FormGroup>
                  <FormGroup
                    class="mb-3 mt-3 mt-lg-0 templating-select select2-container"
                  >
                    <Label class="control-label">Templating</Label>
                    <Select
                      isMulti={true}
                      items={optionGroup2}
                      {groupBy}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
