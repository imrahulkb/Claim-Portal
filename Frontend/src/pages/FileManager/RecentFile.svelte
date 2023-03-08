<script>
  import { Link } from "svelte-routing";
  import {
    Table,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
  } from "sveltestrap";

  const recentfile = [
    {
      id: 1,
      icon: "mdi mdi-file-document font-size-16 align-middle text-primary me-2",
      file: "index.html",
      date: "12-10-2020, 09:45",
      size: "09",
    },
    {
      id: 2,
      icon: "mdi mdi-folder-zip font-size-16 align-middle text-warning me-2",
      file: "Project-A.zip",
      date: "11-10-2020, 17:05",
      size: "115",
    },
    {
      id: 3,
      icon: "mdi mdi-image font-size-16 align-middle text-muted me-2",
      file: "Img-1.jpeg",
      date: "11-10-2020, 13:26",
      size: "86",
    },
    {
      id: 4,
      icon: "mdi mdi-text-box font-size-16 align-middle text-muted me-2",
      file: "update list.txt",
      date: "10-10-2020, 11:32",
      size: "08",
    },
    {
      id: 5,
      icon: "mdi mdi-folder font-size-16 align-middle text-warning me-2",
      file: "Project B",
      date: "10-10-2020, 10:51",
      size: "72",
    },
    {
      id: 6,
      icon: "mdi mdi-text-box font-size-16 align-middle text-muted me-2",
      file: "Changes list.txt",
      date: "09-10-2020, 17:05",
      size: "07",
    },
    {
      id: 7,
      icon: "mdi mdi-image font-size-16 align-middle text-success me-2",
      file: "Img-2.png",
      date: "09-10-2020, 15:12",
      size: "31",
    },
    {
      id: 8,
      icon: "mdi mdi-folder font-size-16 align-middle text-warning me-2",
      file: "Project C",
      date: "09-10-2020, 10:11",
      size: "20",
    },
    {
      id: 9,
      icon: "bx bxs-file font-size-16 align-middle text-primary me-2",
      file: "starter-page.html",
      date: "08-10-2020, 03:22",
      size: "11",
    },
  ];
</script>

<div class="mt-4">
  <div class="d-flex flex-wrap">
    <h5 class="font-size-16 me-3">Recent Files</h5>

    <div class="ms-auto">
      <Link to="#" class="fw-medium text-reset">View All</Link>
    </div>
  </div>
  <hr class="mt-2" />

  <div class="table-responsive">
    <Table class="table align-middle table-nowrap table-hover mb-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date modified</th>
          <th scope="col" colSpan="2"> Size </th>
        </tr>
      </thead>
      <tbody>
        {#each recentfile as recentfile}
          <tr>
            <td>
              <Link to="#" class="text-dark fw-medium">
                <i class={recentfile.icon} />
                {recentfile.file}
              </Link>
            </td>
            <td>{recentfile.date}</td>
            <td>{recentfile.size} KB</td>
            <td>
              <!-- <UncontrolledDropdown>
                <DropdownToggle
                  color=""
                  class="font-size-16 text-muted dropdown-toggle"
                  tag="a"
                >
                  <i class="mdi mdi-dots-horizontal" />
                </DropdownToggle>

                <DropdownMenu direction="right" class="dropdown-menu-end">
                  <Link class="dropdown-item" to="#">Open</Link>
                  <Link class="dropdown-item" to="#">Edit</Link>
                  <Link class="dropdown-item" to="#">Rename</Link>
                  <div class="dropdown-divider" />
                  <Link class="dropdown-item" to="#">Remove</Link>
                </DropdownMenu>
              </UncontrolledDropdown> -->
            </td>
          </tr>
        {/each}
      </tbody>
    </Table>
  </div>
</div>