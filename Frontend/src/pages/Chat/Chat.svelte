<script>
  import data from "../../common/data/chat";

  import {
    Col,
    Container,
    Row,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Form,
    Input,
  } from "sveltestrap";
  import { Link } from "svelte-routing";

  // import SimpleBar from "@woden/svelte-simplebar";

  let isOpen = false;

  let current = 1;
  let activeTab = 1;

  const currentUser = {
    name: "Annie Holder",
    isActive: true,
  };
</script>

<div class="page-content">
  <Container fluid>
    <Row>
      <Col xs={12}>
        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 class="mb-sm-0 font-size-18">Chat</h4>

          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><Link to={"#"}>Apps</Link></li>
              <li class="breadcrumb-item active">Chat</li>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
    <div class="d-lg-flex">
      <div class="chat-leftsidebar me-lg-4">
        <div class="">
          <div class="py-4 border-bottom">
            <div class="d-flex">
              <div class="flex-shrink-0 align-self-center me-3">
                <img
                  src="/assets/images/users/avatar-1.jpg"
                  class="avatar-xs rounded-circle"
                  alt="avatar"
                />
              </div>
              <div class="flex-grow-1">
                <h5 class="font-size-15 mb-1">Henry Wells</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1" /> Active
                </p>
              </div>

              <div>
                <Dropdown
                  class="chat-noti-dropdown active"
                  {isOpen}
                  toggle={() => (isOpen = !isOpen)}
                >
                  <DropdownToggle
                    tag="button"
                    color=""
                  >
                    <i class="bx bx-bell bx-tada" />
                  </DropdownToggle>
                  <DropdownMenu class="dropdown-menu-end">
                    <DropdownItem>View Profile</DropdownItem>
                    <DropdownItem>Clear chat</DropdownItem>
                    <DropdownItem>Muted</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        <div class="search-box chat-search-box py-4">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <i class="bx bx-search-alt search-icon" />
          </div>
        </div>

        <div class="chat-leftsidebar-nav">
          <ul class="nav nav-pills nav-justified">
            <NavItem>
              <NavLink
                on:click={() => (activeTab = 1)}
                active={activeTab == 1}
              >
                <i class="bx bx-chat font-size-20 d-sm-none" />
                <span class="d-none d-sm-block">Chat</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                on:click={() => (activeTab = 2)}
                active={activeTab == 2}
              >
                <i class="bx bx-group font-size-20 d-sm-none" />
                <span class="d-none d-sm-block">Groups</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                on:click={() => (activeTab = 3)}
                active={activeTab == 3}
              >
                <i class="bx bx-book-content font-size-20 d-sm-none" />
                <span class="d-none d-sm-block">Contacts</span>
              </NavLink>
            </NavItem>
          </ul>
          <TabContent class="py-4">
            <TabPane tabId={1} class="{activeTab == 1 ? 'active': ''}">
              <div>
                <h5 class="font-size-14 mb-3">Recent</h5>
                <ul
                  class="list-unstyled chat-list"
                  data-simplebar
                  style="max-height: 410px;"
                >
                  {#each data.chats as chat (chat.id)}
                    <li
                      class={current === chat.id ? "active" : ""}
                      on:click={() => (current = chat.id)}
                    >
                      <a href={"#"}>
                        <div class="d-flex align-items-start">
                          <div class="flex-shrink-0 align-self-center me-3">
                            <i class="mdi mdi-circle font-size-10" />
                          </div>
                          <div class="flex-shrink-0 align-self-center me-3">
                            {#if chat.image !== "Null"}
                              <img
                                src={chat.image}
                                class="rounded-circle avatar-xs"
                                alt="avatar"
                              />
                            {:else}
                              <div class="avatar-xs align-self-center">
                                <span
                                  class="avatar-title rounded-circle bg-{chat.color
                                    ? chat.color
                                    : 'primary'}"
                                >
                                  {chat.name.charAt(0)}
                                </span>
                              </div>
                            {/if}

                            <span class="user-status" />
                          </div>

                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate font-size-14 mb-1">
                              {chat.name}
                            </h5>
                            <p class="text-truncate font-size-13 mb-0">
                              {chat.description}
                            </p>
                          </div>
                          <div class="font-size-11">
                            {chat.time}
                          </div>
                          {#if chat.penddingmsg !== ""}
                            <div class="unread-message">
                              <span
                                class="badge bg-soft text-danger bg-danger rounded-pill"
                                >{chat.penddingmsg}</span
                              >
                            </div>
                          {/if}
                        </div>
                      </a>
                    </li>
                  {/each}
                </ul>
              </div>
            </TabPane>
            <TabPane tabId={2} class="{activeTab == 2 ? 'active': ''}">
              <h5 class="font-size-14 mb-3">Groups</h5>
              <ul
                class="list-unstyled chat-list"
                data-simplebar
                style="max-height: 410px;"
              >
                <li>
                  <a href="/">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar-xs">
                          <span
                            class="avatar-title rounded-circle bg-primary bg-soft text-primary"
                          >
                            G
                          </span>
                        </div>
                      </div>

                      <div class="flex-grow-1">
                        <h5 class="font-size-14 mb-0">General</h5>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar-xs">
                          <span
                            class="avatar-title rounded-circle bg-primary bg-soft text-primary"
                          >
                            R
                          </span>
                        </div>
                      </div>

                      <div class="flex-grow-1">
                        <h5 class="font-size-14 mb-0">Reporting</h5>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar-xs">
                          <span
                            class="avatar-title rounded-circle bg-primary bg-soft text-primary"
                          >
                            M
                          </span>
                        </div>
                      </div>

                      <div class="flex-grow-1">
                        <h5 class="font-size-14 mb-0">Meeting</h5>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar-xs">
                          <span
                            class="avatar-title rounded-circle bg-primary bg-soft text-primary"
                          >
                            A
                          </span>
                        </div>
                      </div>

                      <div class="flex-grow-1">
                        <h5 class="font-size-14 mb-0">Project A</h5>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar-xs">
                          <span
                            class="avatar-title rounded-circle bg-primary bg-soft text-primary"
                          >
                            B
                          </span>
                        </div>
                      </div>

                      <div class="flex-grow-1">
                        <h5 class="font-size-14 mb-0">Project B</h5>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </TabPane>
            <TabPane tabId={3} class="{activeTab == 3 ? 'active': ''}">
              <div class="tab-pane" id="contacts">
                <h5 class="font-size-14 mb-3">Contacts</h5>

                <div data-simplebar style="max-height: 410px;">
                  <div>
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-primary bg-soft text-primary"
                      >
                        A
                      </span>
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="/">
                          <h5 class="font-size-14 mb-0">Adam Miller</h5>
                        </a>
                      </li>

                      <li>
                        <a href="/">
                          <h5 class="font-size-14 mb-0">Alfonso Fisher</h5>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4">
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-primary bg-soft text-primary"
                      >
                        B
                      </span>
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="/">
                          <h5 class="font-size-14 mb-0">Bonnie Harney</h5>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4">
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-primary bg-soft text-primary"
                      >
                        C
                      </span>
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="/">
                          <h5 class="font-size-14 mb-0">Charles Brown</h5>
                        </a>
                        <a href="/">
                          <h5 class="font-size-14 mb-0">Carmella Jones</h5>
                        </a>
                        <a href="/">
                          <h5 class="font-size-14 mb-0">Carrie Williams</h5>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4">
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-primary bg-soft text-primary"
                      >
                        D
                      </span>
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="/">
                          <h5 class="font-size-14 mb-0">Dolores Minter</h5>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
      <!-- end chat-leftsidebar -->
      <div class="w-100 user-chat">
        <div class="card">
          <div class="p-4 border-bottom">
            <div class="row">
              <div class="col-md-4 col-9">
                <h5 class="font-size-15 mb-1">Steven Franklin</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1" /> Active
                  now
                </p>
              </div>

              <div class="col-md-8 col-3">
                <ul class="list-inline user-chat-nav text-end mb-0">
                  <li class="list-inline-item d-none d-sm-inline-block">
                    <Dropdown>
                      <DropdownToggle class="nav-btn dropdown-toggle" tag="button" color="">
                        <i class="bx bx-search-alt-2" />
                      </DropdownToggle>

                      <DropdownMenu
                        class="dropdown-menu dropdown-menu-end dropdown-menu-md">
                        <Form class="p-3">
                          <div class="form-group m-0">
                            <div class="input-group">
                              <Input
                                type="text"
                                class="form-control"
                                placeholder="Search ..."
                                aria-label="Recipient's username"
                              />

                              <button class="btn btn-primary" type="submit"
                                ><i class="mdi mdi-magnify" /></button
                              >
                            </div>
                          </div>
                        </Form>
                      </DropdownMenu>
                    </Dropdown>
                  </li>

                  <li class="list-inline-item d-none d-sm-inline-block">
                    <Dropdown>
                      <DropdownToggle tag="button" class="nav-btn dropdown-toggle" color="">
                        <i class="bx bx-cog" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <DropdownItem>View Profile</DropdownItem>
                        <DropdownItem>Clear chat</DropdownItem>
                        <DropdownItem>Muted</DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                  <li class="list-inline-item">
                    <Dropdown>
                      <DropdownToggle tag="button" class="nav-btn dropdown-toggle" color="">
                        <i class="bx bx-dots-horizontal-rounded" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div class="chat-conversation p-3">
              <ul
                class="list-unstyled mb-0"
                data-simplebar
                style="max-height: 486px;"
              >
                <li>
                  <div class="chat-day-title">
                    <span class="title">Today</span>
                  </div>
                </li>
                {#each data.messages as message}
                  <li
                    id={"test_k" + message.id}
                    class={message.sender === currentUser.name ? "right" : ""}
                  >
                    <div class="conversation-list">
                      <Dropdown>
                        <DropdownToggle class="dropdown-toggle" tag="span" color="">
                          <i class="bx bx-dots-vertical-rounded" />
                        </DropdownToggle>
                        <DropdownMenu class="dropdown-menu-end">
                          <DropdownItem href="#">Copy</DropdownItem>
                          <DropdownItem href="#">Save</DropdownItem>
                          <DropdownItem href="#">Forward</DropdownItem>
                          <DropdownItem href="#">Delete</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>

                      <div class="ctext-wrap">
                        <div class="conversation-name">{message.sender}</div>
                        <p>{message.message}</p>
                        <p class="chat-time mb-0">
                          <i class="bx bx-time-five align-middle me-1" />
                          {message.createdAt}
                        </p>
                      </div>
                    </div>
                  </li>
                {/each}
              </ul>
            </div>
          </div>

          <div class="p-3 chat-input-section">
            <div class="row">
                <div class="col">
                    <div class="position-relative">
                        <input type="text" class="form-control chat-input" placeholder="Enter Message...">
                        <div class="chat-input-links" id="tooltip-container">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item"><a href="/" title="Emoji"><i class="mdi mdi-emoticon-happy-outline"></i></a></li>
                                <li class="list-inline-item"><a href="/" title="Images"><i class="mdi mdi-file-image-outline"></i></a></li>
                                <li class="list-inline-item"><a href="/" title="Add Files"><i class="mdi mdi-file-document-outline"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary btn-rounded chat-send w-md waves-effect waves-light"><span class="d-none d-sm-inline-block me-2">Send</span> <i class="mdi mdi-send"></i></button>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </Container>
</div>
