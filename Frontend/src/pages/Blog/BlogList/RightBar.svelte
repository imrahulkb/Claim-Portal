<script>
  import { Link } from "svelte-routing";
  import { Card, CardBody, Col } from "sveltestrap";
</script>

<Col xl={3} lg={4}>
  <Card>
    <CardBody class="p-4">
      <div class="search-box">
        <p class="text-muted">Search</p>
        <div class="position-relative">
          <input
            type="text"
            class="form-control rounded bg-light border-light"
            placeholder="Search..."
          />
          <i class="mdi mdi-magnify search-icon" />
        </div>
      </div>

      <hr class="my-4" />

      <div>
        <p class="text-muted">Categories</p>

        <ul class="list-unstyled fw-medium">
          <li>
            <a href={"#"} class="text-muted py-2 d-block">
              <i class="mdi mdi-chevron-right me-1" /> Design
            </a>
          </li>
          <li>
            <a href={"#"} class="text-muted py-2 d-block">
              <i class="mdi mdi-chevron-right me-1" /> Development{" "}
              <span
                class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
              >
                04
              </span>
            </a>
          </li>
          <li>
            <a href={"#"} class="text-muted py-2 d-block">
              <i class="mdi mdi-chevron-right me-1" /> Business
            </a>
          </li>
          <li>
            <a href={"#"} class="text-muted py-2 d-block">
              <i class="mdi mdi-chevron-right me-1" /> Project
            </a>
          </li>
          <li>
            <a href={"#"} class="text-muted py-2 d-block">
              <i class="mdi mdi-chevron-right me-1" /> Travel
              <span
                class="badge badge-soft-success badge-pill ms-1 float-end font-size-12"
              >
                12
              </span>
            </a>
          </li>
        </ul>
      </div>

      <hr class="my-4" />

      <div>
        <p class="text-muted">Archive</p>

        <ul class="list-unstyled fw-medium">
          <li>
            <a href={"#"} class="text-muted py-2 d-block">
              <i class="mdi mdi-chevron-right me-1" /> 2020{" "}
              <span
                class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
              >
                03
              </span>
            </a>
          </li>
          <li>
            <a href={"#"} class="text-muted py-2 d-block">
              <i class="mdi mdi-chevron-right me-1" /> 2019{" "}
              <span
                class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
              >
                06
              </span>
            </a>
          </li>
          <li>
            <a href={"#"} class="text-muted py-2 d-block">
              <i class="mdi mdi-chevron-right me-1" /> 2018{" "}
              <span
                class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
              >
                05
              </span>
            </a>
          </li>
        </ul>
      </div>

      <hr class="my-4" />

      <div>
        <p class="text-muted mb-2">Popular Posts</p>

        <div class="list-group list-group-flush">
          <a href={"#"} class="list-group-item text-muted py-3 px-2">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <img
                  src="assets/images/small/img-7.jpg"
                  alt=""
                  class="avatar-md h-auto d-block rounded"
                />
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <h5 class="font-size-13 text-truncate">
                  Beautiful Day with Friends
                </h5>
                <p class="mb-0 text-truncate">10 Apr, 2020</p>
              </div>
            </div>
          </a>

          <a href={"#"} class="list-group-item text-muted py-3 px-2">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <img
                  src="assets/images/small/img-4.jpg"
                  alt=""
                  class="avatar-md h-auto d-block rounded"
                />
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <h5 class="font-size-13 text-truncate">Drawing a sketch</h5>
                <p class="mb-0 text-truncate">24 Mar, 2020</p>
              </div>
            </div>
          </a>

          <a href={"#"} class="list-group-item text-muted py-3 px-2">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <img
                  src="assets/images/small/img-6.jpg"
                  alt=""
                  class="avatar-md h-auto d-block rounded"
                />
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <h5 class="font-size-13 text-truncate">
                  Project discussion with team
                </h5>
                <p class="mb-0 text-truncate">11 Mar, 2020</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <hr class="my-4" />

      <div>
        <p class="text-muted">Tags</p>

        <div class="d-flex flex-wrap gap-2 widget-tag">
          <div>
            <Link to={"#"} class="badge bg-light font-size-12">Design</Link>
          </div>
          <div>
            <Link to={"#"} class="badge bg-light font-size-12">
              Development
            </Link>
          </div>
          <div>
            <Link to={"#"} class="badge bg-light font-size-12">Business</Link>
          </div>
          <div>
            <Link to={"#"} class="badge bg-light font-size-12">Project</Link>
          </div>
          <div>
            <Link to={"#"} class="badge bg-light font-size-12">Travel</Link>
          </div>
          <div>
            <Link to={"#"} class="badge bg-light font-size-12">
              Lifestyle
            </Link>
          </div>
          <div>
            <Link to={"#"} class="badge bg-light font-size-12">
              Photography
            </Link>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
</Col>