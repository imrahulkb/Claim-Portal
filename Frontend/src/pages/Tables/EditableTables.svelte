<script>
  import { Table, Container, Row, Col, Card, CardBody } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  let columns = ["ID","Name", "Age", "Gender"];
  let data = [
    [1, "David McHenry", "24", "Male"],
    [2, "Frank Kirk", "22", "Male"],
    [3, "Rafael Morales", "26", "Male"],
    [4, "Mark Ellison", "32", "Male"],
    [5, "Minnie Walter", "27", "FeMale"],
  ];
  let newRow = [...columns];
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Tables" breadcrumbItem="Editable Tables" />
    <Row>
      <Col>
        <Card>
          <CardBody>
            <h4 class="card-title">Datatable Editable</h4>
            <Table class="table-editable table-nowrap align-middle table-edits">
              <thead>
                <tr>
                {#each columns as column}
                  <th>{column}</th>
                {/each}
                </tr>
              </thead>
              <tbody>
                {#each data as row}
                  <tr>
                    {#each row as cell}
                      <td contenteditable="true" bind:innerHTML={cell} />
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>

<style>
  tr td:focus {
    background: #eee;
  }
</style>