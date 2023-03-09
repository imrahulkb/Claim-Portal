<script>
  import { Card, CardBody, Container } from "sveltestrap";
  import Breadcrumb from "./../../common/Breadcrumb.svelte";

  import FileLeftBar from "./FileLeftBar.svelte";
  import FileLists from "./FileLists.svelte";
  import RecentFile from "./RecentFile.svelte";
  import Storage from "./Storage.svelte";

</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Apps" breadcrumbItem="File Manager" />
    <div class="d-xl-flex">
      <div class="w-100">
        <div class="d-md-flex">
          <FileLeftBar />
          <div class="w-100">
            <Card>
              <CardBody>
                <FileLists />
                <RecentFile />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Storage />
    </div>
  </Container>
</div>