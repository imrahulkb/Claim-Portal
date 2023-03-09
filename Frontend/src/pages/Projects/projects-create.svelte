<script>
  import { Link } from "svelte-routing";
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Label,
    Button,
  } from "sveltestrap";
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
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Projects" breadcrumbItem="Create New" />

    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Create New Project</CardTitle>
            <form>
              <Row class="mb-4">
                <Label for="projectname" class="col-form-label col-lg-2">
                  Project Name
                </Label>
                <Col lg="10">
                  <input
                    id="projectname"
                    name="projectname"
                    type="text"
                    class="form-control"
                    placeholder="Enter Project Name..."
                  />
                </Col>
              </Row>
              <Row class="mb-4">
                <Label for="projectdesc" class="col-form-label col-lg-2">
                  Project Description
                </Label>
                <Col lg="10">
                  <textarea
                    class="form-control"
                    id="projectdesc"
                    rows="3"
                    placeholder="Enter Project Description..."
                  />
                </Col>
              </Row>

              <Row class="mb-4">
                <Label class="col-form-label col-lg-2">Project Date</Label>
                <div class="col-lg-10">
                  <div
                    class="input-daterange input-group"
                    id="project-date-inputgroup"
                  >
                  <input class="form-control" type="date" name="start" value="" placeholder="Start Date" />
                  <input class="form-control" type="date" name="end" value="" placeholder="End Date" />
                  </div>
                </div>
              </Row>

              <Row class="mb-4">
                <label for="projectbudget" class="col-form-label col-lg-2">
                  Budget
                </label>
                <Col lg="10">
                  <input
                    id="projectbudget"
                    name="projectbudget"
                    type="text"
                    placeholder="Enter Project Budget..."
                    class="form-control"
                  />
                </Col>
              </Row>

              <Row class="mb-4">
                <Label class="col-form-label col-lg-2">Attached Files</Label>
                <Col lg="10">
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
                </Col>
              </Row>
              <Row class="justify-content-end">
                <Col lg="10">
                  <Button type="submit" color="primary">Create Project</Button>
                </Col>
              </Row>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>