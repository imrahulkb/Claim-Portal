<script>
  import { Link } from "svelte-routing";
  import {
    Card,
    CardBody,
    Collapse,
    DropdownMenu,
    DropdownToggle,
    Alert,
    Dropdown,
    Button,
  } from "sveltestrap";

  let isOpen = true;

  const handleOnClick = () => {
    isOpen = !isOpen;
  };
</script>

<Card class="filemanager-sidebar me-md-2">
  <CardBody>
    <div class="d-flex flex-column h-100">
      <div class="mb-4">
        <div class="mb-3">
          <Dropdown class="dropdown w-100">
            <DropdownToggle class="w-100" color="light" type="button">
              <i class="mdi mdi-plus me-1" /> Create New
            </DropdownToggle>
            <DropdownMenu>
              <Link class="dropdown-item" to="#">
                <i class="bx bx-folder me-1" /> Folder
              </Link>
              <Link class="dropdown-item" to="#">
                <i class="bx bx-file me-1" /> File
              </Link>
            </DropdownMenu>
          </Dropdown>
        </div>
        <ul class="list-unstyled categories-list">
          <li>
            <div class="custom-accordion">
              <a
                style="cursor:pointer"
                class="text-body fw-medium py-1 d-flex align-items-center"
                on:click={handleOnClick}
                id="toggler"
              >
                <i class="mdi mdi-folder font-size-16 text-warning me-2" />{" "}
                Files{" "}
                <i
                  class={isOpen
                    ? "mdi mdi-chevron-up accor-down-icon ms-auto"
                    : "mdi mdi-chevron-down accor-down-icon ms-auto"}
                />
              </a>
              <Collapse {isOpen} toggler="#toggler">
                <div class="card border-0 shadow-none ps-2 mb-0">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <Link to="#" class="d-flex align-items-center">
                        <span class="me-auto">Design</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" class="d-flex align-items-center">
                        <span class="me-auto">Development</span>{" "}
                        <i class="mdi mdi-pin ms-auto" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" class="d-flex align-items-center">
                        <span class="me-auto">Project A</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" class="d-flex align-items-center">
                        <span class="me-auto">Admin</span>{" "}
                        <i class="mdi mdi-pin ms-auto" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </li>
          <li>
            <Link to="#" class="text-body d-flex align-items-center">
              <i
                class="mdi mdi-google-drive font-size-16 text-muted me-2"
              />{" "}
              <span class="me-auto">Google Drive</span>
            </Link>
          </li>
          <li>
            <Link to="#" class="text-body d-flex align-items-center">
              <i class="mdi mdi-dropbox font-size-16 me-2 text-primary" />{" "}
              <span class="me-auto">Dropbox</span>
            </Link>
          </li>
          <li>
            <Link to="#" class="text-body d-flex align-items-center">
              <i class="mdi mdi-share-variant font-size-16 me-2" />{" "}
              <span class="me-auto">Shared</span>{" "}
              <i class="mdi mdi-circle-medium text-danger ms-2" />
            </Link>
          </li>
          <li>
            <Link to="#" class="text-body d-flex align-items-center">
              <i
                class="mdi mdi-star-outline text-muted font-size-16 me-2"
              />{" "}
              <span class="me-auto">Starred</span>
            </Link>
          </li>
          <li>
            <Link to="#" class="text-body d-flex align-items-center">
              <i class="mdi mdi-trash-can text-danger font-size-16 me-2" />{" "}
              <span class="me-auto">Trash</span>
            </Link>
          </li>
          <li>
            <Link to="#" class="text-body d-flex align-items-center">
              <i class="mdi mdi-cog text-muted font-size-16 me-2" />{" "}
              <span class="me-auto">Setting</span>
              <span class="badge bg-success rounded-pill ms-2"> 01 </span>
            </Link>
          </li>
        </ul>
      </div>

      <div class="mt-auto">
        <Alert color="success" dismissible class="px-3 mb-0">
          <div class="mb-3">
            <i class="bx bxs-folder-open h1 text-success" />
          </div>

          <div>
            <h5 class="text-success">Upgrade Features</h5>
            <p>Cum sociis natoque penatibus et</p>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-link text-decoration-none text-success"
              >
                Upgrade <i class="mdi mdi-arrow-right" />
              </button>
            </div>
          </div>
        </Alert>
      </div>
    </div>
  </CardBody>
</Card>
