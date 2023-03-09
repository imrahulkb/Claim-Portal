<script>
    import { Link } from "svelte-routing";
    import {
      Badge,
      Col,
      Container,
      Row,
      Table,
      Card,
      CardBody,
    } from "sveltestrap";
  
    import Breadcrumb from "../../../common/Breadcrumb.svelte";
    import data from "../../../common/data/contacts";
  </script>
  
  <div class="page-content">
    <Container fluid>
      <Breadcrumb title="Contacts" breadcrumbItem="Contact List" />
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <div class="table-responsive"> 
              <Table class="align-middle table-nowrap table-hover">
                <thead class="table-light">
                  <tr>
                    <th scope="col" style="width: 70px;">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Projects</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {#each data.users as user}
                    <tr>
                      <td>
                        {#if !user.img}
                          <div class="avatar-xs">
                            <span class="avatar-title rounded-circle">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                        {:else}
                          <div>
                            <img
                              class="rounded-circle avatar-xs"
                              src={user.img}
                              alt=""
                            />
                          </div>
                        {/if}
                      </td>
                      <td>
                        <h5 class="font-size-14 mb-1">
                          <a href={"/#"} class="text-dark">{user.name}</a>
                        </h5>
                        <p class="text-muted mb-0">{user.designation}</p>
                      </td>
                      <td>{user.email}</td>
                      <td>
                        <div>
                          {#each user.tags as tag, index}
                            {#if index < 2}
                              <Link
                                to={"/#"}
                                class="badge badge-soft-primary font-size-11 m-1">{tag}</Link
                              >
                            {/if}
                          {/each}
  
                          {#if user.tags.length > 2}
                            <Link
                              to="#"
                              class="badge badge-soft-primary font-size-11 m-1">
                              {user.tags.length - 1} + more
                            </Link>
                          {/if}
  
                        </div>
                      </td>
                      <td> {user.projects} </td>
                      <td>
                        <ul class="list-inline font-size-20 contact-links mb-0">
                          <li class="list-inline-item px-2">
                            <a href={"/#"} title="Message"><i class="bx bx-message-square-dots" /></a>
                          </li>
                          <li class="list-inline-item px-2">
                            <a href={"/#"} title="Profile"><i class="bx bx-user-circle" /></a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  