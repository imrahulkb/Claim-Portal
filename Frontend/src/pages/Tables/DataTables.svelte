<script>
  import { data } from "./data";
  import { Datatable } from "svelte-simple-datatables";
  import { Row, Col, Card, CardBody, Container } from "sveltestrap";
  import Breadcrumbs from "../../common/Breadcrumb.svelte";

  const settings = {
    labels: {
      search: "Search...", // search input placeholer
      filter: "Filter", // filter inputs placeholder
      noRows: "No entries to found",
      info: "Showing {start} to {end} of {rows} entries",
      previous: "Previous",
      next: "Next",
    },
    sortable: true,
    pagination: true,
    rowPerPage: 10,
    columnFilter: true,
  };

  let rows;
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumbs title="Tables" breadcrumbItem="Advanced Tables" />

    <Row>
      <Col sm={12}>
        <Card>
          <CardBody>
            <div class="h4 card-title">Default Datatable</div>
            <p class="card-title-desc">
              svelte-simple-datatables plugin has most features enabled by
              default, so all you need to do to use it with your own tables is
              to call the construction function: <code
                >svelte-simple-datatables
              </code>.
            </p>
            <Datatable {settings} {data} bind:dataRows={rows}>
              <thead>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </thead>
              <tbody>
                {#if rows}
                  {#each $rows as row}
                    <tr>
                      <td>{row.name}</td>
                      <td>{row.position}</td>
                      <td>{row.office}</td>
                      <td>{row.age}</td>
                      <td>{row.start_date}</td>
                      <td>{row.salary}</td>
                    </tr>
                  {/each}
                {/if}
              </tbody>
            </Datatable>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>

<style>
  td {
    text-align: left;
  }
</style>
