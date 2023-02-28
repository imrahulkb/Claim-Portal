<script>
  import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    FormGroup,
    Input,
    Label,
    Row,
    Form,
  } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";

  import CKEditor from "ckeditor5-svelte";
  import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor";

  // Setting up editor prop to be sent to wrapper component
  let editor = DecoupledEditor;
  // Reference to initialised editor instance
  let editorInstance = null;
  // Setting up any initial data for the editor
  let editorData = "";

  // If needed, custom editor config can be passed through to the component
  // Uncomment the custom editor config if you need to customise the editor.
  // Note: If you don't pass toolbar object then Document editor will use default set of toolbar items.
  let editorConfig = {
    toolbar: {
      items: [
        "heading",
        "|",
        "fontfamily",
        "fontsize",
        "|",
        "alignment",
        "|",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "strikethrough",
        "underline",
        "subscript",
        "superscript",
        "|",
        "link",
        "|",
        "outdent",
        "indent",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "|",
        "code",
        "codeBlock",
        "|",
        "insertTable",
        "|",
        "uploadImage",
        "blockQuote",
        "|",
        "undo",
        "redo",
      ],
      viewportTopOffset: 30,
      shouldNotGroupWhenFull: true,
    },
  };

  function onReady({ detail: editor }) {
    // Insert the toolbar before the editable area.
    editorInstance = editor;
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }

  let idIncrement = 1;

  var storeFE = [
    // other items can go here
  ];

  function handleAddFields() {
    var l = storeFE.length; // get our current items list count
    storeFE[l] = { id: idIncrement, name: "asdsad", file: "asdsad" };

    idIncrement++; // increment our id to add additional items
  }

  function handleRemoveFields(id) {
    storeFE = storeFE.filter(function (value, index, arr) {
      if (value.id != id) return value;
    });
  }

</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Tasks" breadcrumbItem="Create Task" />

    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Create New Task</CardTitle>
            <form class="outer-repeater">
              <div data-repeater-list="outer-group" class="outer">
                <div data-repeater-item class="outer">
                  <FormGroup class="mb-4" row>
                    <Label for="taskname" class="col-form-label col-lg-2">
                      Task Name
                    </Label>
                    <Col lg="10">
                      <Input
                        id="taskname"
                        name="taskname"
                        type="text"
                        class="form-control"
                        placeholder="Enter Task Name..."
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup class="mb-4" row>
                    <Label class="col-form-label col-lg-2">
                      Task Description
                    </Label>
                    <Col lg="10">
                      <Form method="post">
                        <CKEditor
                          bind:editor
                          on:ready={onReady}
                          bind:config={editorConfig}
                          bind:value={editorData}
                        />
                      </Form>
                    </Col>
                  </FormGroup>

                  <FormGroup class="mb-4" row>
                    <Label class="col-form-label col-lg-2">Task Date</Label>
                    <Col lg="10">
                      <Row>
                        <Col md="6" class="pe-md-0 md-pe-3">
                          <input type="date" class="form-control" />
                        </Col>
                        <Col md="6" class="ps-md-0">
                          <input type="date" class="form-control" />
                        </Col>
                      </Row>
                    </Col>
                  </FormGroup>

                  <div class="inner-repeater mb-4">
                    <div class="inner form-group mb-0 row">
                      <Label class="col-form-label col-lg-2">
                        Add Team Member
                      </Label>
                      <div class="inner col-lg-10 ms-md-auto" id="repeater">
                        <div class="mb-3 row align-items-center" id="repeater-0">
                          <Col md="6">
                            <input
                              type="text"
                              class="inner form-control"
                              placeholder="Enter Name..."
                            />
                          </Col>
                          <Col md="4">
                            <div class="mt-4 mt-md-0">
                              <Input
                                type="file"
                                class="form-control"
                              />
                            </div>
                          </Col>
                          <Col md="2">
                            <div class="mt-2 mt-md-0 d-grid">
                              <Button
                                type="button"
                                color="primary"
                                class="inner"
                                block
                              >
                                Delete
                              </Button>
                            </div>
                          </Col>
                        </div>

                        {#each storeFE as field}
                          <div class="mb-3 row align-items-center">
                            <Col md="6">
                              <input
                                type="text"
                                class="inner form-control"
                                defaultValue={field.name}
                                placeholder="Enter Name..."
                              />
                            </Col>
                            <Col md="4">
                              <div class="mt-4 mt-md-0">
                                <Input
                                  type="file"
                                  class="form-control"
                                  defaultValue={field.file}
                                />
                              </div>
                            </Col>
                            <Col md="2">
                              <div class="mt-2 mt-md-0 d-grid">
                                <Button
                                  type="button"
                                  color="primary"
                                  class="inner"
                                  block
                                  on:click={handleRemoveFields(field.id)}
                                >
                                  Delete
                                </Button>
                              </div>
                            </Col>
                          </div>
                        {/each}
                        
                      </div>
                    </div>
                    <Row class="justify-content-end">
                      <Col lg="10">
                        <Button
                          type="button"
                          color="success"
                          class="inner"
                          on:click={handleAddFields}
                        >
                          Add Number
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <FormGroup class="mb-4" row>
                    <Label for="taskbudget" class="col-form-label col-lg-2">
                      Budget
                    </Label>
                    <div class="col-lg-10">
                      <Input
                        id="taskbudget"
                        name="taskbudget"
                        type="text"
                        placeholder="Enter Task Budget..."
                        class="form-control"
                      />
                    </div>
                  </FormGroup>
                </div>
              </div>
            </form>
            <Row class="justify-content-end">
              <Col lg="10">
                <Button type="submit" color="primary">Create Task</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
