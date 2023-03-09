<script>
  import { Link } from "svelte-routing";
  import { Card, CardBody, CardTitle, Col, Container, Row } from "sveltestrap";
  import data from "../../common/data/tasks";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  import { chart } from "svelte-apexcharts";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Tasks" breadcrumbItem="Task List" />
    <Row>
      <Col lg={8}>
        {#each data.tasks as task}
          <Card>
            <CardBody>
              <CardTitle class="mb-4">{task.title}</CardTitle>
              <div class="table-responsive">
                <table class="table table-nowrap align-middle mb-0">
                  <tbody>
                    {#each task.tasks as item}
                      <tr>
                        <td style="width: 40px">
                          <div class="form-check font-size-16">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id={item.id}
                            />
                            <label class="form-check-label" for={item.id} />
                          </div>
                        </td>
                        <td>
                          <h5 class="text-truncate font-size-14 m-0">
                            <Link to="#" class="text-dark">
                              {item.description}
                            </Link>
                          </h5>
                        </td>
                        <td>
                          <div class="avatar-group">
                            {#each item.members as member, index}
                              {#if index < 2}
                                <div class="avatar-group-item" key={index}>
                                  <Link to="#" class="d-inline-block">
                                    {#if member.userImg}
                                      <img
                                        src={member.userImg}
                                        class="rounded-circle avatar-xs"
                                        alt=""
                                      />
                                    {:else}
                                      <div class="avatar-xs">
                                        <span
                                          class="avatar-title rounded-circle bg-success text-white font-size-16"
                                        >
                                          {member.username.charAt(0)}
                                        </span>
                                      </div>
                                    {/if}
                                  </Link>
                                </div>
                              {/if}
                            {/each}
                            {#if (item.members).length > 2}
                              <div class="avatar-group-item">
                                <Link to="#" class="d-inline-block">
                                  <div class="avatar-xs">
                                    <span
                                      class="avatar-title rounded-circle bg-success text-white font-size-16"
                                    >
                                      {(item.members).length - 2} +
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            {/if}
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <span
                              class={"badge rounded-pill badge-soft-primary font-size-11 " +
                                data.statusClasses[item.status.toLowerCase()]}
                            >
                              {item.status}
                            </span>
                          </div>
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        {/each}
      </Col>

      <Col lg={4}>
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h4">Tasks</CardTitle>
            <div class="apex-charts">
              <div use:chart={data.options} class="apex-charts" />
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle class="mb-4">
              Recent Tasks
            </CardTitle>
            <div class="table-responsive">
              <table class="table table-nowrap align-middle mb-0">
                <tbody>
                  {#each data.recenttasks.tasks as item}
                    <tr>
                      <td>
                        <h5 class="text-truncate font-size-14 m-0">
                          <Link to="#" class="text-dark">
                            {item.description}
                          </Link>
                        </h5>
                      </td>
                      <td>
                        <div class="avatar-group">
                          {#each item.members as member, index}
                            {#if index < 2}
                              <div
                                class="avatar-group-item"
                                key={"member-" + index}
                              >
                                <Link to="#" class="d-inline-block">
                                  {#if member.userImg}
                                    <img
                                      src={member.userImg}
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  {:else}
                                    <div class="avatar-xs">
                                      <span
                                        class="avatar-title rounded-circle bg-info text-white font-size-16"
                                      >
                                        {member.username.charAt(0)}
                                      </span>
                                    </div>
                                  {/if}
                                </Link>
                              </div>
                            {/if}
                          {/each}
                          {#if (item.members).length > 2}
                            <div class="avatar-group-item">
                              <Link to="#" class="d-inline-block">
                                <div class="avatar-xs">
                                  <span
                                    class="avatar-title rounded-circle bg-info text-white font-size-16"
                                  >
                                    {(item.members).length - 2} +
                                  </span>
                                </div>
                              </Link>
                            </div>
                          {/if}
                        </div>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>