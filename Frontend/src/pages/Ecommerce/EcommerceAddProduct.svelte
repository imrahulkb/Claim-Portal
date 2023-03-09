<script>
  import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
  } from "sveltestrap";
  import { Link } from "svelte-routing";
  import Select from 'svelte-select';
  
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  import Dropzone from "svelte-file-dropzone";
  
  let files = {
    accepted: [],
    rejected: [],
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }

  const options = [
    { value: "WI", label: "Wireless" },
    { value: "BE", label: "Battery life" },
    { value: "BA", label: "Bass" }
  ]

  const itemscategory = [
    { value: "Select", label: "Select" },
    { value: "FA", label: "Fashion" },
    { value: "EL", label: "Electronic" },
  ]

</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Ecommerce" breadcrumbItem="Add Product" />

    <Row>
      <Col xs="12">
        <Card>
          <CardBody>
            <CardTitle class="h4">Basic Information</CardTitle>
            <p class="card-title-desc">Fill all information below</p>

            <Form>
              <Row>
                <Col sm="6">
                  <FormGroup class="mb-3">
                    <Label for="productname">Product Name</Label>
                    <Input
                      id="productname"
                      name="productname"
                      type="text"
                      class="form-control"
                    />
                  </FormGroup>
                  <FormGroup class="mb-3">
                    <Label for="manufacturername">Manufacturer Name</Label>
                    <Input
                      id="manufacturername"
                      name="manufacturername"
                      type="text"
                      class="form-control"
                    />
                  </FormGroup>
                  <FormGroup class="mb-3">
                    <Label for="manufacturerbrand">
                      Manufacturer Brand
                    </Label>
                    <Input
                      id="manufacturerbrand"
                      name="manufacturerbrand"
                      type="text"
                      class="form-control"
                    />
                  </FormGroup>
                  <FormGroup class="mb-3">
                    <Label for="price">Price</Label>
                    <Input
                      id="price"
                      name="price"
                      type="text"
                      class="form-control"
                    />
                  </FormGroup>
                </Col>

                <Col sm="6">
                  <FormGroup class="mb-3">
                    <Label class="control-label">Category</Label>
                    <Select items={itemscategory}>
                    </Select>
                  </FormGroup>
                  <FormGroup class="select2-container mb-3">
                    <Label class="control-label">Features</Label>
                    <Select
                      placeholder="Choose ..."
                      title="features"
                      items={options}
                      isMulti={true}
                    />
                  </FormGroup>
                  <FormGroup class="mb-3">
                    <Label for="productdesc">Product Description</Label>
                    <textarea class="form-control" id="productdesc" rows="5" />
                  </FormGroup>
                </Col>
              </Row>
              <div class="d-flex flex-wrap gap-2">
                <Button type="submit" color="primary">Save Changes</Button>
                <Button type="submit" color="secondary">Cancel</Button>
              </div>
            </Form>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle class="mb-3 h4">Product Images</CardTitle>
            <Dropzone on:drop={handleFilesSelect}>
              <div>
                <div class="dz-message needsclick">
                  <div class="dz-message needsclick">
                    <div class="mb-3">
                      <i
                        class="display-4 text-muted bx bxs-cloud-upload"
                      />
                    </div>
                    <h4>Drop files here or click to upload.</h4>
                  </div>
                </div>
              </div>
            </Dropzone>
            <div class="dropzone-previews mt-3" id="file-previews">
              {#each files.accepted as item}
                <Card
                  class="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                >
                  <div class="p-2">
                    <Row class="align-items-center">
                      <Col>
                        <Link to="#" class="text-muted font-weight-bold">
                          {item.name}
                        </Link>
                        <p class="mb-0">
                          <strong>{item.size}</strong>
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              {/each}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle class="h4">Meta Data</CardTitle>
            <p class="card-title-desc">Fill all information below</p>

            <Form>
              <Row>
                <Col sm={6}>
                  <div class="mb-3">
                    <Label for="metatitle">Meta title</Label>
                    <Input
                      id="metatitle"
                      name="productname"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3">
                    <Label for="metakeywords">Meta Keywords</Label>
                    <Input
                      id="metakeywords"
                      name="manufacturername"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </Col>

                <Col sm={6}>
                  <div class="mb-3">
                    <Label for="metadescription">Meta Description</Label>
                    <textarea
                      class="form-control"
                      id="metadescription"
                      rows="5"
                    />
                  </div>
                </Col>
              </Row>

              <div class="d-flex flex-wrap gap-2">
                <Button type="submit" color="primary" class="waves-effect waves-light">
                  Save Changes
                </Button>{" "}
                <Button type="submit" color="secondary" class="waves-effect waves-light">Cancel</Button>
              </div>
              
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>