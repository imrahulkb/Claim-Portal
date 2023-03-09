<script>
  import { Link } from "svelte-routing";
  import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Tooltip,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    FormGroup,
    Input,
    InputGroup,
  } from "sveltestrap";

  // import SimpleBar from "@woden/svelte-simplebar";

</script>

<Col xl={4}>
  <Card>
    <CardBody class="border-bottom">
      <Row>
        <Col md={4} class="col-9">
          <h5 class="font-size-15 mb-1">Steven Franklin</h5>
          <p class="text-muted mb-0">
            <i class="mdi mdi-circle text-success align-middle me-1" /> Active now
          </p>
        </Col>
        <Col md={8} class="col-3">
          <ul class="list-inline user-chat-nav text-end mb-0">
            <li class="list-inline-item d-none d-sm-inline-block">
              <Dropdown>
                <DropdownToggle tag="a" class="btn nav-btn" color="" type="button"><i class="bx bx-search-alt-2" />
                </DropdownToggle>
                <DropdownMenu class="py-0 dropdown-menu-md dropdown-menu-end">
                  <Form class="p-3">
                    <FormGroup class="m-0">
                      <InputGroup>
                        <Input
                          type="text"
                          class="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                     
                          <Button color="primary" type="submit">
                            <i class="mdi mdi-magnify" />
                          </Button>
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li class="list-inline-item  d-none d-sm-inline-block">
              <Dropdown>
                <DropdownToggle class="btn nav-btn" tag="i" color="">
                  <i class="bx bx-cog" />
                </DropdownToggle>
                <DropdownMenu class="dropdown-menu-end">
                  <DropdownItem href="#">View Profile</DropdownItem>
                  <DropdownItem href="#">Clear chat</DropdownItem>
                  <DropdownItem href="#">Muted</DropdownItem>
                  <DropdownItem href="#">Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>

            <li class="list-inline-item">
              <Dropdown>
                <DropdownToggle class="btn nav-btn" tag="i" color="">
                  <i class="bx bx-dots-horizontal-rounded" />
                </DropdownToggle>
                <DropdownMenu class="dropdown-menu-end">
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">Another Action</DropdownItem>
                  <DropdownItem href="#">Something else</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </Col>
      </Row>
    </CardBody>
    <div class="card-body pb-0">
      <div>
        <div class="chat-conversation">
          <ul class="list-unstyled" data-simplebar style="max-height: 260px;">
            <li>
              <div class="chat-day-title">
                <span class="title">Today</span>
              </div>
            </li>
            <li>
              <div class="conversation-list">
                <div class="dropdown">
                  <Link
                    class="dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bx bx-dots-vertical-rounded" />
                  </Link>
                  <div class="dropdown-menu">
                    <Link class="dropdown-item" to="/">Copy</Link>
                    <Link class="dropdown-item" to="/">Save</Link>
                    <Link class="dropdown-item" to="/">Forward</Link>
                    <Link class="dropdown-item" to="/">Delete</Link>
                  </div>
                </div>
                <div class="ctext-wrap">
                  <div class="conversation-name">Steven Franklin</div>
                  <p>Hello!</p>
                  <p class="chat-time mb-0">
                    <i class="bx bx-time-five align-middle me-1" /> 10:00
                  </p>
                </div>
              </div>
            </li>

            <li class="right">
              <div class="conversation-list">
                <div class="dropdown">
                  <Link
                    class="dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bx bx-dots-vertical-rounded" />
                  </Link>
                  <div class="dropdown-menu">
                    <Link class="dropdown-item" to="/">Copy</Link>
                    <Link class="dropdown-item" to="/">Save</Link>
                    <Link class="dropdown-item" to="/">Forward</Link>
                    <Link class="dropdown-item" to="/">Delete</Link>
                  </div>
                </div>
                <div class="ctext-wrap">
                  <div class="conversation-name">Henry Wells</div>
                  <p>Hi, How are you? What about our next meeting?</p>

                  <p class="chat-time mb-0">
                    <i class="bx bx-time-five align-middle me-1" /> 10:02
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="conversation-list">
                <div class="dropdown">
                  <Link
                    class="dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bx bx-dots-vertical-rounded" />
                  </Link>
                  <div class="dropdown-menu">
                    <Link class="dropdown-item" to="/">Copy</Link>
                    <Link class="dropdown-item" to="/">Save</Link>
                    <Link class="dropdown-item" to="/">Forward</Link>
                    <Link class="dropdown-item" to="/">Delete</Link>
                  </div>
                </div>
                <div class="ctext-wrap">
                  <div class="conversation-name">Steven Franklin</div>
                  <p>Yeah everything is fine</p>

                  <p class="chat-time mb-0">
                    <i class="bx bx-time-five align-middle me-1" /> 10:06
                  </p>
                </div>
              </div>
            </li>

            <li class="last-chat">
              <div class="conversation-list">
                <div class="dropdown">
                  <Link
                    class="dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bx bx-dots-vertical-rounded" />
                  </Link>
                  <div class="dropdown-menu">
                    <Link class="dropdown-item" to="/">Copy</Link>
                    <Link class="dropdown-item" to="/">Save</Link>
                    <Link class="dropdown-item" to="/">Forward</Link>
                    <Link class="dropdown-item" to="/">Delete</Link>
                  </div>
                </div>
                <div class="ctext-wrap">
                  <div class="conversation-name">Steven Franklin</div>
                  <p>& Next meeting tomorrow 10.00AM</p>
                  <p class="chat-time mb-0">
                    <i class="bx bx-time-five align-middle me-1" /> 10:06
                  </p>
                </div>
              </div>
            </li>

            <li class="right">
              <div class="conversation-list">
                <div class="dropdown">
                  <Link
                    class="dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bx bx-dots-vertical-rounded" />
                  </Link>
                  <div class="dropdown-menu">
                    <Link class="dropdown-item" to="/">Copy</Link>
                    <Link class="dropdown-item" to="/">Save</Link>
                    <Link class="dropdown-item" to="/">Forward</Link>
                    <Link class="dropdown-item" to="/">Delete</Link>
                  </div>
                </div>
                <div class="ctext-wrap">
                  <div class="conversation-name">Henry Wells</div>
                  <p>Wow that's great</p>

                  <p class="chat-time mb-0">
                    <i class="bx bx-time-five align-middle me-1" /> 10:07
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="p-3 chat-input-section">
      <Row>
        <div class="col">
          <div class="position-relative">
            <input
              type="text"
              class="form-control rounded chat-input"
              placeholder="Enter Message..."
            />
            <div class="chat-input-links">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <Link to="#">
                    <i
                      class="mdi mdi-emoticon-happy-outline"
                      id="Emojitooltip"
                    />
                    <Tooltip placement="top" target="Emojitooltip">
                      Emojis
                    </Tooltip>
                  </Link>
                </li>
                {" "}
                <li class="list-inline-item">
                  <Link to="#">
                    <i class="mdi mdi-file-image-outline" id="Imagetooltip" />
                    <Tooltip placement="top" target="Imagetooltip">
                      Images
                    </Tooltip>
                  </Link>
                </li>
                {" "}
                <li class="list-inline-item">
                  <Link to="#">
                    <i class="mdi mdi-file-document-outline" id="Filetooltip" />
                    <Tooltip placement="top" target="Filetooltip">
                      Add Files
                    </Tooltip>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <Button type="submit" color="primary" class="chat-send w-md">
            <span class="d-none d-sm-inline-block me-2">Send</span>{" "}
            <i class="mdi mdi-send" />
          </Button>
        </div>
      </Row>
    </div>
  </Card>
</Col>