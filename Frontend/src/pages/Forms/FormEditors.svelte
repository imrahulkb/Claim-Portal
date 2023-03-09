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
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="Forms" breadcrumbItem="Form Editors" />

    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle class="h4">CK Editor</CardTitle>
            <p class="card-title-desc">
              Super simple wysiwyg editor on Bootstrap
            </p>

            <Form method="post">
              <CKEditor
                bind:editor
                on:ready={onReady}
                bind:config={editorConfig}
                bind:value={editorData}
              />
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
