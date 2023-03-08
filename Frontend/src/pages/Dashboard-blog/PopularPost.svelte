<script>
	import { Link } from 'svelte-routing';
  import {
    Card,
    CardBody,
    Col,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
  } from "sveltestrap";

  const popularpost = [
        {
          id: 1,
          img: "assets/images/small/img-2.jpg",
          title: "Beautiful Day with Friends",
          date: "10 Nov, 2020",
          like: "125",
          comment: "68",
        },
        {
          id: 2,
          img: "assets/images/small/img-6.jpg",
          title: "Drawing a sketch",
          date: "02 Nov, 2020",
          like: "102",
          comment: "48",
        },
        {
          id: 3,
          img: "assets/images/small/img-1.jpg",
          title: "Riding bike on road",
          date: "24 Oct, 2020",
          like: "98",
          comment: "35",
        },
        {
          id: 4,
          img: "assets/images/small/img-2.jpg",
          title: "Project discussion with team",
          date: "15 Oct, 2020",
          like: "92",
          comment: "22",
        },
      ];
</script>

<Col xl={8}>
  <Card>
    <CardBody>
      <div class="d-flex">
        <div class="me-2">
          <h5 class="card-title mb-4">Popular post</h5>
        </div>
        <Dropdown class="ms-auto">
          <DropdownToggle
            class="text-muted font-size-16 dropdown-toggle"
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

      <div class="table-responsive">
        <table class="table align-middle table-nowrap mb-0">
          <thead>
            <tr>
              <th scope="col" colSpan="2"> Post </th>
              <th scope="col">Likes</th>
              <th scope="col">Comments</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {#each popularpost as popularpost}
              <tr>
                <td style="width: 100px;">
                  <img
                    src={popularpost.img}
                    alt=""
                    class="avatar-md h-auto d-block rounded"
                  />
                </td>
                <td>
                  <h5 class="font-size-13 text-truncate mb-1">
                    <Link to="#" class="text-dark">
                      {popularpost.title}
                    </Link>
                  </h5>
                  <p class="text-muted mb-0">{popularpost.date}</p>
                </td>
                <td>
                  <i class="bx bx-like align-middle me-1" />{" "}
                  {popularpost.like}
                </td>
                <td>
                  <i class="bx bx-comment-dots align-middle me-1" />{" "}
                  {popularpost.comment}
                </td>
                <td>
                  <Dropdown class="dropdown">
                    <DropdownToggle
                      class="text-muted font-size-16"
                      color=""
                      tag="a"
                    >
                      <i class="mdi mdi-dots-horizontal" />
                    </DropdownToggle>
                    <DropdownMenu class="dropdown-menu-end" direction="right">
                      <Link class="dropdown-item" to="#">Action</Link>
                      <Link class="dropdown-item" to="#">Another action</Link>
                      <Link class="dropdown-item" to="#">Something else</Link>
                      <div class="dropdown-divider" />
                      <Link class="dropdown-item" to="#">Separated link</Link>
                    </DropdownMenu>
                  </Dropdown>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </CardBody>
  </Card>
</Col>