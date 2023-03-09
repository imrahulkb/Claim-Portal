<script>
  import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Row,
    Label,
    Input,
    Button,
  } from "sveltestrap";
  import Breadcrumb from "../../../common/Breadcrumb.svelte";
  //common
  import TextualInputs from "./TextualInputs.svelte";
</script>

<div class="page-content">
  <Container fluid={true}>
    <Breadcrumb title="Forms" breadcrumbItem="Form Elements" />

    <Row>
      <Col>
        <TextualInputs />
      </Col>
    </Row>

    <Row>
      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Sizing</CardTitle>
            <p class="card-title-desc">
              Set heights using classes like{" "}
              <code>.form-control-lg</code> and{" "}
              <code>.form-control-sm</code>.
            </p>
            <div>
              <div class="mb-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Default input"
                />
              </div>
              <div class="mb-4">
                <input
                  class="form-control form-control-sm"
                  type="text"
                  placeholder=".form-control-sm"
                />
              </div>
              <div>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder=".form-control-lg"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Range Inputs</CardTitle>
            <p class="card-title-desc">
              Create custom <code>&lt;input type=&quot;range&ldquo;&gt;</code>
              controls with <code>.form-range</code>.
            </p>

            <Row class="mt-2">
              <Col lg={6}>
                <div>
                  <label for="customRange1" class="form-label"
                    >Example range</label
                  >
                  <input type="range" class="form-range" id="customRange1" />
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <label for="disabledRange" class="form-label"
                    >Disabled Eange</label
                  >
                  <input
                    type="range"
                    class="form-range"
                    id="disabledRange"
                    disabled
                  />
                </div>
              </Col>
            </Row>

            <Row class="mt-2">
              <Col lg={6}>
                <div class="mt-4">
                  <h5 class="font-size-14">Min and max</h5>
                  <p class="card-title-desc">
                    Range inputs have implicit values for min and max—0 and 100,
                    respectively.
                  </p>
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="5"
                    id="customRange2"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div class="mt-4">
                  <h5 class="font-size-14">Steps</h5>
                  <p class="card-title-desc">
                    By default, range inputs “snap” to integer values. To change
                    this, you can specify a <code>step</code> value.
                  </p>
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="5"
                    id="customRange2"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Checkboxes</CardTitle>

            <Row>
              <Col xl={3} sm={6}>
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1" />
                    Form Checkboxes
                  </h5>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      Form Checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                      checked
                    />
                    <label class="form-check-label" for="defaultCheck2">
                      Form Checkbox checked
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1" />Form
                    Checkboxes Right
                  </h5>
                  <div class="form-check form-check-right mb-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="CustomCheck1"
                    />
                    <label class="form-check-label" for="checkbox-right">
                      Form Checkbox Right
                    </label>
                  </div>

                  <div class="form-check form-check-right">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck2"
                    />
                    <label class="form-check-label" for="customCheck2">
                      Form Checkbox Right checked
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1" />{" "}
                    Form Checkboxes colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>.form-check-* </code> for a color Checkboxes
                  </p>

                  <div>
                    <div class="form-check form-check-primary mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheckcolor1"
                        checked
                      />
                      <label class="form-check-label" for="customCheckcolor1">
                        Checkbox Primary
                      </label>
                    </div>
                    <div class="form-check  form-check-success mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheckcolor2"
                        checked
                      />
                      <label class="form-check-label" for="customCheckcolor2">
                        Checkbox Success
                      </label>
                    </div>
                    <div class="form-check form-check-info mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheckcolor3"
                        checked
                      />
                      <label class="form-check-label" for="customCheckcolor3">
                        Checkbox Info
                      </label>
                    </div>
                    <div class="form-check  form-check-warning mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheckcolor4"
                        checked
                      />
                      <label class="form-check-label" for="customCheckcolor4">
                        Checkbox Warning
                      </label>
                    </div>
                    <div class="form-check form-check-danger">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheckcolor5"
                        checked
                      />
                      <label class="form-check-label" for="customCheckcolor5">
                        Checkbox Danger
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1" />{" "}
                    Custom Checkboxes Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>form-check-outline</code> &{" "}
                    <code>.form-check-* </code> for a color Checkboxes
                  </p>

                  <div>
                    <div
                      class="form-check form-check-outline form-check-primary mb-3"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheck-outlinecolor1"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="customCheck-outlinecolor1"
                      >
                        Checkbox Outline Primary
                      </label>
                    </div>
                    <div
                      class="form-check form-check-outline form-check-success mb-3"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheck-outlinecolor2"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="customCheck-outlinecolor2"
                      >
                        Checkbox Outline Success
                      </label>
                    </div>
                    <div
                      class="form-check form-check-outline form-check-info mb-3"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheck-outlinecolor3"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="customCheck-outlinecolor3"
                      >
                        Checkbox Outline Info
                      </label>
                    </div>
                    <div
                      class="form-check form-check-outline  form-check-warning mb-3"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheck-outlinecolor4"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="customCheck-outlinecolor4"
                      >
                        Checkbox Outline Warning
                      </label>
                    </div>
                    <div
                      class="form-check form-check-outline form-check-danger"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheck-outlinecolor5"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="customCheck-outlinecolor5"
                      >
                        Checkbox Outline Danger
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Radios</CardTitle>

            <Row>
              <Col xl={3} sm={6}>
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Form Radios</h5>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      Form Radio checked
                    </label>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Form Radios Right</h5>
                  <div>
                    <div class="form-check form-check-right mb-3">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="customRadio1">
                        Form Radio Right
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="form-check form-check-right">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        class="form-check-input"
                        checked
                      />
                      <label class="form-check-label" for="customRadio2">
                        Form Radio Right checked
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1" />{" "}
                    Form Radio colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>.form-radio-* </code> for a color Radios
                  </p>

                  <div>
                    <div class="form-check form-radio-primary mb-3">
                      <input
                        type="radio"
                        id="customRadiocolor1"
                        name="customRadiocolor1"
                        class="form-check-input"
                        checked
                      />
                      <label class="form-check-label" for="customRadiocolor1">
                        Radio Primary
                      </label>
                    </div>
                    <div class="form-check form-radio-success mb-3">
                      <input
                        type="radio"
                        id="customRadiocolor2"
                        name="customRadiocolor2"
                        class="form-check-input"
                        checked
                      />
                      <label class="form-check-label" for="customRadiocolor2">
                        Radio Success
                      </label>
                    </div>
                    <div class="form-check form-radio-info mb-3">
                      <input
                        type="radio"
                        id="customRadiocolor3"
                        name="customRadiocolor3"
                        class="form-check-input"
                        checked
                      />
                      <label class="form-check-label" for="customRadiocolor3">
                        Radio Info
                      </label>
                    </div>
                    <div class="form-check form-radio-warning mb-3">
                      <input
                        type="radio"
                        id="customRadiocolor4"
                        name="customRadiocolor4"
                        class="form-check-input"
                        checked
                      />
                      <label class="form-check-label" for="customRadiocolor4">
                        Radio Warning
                      </label>
                    </div>
                    <div class="form-check form-radio-danger">
                      <input
                        type="radio"
                        id="customRadiocolor5"
                        name="customRadiocolor5"
                        class="form-check-input"
                        checked
                      />
                      <label class="form-check-label" for="customRadiocolor5">
                        Radio Danger
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <Col xl={3} sm={6}>
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1" />{" "}
                    Custom Radio Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>form-radio-outline</code> &{" "}
                    <code>.form-radio-* </code> for a color Checkboxes
                  </p>

                  <div>
                    <div
                      class="form-check form-radio-outline form-radio-primary mb-3"
                    >
                      <input
                        type="radio"
                        id="customRadiooutlinecolor1"
                        name="customRadiooutlinecolor1"
                        class="form-check-input"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="customRadiooutlinecolor1"
                      >
                        Radio Outline Primary
                      </label>
                    </div>
                    <div
                      class="form-check form-radio-outline form-radio-success mb-3"
                    >
                      <input
                        type="radio"
                        id="customRadiooutlinecolor2"
                        name="customRadiooutlinecolor2"
                        class="form-check-input"
                      />
                      <label
                        class="form-check-label"
                        for="customRadiooutlinecolor2"
                      >
                        Radio Outline Success
                      </label>
                    </div>
                    <div
                      class="form-check form-radio-outline form-radio-info mb-3"
                    >
                      <input
                        type="radio"
                        id="customRadiooutlinecolor3"
                        name="customRadiooutlinecolor3"
                        class="form-check-input"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="customRadiooutlinecolor3"
                      >
                        Radio Outline Info
                      </label>
                    </div>
                    <div
                      class="form-check form-radio-outline form-radio-warning mb-3"
                    >
                      <input
                        type="radio"
                        id="customRadiooutlinecolor4"
                        name="customRadiooutlinecolor4"
                        class="form-check-input"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="customRadiooutlinecolor4"
                      >
                        Radio Outline Warning
                      </label>
                    </div>
                    <div
                      class="form-check form-radio-outline form-radio-danger"
                    >
                      <input
                        type="radio"
                        id="customRadiooutlinecolor5"
                        name="customRadiooutlinecolor5"
                        class="form-check-input"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="customRadiooutlinecolor5"
                      >
                        Radio Outline Danger
                      </label>
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
      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Switches</CardTitle>
            <p class="card-title-desc">
              A switch has the markup of a custom checkbox but uses the{" "}
              <code>.custom-switch</code> class to render a toggle switch.
              Switches also support the <code>disabled</code>{" "}
              attribute.
            </p>
            <Row>
              <Col lg={6}>
                <div>
                  <h5 class="font-size-14 mb-3">Switch examples</h5>
                  <div class="form-check form-switch mb-3" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitch1"
                    />
                    <label class="form-check-label" for="customSwitch1">
                      Default switch checkbox input
                    </label>
                  </div>
                  <div class="form-check form-switch mb-3" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitch1"
                      checked
                    />
                    <label class="form-check-label" for="customSwitch1">
                      Checked switch checkbox input
                    </label>
                  </div>
                  <div class="form-check form-switch" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      disabled
                      id="customSwitch2"
                    />
                    <label class="form-check-label" for="customSwitch2">
                      Disabled switch element
                    </label>
                  </div>
                  <div class="form-check form-switch" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      disabled
                      id="customSwitch2"
                    />
                    <label class="form-check-label" for="customSwitch2">
                      Disabled checked switch element
                    </label>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div class="mt-4 mt-lg-0">
                  <h5 class="font-size-14 mb-3">Switch sizes</h5>

                  <div class="form-check form-switch mb-3" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizesm"
                      checked
                    />
                    <label class="form-check-label" for="customSwitchsizesm">
                      Small Size Switch
                    </label>
                  </div>

                  <div class="form-check form-switch form-switch-md mb-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizemd"
                    />
                    <label class="form-check-label" for="customSwitchsizemd">
                      Medium Size Switch
                    </label>
                  </div>

                  <div class="form-check form-switch form-switch-lg mb-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizelg"
                      checked
                    />
                    <label class="form-check-label" for="customSwitchsizelg">
                      Large Size Switch
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>

      <Col lg={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4 mb-4">File browser</CardTitle>
            <div>
              <h5 class="font-size-14">
                <i class="mdi mdi-arrow-right text-primary" /> Default file input
              </h5>
              <div class="row">
                <div class="col-sm-6">
                  <div class="mt-3">
                    <Label for="formFile" class="form-label"
                      >Default file input example</Label
                    >
                    <Input class="form-control" type="file" id="formFile" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="mt-4">
                    <div>
                      <Label for="formFileSm" class="form-label"
                        >Small file input example</Label
                      >
                      <Input
                        class="form-control form-control-sm"
                        id="formFileSm"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mt-4">
                    <div>
                      <Label for="formFileLg" class="form-label"
                        >Large file input example</Label
                      >
                      <Input
                        class="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-2">
              <h5 class="font-size-14 mb-0">
                <i class="mdi mdi-arrow-right text-primary" /> Custom file input
              </h5>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="mt-4">
                  <div>
                    <Label class="form-label">With Label</Label>
                    <div class="input-group mb-3">
                      <Label class="input-group-text" for="inputGroupFile01"
                        >Upload</Label
                      >
                      <Input
                        type="file"
                        class="form-control"
                        id="inputGroupFile01"
                      />
                    </div>
                    <div class="input-group">
                      <Input
                        type="file"
                        class="form-control"
                        id="inputGroupFile02"
                      />
                      <Label class="input-group-text" for="inputGroupFile02"
                        >Upload</Label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="mt-4">
                  <div>
                    <Label class="form-label">With Button</Label>
                    <div class="input-group mb-3">
                      <Button
                        color="primary"
                        type="button"
                        id="inputGroupFileAddon03">Button</Button
                      >
                      <Input
                        type="file"
                        class="form-control"
                        id="inputGroupFile03"
                        aria-describedby="inputGroupFileAddon03"
                        aria-label="Upload"
                      />
                    </div>

                    <div class="input-group">
                      <Input
                        type="file"
                        class="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <Button
                        color="primary"
                        type="button"
                        id="inputGroupFileAddon04">Button</Button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>