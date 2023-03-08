<script>
  import { Link } from "svelte-routing";
  import {
    Card,
    CardBody,
    Col,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
  } from "sveltestrap";
</script>

<Col xl={4}>
  <Card>
    <CardBody>
      <div class="d-flex">
        <div class="me-2">
          <h5 class="card-title mb-4">Activity</h5>
        </div>
        <Dropdown class="ms-auto">
          <DropdownToggle
            class="text-muted font-size-16"
            color=""
            tag="a"
          >
            <i class="mdi mdi-dots-horizontal" />
          </DropdownToggle>
          <DropdownMenu class="dropdown-menu-end">
            <Link class="dropdown-item" to="#">Action</Link>
            <Link class="dropdown-item" to="#">Another action</Link>
            <Link class="dropdown-item" to="#">Something else</Link>
            <div class="dropdown-divider" />
            <Link class="dropdown-item" to="#">Separated link</Link>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div data-simplebar class="mt-2" style="max-height: 280px;">
        <ul class="verti-timeline list-unstyled">
          <li class="event-list active">
            <div class="event-timeline-dot">
              <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right" />
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 me-3">
                <h5 class="font-size-14">
                  10 Nov{" "}
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  />
                </h5>
              </div>
              <div class="flex-grow-1">
                <div>
                  Posted{" "}
                  <span class="fw-semibold">
                    Beautiful Day with Friends
                  </span>{" "}
                  blog... <a href="/">View</a>
                </div>
              </div>
            </div>
          </li>
          <li class="event-list">
            <div class="event-timeline-dot">
              <i class="bx bx-right-arrow-circle font-size-18" />
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 me-3">
                <h5 class="font-size-14">
                  08 Nov{" "}
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  />
                </h5>
              </div>
              <div class="flex-grow-1">
                <div>
                  If several languages coalesce, the grammar of the resulting... <a
                    href="/">Read</a
                  >
                </div>
              </div>
            </div>
          </li>
          <li class="event-list">
            <div class="event-timeline-dot">
              <i class="bx bx-right-arrow-circle font-size-18" />
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 me-3">
                <h5 class="font-size-14">
                  02 Nov{" "}
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  />
                </h5>
              </div>
              <div class="flex-grow-1">
                <div>
                  Create{" "}
                  <span class="fw-semibold">
                    Drawing a sketch blog
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li class="event-list">
            <div class="event-timeline-dot">
              <i class="bx bx-right-arrow-circle font-size-18" />
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 me-3">
                <h5 class="font-size-14">
                  24 Oct{" "}
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  />
                </h5>
              </div>
              <div class="flex-grow-1">
                <div>
                  In enim justo, rhoncus ut, imperdiet a venenatis vitae
                </div>
              </div>
            </div>
          </li>
          <li class="event-list">
            <div class="event-timeline-dot">
              <i class="bx bx-right-arrow-circle font-size-18" />
            </div>
            <div class="d-flex">
              <div class="flex-shrink-0 me-3">
                <h5 class="font-size-14">
                  21 Oct{" "}
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  />
                </h5>
              </div>
              <div class="flex-grow-1">
                <div>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="text-center mt-4">
        <a href="/" class="btn btn-primary waves-effect waves-light btn-sm">
          View More <i class="mdi mdi-arrow-right ms-1" />
        </a>
      </div>
    </CardBody>
  </Card>
</Col>
