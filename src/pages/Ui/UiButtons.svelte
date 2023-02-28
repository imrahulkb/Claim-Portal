<script>
  import { Link } from "svelte-routing";
  import {
    Button,
    Dropdown,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    Label,
    Input,
  } from "sveltestrap";

  import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="UI Elements" breadcrumbItem="Buttons" />

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Default buttons</CardTitle>
            <p class="card-title-desc">
              Bootstrap includes six predefined button styles, each serving its
              own semantic purpose.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="success">Success</Button>
              <Button color="info">Info</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button color="dark">Dark</Button>
              <Button color="link">Link</Button>
              <Button color="light">Light</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Outline buttons</CardTitle>
            <p class="mb-3 card-title-desc">
              Replace the default modifier classes with the
              <code class="highlighter-rouge">.btn-outline-*</code>
              ones to remove all background images and colors on any button.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <Button color="primary" outline>Primary</Button>
              <Button color="secondary" outline>Secondary</Button>
              <Button color="success" outline>Success</Button>
              <Button color="info" outline>Info</Button>
              <Button color="warning" outline>Warning</Button>
              <Button color="danger" outline>Danger</Button>
              <Button color="dark" outline>Dark</Button>
              <Button color="light" outline>Light</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={12}>
        <Card>
          <CardBody>
            <CardTitle class="card-title">Soft Buttons</CardTitle>
            <p class="card-title-desc">Use class <code>.btn-soft*</code> for soft buttons.</p>
            <div class="d-flex flex-wrap gap-2">
              <Button type="button" class="btn btn-soft-primary waves-effect waves-light">Primary</Button>
              <Button type="button" class="btn btn-soft-secondary waves-effect waves-light">Secondary</Button>
              <Button type="button" class="btn btn-soft-success waves-effect waves-light">Success</Button>
              <Button type="button" class="btn btn-soft-info waves-effect waves-light">Info</Button>
              <Button type="button" class="btn btn-soft-warning waves-effect waves-light">Warning</Button>
              <Button type="button" class="btn btn-soft-danger waves-effect waves-light">Danger</Button>
              <Button type="button" class="btn btn-soft-dark waves-effect waves-light">Dark</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Rounded buttons</CardTitle>
            <p class="card-title-desc">
              Use class <code>.btn-rounded</code> for button round border.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <Button color="primary" class="btn-rounded">Primary</Button>
              <Button color="secondary" class="btn-rounded">Secondary</Button>
              <Button color="success" class="btn-rounded">Success</Button>
              <Button color="info" class="btn-rounded">Info</Button>
              <Button color="warning" class="btn-rounded">Warning</Button>
              <Button color="danger" class="btn-rounded">Danger</Button>
              <Button color="dark" class="btn-rounded">Dark</Button>
              <Button color="link" class="btn-rounded">Link</Button>
              <Button color="light" class="btn-rounded">Light</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Buttons with icon</CardTitle>
            <p class="mb-3 card-title-desc">Add icon in button.</p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary">
                <i class="bx bx-smile font-size-16 align-middle me-2" />
                Primary
              </button>
              <button type="button" class="btn btn-success">
                <i class="bx bx-check-double font-size-16 align-middle me-2" />
                Success
              </button>
              <button type="button" class="btn btn-warning">
                <i class="bx bx-error font-size-16 align-middle me-2" />
                Warning
              </button>
              <button type="button" class="btn btn-danger">
                <i class="bx bx-block font-size-16 align-middle me-2" />
                Danger
              </button>
              <button type="button" class="btn btn-dark">
                <i
                  class="bx bx-loader bx-spin font-size-16 align-middle me-2"
                />
                Loading
              </button>
              <button type="button" class="btn btn-light">
                <i
                  class="bx bx-hourglass bx-spin font-size-16 align-middle me-2"
                />
                Loading
              </button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Snip Buttons</CardTitle>

            <Row>
              <Col xl={4}>
                <div class="mt-4">
                  <h5 class="font-size-15 mb-3">Example 1</h5>

                  <div>
                    <div class="btn-group btn-group-example mb-3" role="group">
                      <button
                        type="button"
                        class="btn btn-outline-primary w-sm"
                      >
                        Left
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-primary w-sm"
                      >
                        Middle
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-primary w-sm"
                      >
                        Right
                      </button>
                    </div>

                    <div>
                      <div
                        class="btn-group btn-group-example mb-3"
                        role="group"
                      >
                        <button type="button" class="btn btn-primary w-xs">
                          <i class="mdi mdi-thumb-up" />
                        </button>
                        <button type="button" class="btn btn-danger w-xs">
                          <i class="mdi mdi-thumb-down" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <div class="btn-group btn-group-example" role="group">
                        <button
                          type="button"
                          class="btn btn-outline-secondary w-xs"
                        >
                          <i class="bx bx-menu-alt-right" />
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary w-xs"
                        >
                          <i class="bx bx-menu" />
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary w-xs"
                        >
                          <i class="bx bx-menu-alt-left" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <div class="col-xl-4">
                <div class="mt-4">
                  <h5 class="font-size-15 mb-3">Example 2</h5>

                  <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-primary btn-label">
                      <i class="bx bx-smile label-icon" /> Primary
                    </button>
                    <button type="button" class="btn btn-success btn-label">
                      <i class="bx bx-check-double label-icon" />
                      Success
                    </button>
                    <button type="button" class="btn btn-warning btn-label">
                      <i class="bx bx-error label-icon " />
                      Warning
                    </button>
                    <button type="button" class="btn btn-danger btn-label">
                      <i class="bx bx-block label-icon " />Danger
                    </button>
                    <button type="button" class="btn btn-dark btn-label">
                      <i class="bx bx-loader label-icon " />Dark
                    </button>
                    <button type="button" class="btn btn-light btn-label">
                      <i class="bx bx-hourglass label-icon " />
                      Light
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-xl-4">
                <div class="mt-4">
                  <h5 class="font-size-15 mb-3">Example 3</h5>

                  <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-primary w-sm">
                      <i class="mdi mdi-download d-block font-size-16" />
                      Download
                    </button>
                    <button type="button" class="btn btn-light w-sm">
                      <i class="mdi mdi-upload d-block font-size-16" />
                      Upload
                    </button>
                    <button type="button" class="btn btn-success w-sm">
                      <i class="mdi mdi-pencil d-block font-size-16" />
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger w-sm">
                      <i class="mdi mdi-trash-can d-block font-size-16" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Buttons Sizes</CardTitle>
            <p class="card-title-desc">
              Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.
            </p>

            <div class="d-flex flex-wrap gap-2 align-items-center">
              <Button color="primary" class="btn btn-primary btn-lg">
                Large button
              </Button>
              <Button color="secondary" class="btn btn-secondary btn-lg">
                Large button
              </Button>
              <Button color="primary" class="btn btn-primary btn-sm">
                Small button
              </Button>
              <Button color="secondary" class="btn btn-secondary btn-sm">
                Small button
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Buttons width</CardTitle>
            <p class="card-title-desc">
              Add <code>.w-xs</code>, <code>.w-sm</code>,
              <code>.w-md</code> and <code> .w-lg</code> class for additional buttons
              width.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary w-xs"> Xs </button>
              <button type="button" class="btn btn-danger w-sm"> Small </button>
              <button type="button" class="btn btn-warning w-md">
                Medium
              </button>
              <button type="button" class="btn btn-success w-lg">
                Large
              </button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Button tags</CardTitle>
            <p class="card-title-desc">
              The <code class="highlighter-rouge">.btn</code>
              classes are designed to be used with the
              <code class="highlighter-rouge"> &lt;button&gt; </code>
              element. However, you can also use these classes on
              <code class="highlighter-rouge">&lt;Link&gt;</code> or
              <code class="highlighter-rouge">&lt;input&gt;</code>
              elements (though some browsers may apply a slightly different rendering).
            </p>

            <div class="d-flex flex-wrap gap-2">
              <Link class="btn btn-primary" to="#" role="button">Link</Link>
              <Button color="success" class="btn btn-success" type="submit">
                Button
              </Button>
              <input class="btn btn-info" type="button" value="Input" />
              <input class="btn btn-danger" type="submit" value="Submit" />
              <input class="btn btn-warning" type="reset" value="Reset" />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Toggle states</CardTitle>
            <p class="card-title-desc">
              Add
              <code class="highlighter-rouge">
                data-toggle=&quot;button&ldquo;
              </code>
              to toggle a button’s
              <code class="highlighter-rouge">active</code>
              state. If you’re pre-toggling a button, you must manually add the
              <code class="highlighter-rouge"> .active </code>
              class
              <strong>and</strong>
              <code class="highlighter-rouge">
                aria-pressed= &quot;true &ldquo;
              </code>
              to the
              <code class="highlighter-rouge">&lt;button&gt;</code>.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <Button
                color="primary"
                class="btn btn-primary"
                data-toggle="button"
                aria-pressed="false"
              >
                Single toggle
              </Button>
              <Button type="button" color="primary" class="active">Active toggle button</Button>
              <Button type="button" color="primary" disabled>Disabled toggle button</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Block Buttons</CardTitle>
            <p class="card-title-desc">
              Create block level buttons—those that span the full width of a
              parent—by adding
              <code class="highlighter-rouge">.btn-block</code>.
            </p>

            <div class="d-grid gap-2">
              <Button color="primary" type="button" class="btn-lg"
                >Block level button</Button
              >
              <Button color="secondary" type="button" class="btn-sm"
                >Block level button</Button
              >
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle>Checkbox & Radio Buttons</CardTitle>
            <p class="mb-3 card-title-desc">
              Bootstrap’s{" "}
              <code class="highlighter-rouge">.button</code> styles can be
              applied to other elements, such as{" "}
              <code class="highlighter-rouge">&lt;label&gt;</code>s, to provide
              checkbox or radio style button toggling. Add{" "}
              <code class="highlighter-rouge">
                data-toggle=&quot;buttons&ldquo;
              </code>{" "}
              to a<code class="highlighter-rouge">.btn-group</code>{" "}
              containing those modified buttons to enable toggling in their respective
              styles.
            </p>

            <div class="d-flex flex-wrap gap-2">
              <div>
                <div class="d-flex flex-wrap gap-3">
                  <div class="btn-group" role="group">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck1"
                      autocomplete="off"
                      checked
                    />
                    <label class="btn btn-primary" for="btncheck1">Checkbox 1</label>

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck2"
                      autocomplete="off"
                    />
                    <label class="btn btn-primary" for="btncheck2">Checkbox 2</label>

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck3"
                      autocomplete="off"
                    />
                    <label class="btn btn-primary" for="btncheck3">Checkbox 3</label>
                  </div>

                  <div class="btn-group" role="group">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck4"
                      autocomplete="off"
                      checked
                    />
                    <label class="btn btn-outline-primary" for="btncheck4">Checkbox 4</label>

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck5"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck5">Checkbox 5</label>

                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck6"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck6">Checkbox 6</label>
                  </div>
                </div>
              </div>

              <div>
                <div class="d-flex flex-wrap gap-3">
                  <div class="btn-group" role="group">
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autocomplete="off"
                      checked
                    />
                    <label class="btn btn-secondary" for="btnradio1">Radio 1</label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autocomplete="off"
                    />
                    <label class="btn btn-secondary" for="btnradio2">Radio 2</label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio3"
                      autocomplete="off"
                    />
                    <label class="btn btn-secondary" for="btnradio3">Radio 3</label>
                  </div>

                  <div class="btn-group" role="group">
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio4"
                      autocomplete="off"
                      checked
                    />
                    <label class="btn btn-outline-secondary" for="btnradio4"
                      >Radio 4</label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio5"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-secondary" for="btnradio5"
                      >Radio 5</label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio6"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-secondary" for="btnradio6"
                      >Radio 6</label>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Button group</CardTitle>
            <p class="card-title-desc">
              Wrap a series of buttons with
              <code class="highlighter-rouge">.btn</code> in
              <code class="highlighter-rouge">.btn-group</code>.
            </p>

            <Row>
              <Col md={6}>
                <div class="d-flex flex-wrap gap-2">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button color="primary">Left</Button>
                    <Button color="primary">Middle</Button>
                    <Button color="primary">Right</Button>
                  </div>

                  <div class="btn-group">
                    <Link to="#" class="btn btn-outline-primary active"
                      >Left</Link>
                    <Link to="#" class="btn btn-outline-primary">Middle</Link>
                    <Link to="#" class="btn btn-outline-primary">Right</Link>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <div class="d-flex flex-wrap gap-3 mt-4 mt-md-0">
                  <div class="btn-group">
                    <Button color="secondary" type="button"
                      ><i class="bx bx-menu-alt-right" /></Button
                    >
                    <Button color="secondary" type="button"
                      ><i class="bx bx-menu" /></Button>
                    <Button color="secondary" type="button"
                      ><i class="bx bx-menu-alt-left" /></Button>
                  </div>

                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-secondary"
                      ><i class="bx bx-menu-alt-right" /></button>
                    <button type="button" class="btn btn-outline-secondary"
                      ><i class="bx bx-menu" /></button>
                    <button type="button" class="btn btn-outline-secondary"
                      ><i class="bx bx-menu-alt-left" /></button>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Button toolbar</CardTitle>
            <p class="card-title-desc">
              Combine sets of button groups into button toolbars for more
              complex components. Use utility classes as needed to space out
              groups, buttons, and more.
            </p>

            <div class="d-flex flex-wrap gap-4">
              <div
                class="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  class="btn-group me-2"
                  role="group"
                  aria-label="First group"
                >
                  <Button color="secondary" class="btn btn-secondary">
                    1
                  </Button>
                  <Button color="secondary" class="btn btn-secondary">
                    2
                  </Button>
                  <Button color="secondary" class="btn btn-secondary">
                    3
                  </Button>
                  <Button color="secondary" class="btn btn-secondary">
                    4
                  </Button>
                </div>
                <div
                  class="btn-group me-2"
                  role="group"
                  aria-label="Second group"
                >
                  <Button color="secondary" class="btn btn-secondary">
                    5
                  </Button>
                  <Button color="secondary" class="btn btn-secondary">
                    6
                  </Button>
                  <Button color="secondary" class="btn btn-secondary">
                    7
                  </Button>
                </div>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Third group"
                >
                  <Button color="secondary" class="btn btn-secondary">
                    8
                  </Button>
                </div>
              </div>

              <div class="btn-toolbar">
                <div class="btn-group me-2">
                  <button type="button" class="btn btn-outline-secondary">1</button>
                  <button type="button" class="btn btn-outline-secondary">2</button>
                  <button type="button" class="btn btn-outline-secondary">3</button>
                  <button type="button" class="btn btn-outline-secondary">4</button>
                </div>
                <div class="btn-group me-2">
                  <button type="button" class="btn btn-outline-secondary">5</button>
                  <button type="button" class="btn btn-outline-secondary">6</button>
                  <button type="button" class="btn btn-outline-secondary">7</button>
                </div>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-secondary">8</button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Sizing</CardTitle>
            <p class="card-title-desc">
              Instead of applying button sizing classes to every button in a
              group, just add
              <code class="highlighter-rouge">.btn-group-*</code> to each
              <code class="highlighter-rouge">.btn-group</code>
              , including each one when nesting multiple groups.
            </p>

            <div class="d-flex flex-wrap gap-3">
              <div class="btn-group btn-group-lg">
                <button type="button" class="btn btn-primary">Left</button>
                <button type="button" class="btn btn-primary">Middle</button>
                <button type="button" class="btn btn-primary">Right</button>
              </div>

              <div class="btn-group btn-group-lg">
                <button type="button" class="btn btn-outline-primary"
                  >Left</button
                >
                <button type="button" class="btn btn-outline-primary"
                  >Middle</button
                >
                <button type="button" class="btn btn-outline-primary"
                  >Right</button
                >
              </div>
            </div>

            <br />

            <div class="d-flex flex-wrap gap-3">
              <div class="btn-group">
                <button type="button" class="btn btn-secondary">Left</button>
                <button type="button" class="btn btn-secondary">Middle</button>
                <button type="button" class="btn btn-secondary">Right</button>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-secondary"
                  >Left</button
                >
                <button type="button" class="btn btn-outline-secondary"
                  >Middle</button
                >
                <button type="button" class="btn btn-outline-secondary"
                  >Right</button
                >
              </div>
            </div>

            <br />

            <div class="d-flex flex-wrap gap-3">
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-danger">Left</button>
                <button type="button" class="btn btn-danger">Middle</button>
                <button type="button" class="btn btn-danger">Right</button>
              </div>

              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-outline-danger"
                  >Left</button
                >
                <button type="button" class="btn btn-outline-danger"
                  >Middle</button
                >
                <button type="button" class="btn btn-outline-danger"
                  >Right</button
                >
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col xl={6}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Vertical variation</CardTitle>
            <p class="card-title-desc">
              Make a set of buttons appear vertically stacked rather than
              horizontally. Split button dropdowns are not supported here.
            </p>

            <div class="d-flex flex-wrap gap-3 align-items-center">
              <div
                class="btn-group-vertical"
                role="group"
                aria-label="Vertical button group"
              >
                <Button
                  type="button"
                  color="secondary"
                  class="btn btn-secondary"
                >
                  Button
                </Button>

                <Dropdown>
                  <DropdownToggle caret color="secondary">
                    Dropdown <i class="mdi mdi-chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Dropdown link</DropdownItem>
                    <DropdownItem>Dropdown link</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Button
                  color="secondary"
                  type="button"
                  class="btn btn-secondary"
                >
                  Button
                </Button>
                <Button
                  color="secondary"
                  type="button"
                  class="btn btn-secondary"
                >
                  Button
                </Button>
              </div>
              <div class="btn-group-vertical">
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio1"
                  autocomplete="off"
                  checked
                />
                <label class="btn btn-outline-danger" for="vbtn-radio1"
                  >Radio 1</label>
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
