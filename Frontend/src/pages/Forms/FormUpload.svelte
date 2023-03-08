<script>
  import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Form,
    Row,
  } from "sveltestrap";
  import { Link } from "svelte-routing";
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
  <Container fluid={true}>
    <Breadcrumb title="Forms" breadcrumbItem="Form File Upload" />

    <Row>
      <Col class="col-12">
        <Card>
          <CardBody>
            <CardTitle class="h4">Dropzone</CardTitle>
            <p class="card-title-desc">
              {" "}
              DropzoneJS is an open source library that provides drag’n’drop file
              uploads with image previews.
            </p>
            <Form>
              <Dropzone on:drop={handleFilesSelect}>
                <div>
                  <div class="dz-message needsclick">
                    <div class="dz-message needsclick">
                      <div class="mb-3">
                        <i class="display-4 text-muted bx bxs-cloud-upload" />
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
            </Form>

            <div class="text-center mt-4">
              <button type="button" class="btn btn-primary">
                Send Files
              </button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>