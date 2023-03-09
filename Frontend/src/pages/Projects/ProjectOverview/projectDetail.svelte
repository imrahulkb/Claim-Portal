<script>
  import { Card, CardBody, Col, Row } from "sveltestrap";
  export let project;
</script>

<Card>
  <CardBody>
    <div class="d-flex">
      <img
        src="assets/images/companies/img-1.png"
        alt=""
        class="avatar-sm me-4"
      />

      <div class="flex-grow-1 overflow-hidden">
        <h5 class="text-truncate font-size-15">{project.name}</h5>
        <p class="text-muted">{project.description}</p>
      </div>
    </div>

    <h5 class="font-size-15 mt-4">Project Details :</h5>

    <p class="text-muted">
      {project.projectDetails.description}
    </p>

    <div class="text-muted mt-4">
      {#if project.projectDetails}
        {#each project.projectDetails.points as point}
          <p>
            <i class="mdi mdi-chevron-right text-primary me-1" />
            {point}
          </p>
        {/each}
      {/if}
    </div>

    <Row class="task-dates">
      <Col sm="4" xs="6">
        <div class="mt-4">
          <h5 class="font-size-14">
            <i class="bx bx-calendar me-1 text-primary" /> Start Date
          </h5>
          <p class="text-muted mb-0">{project.startDate}</p>
        </div>
      </Col>

      <Col sm="4" xs="6">
        <div class="mt-4">
          <h5 class="font-size-14">
            <i class="bx bx-calendar-check me-1 text-primary" /> Due Date
          </h5>
          <p class="text-muted mb-0">{project.dueDate}</p>
        </div>
      </Col>
    </Row>
  </CardBody>
</Card>