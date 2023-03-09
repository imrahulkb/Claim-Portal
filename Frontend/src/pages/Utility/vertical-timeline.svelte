<script>
  export let status;
</script>

<li class="event-list">
  <div class="event-timeline-dot">
    <i
      class={status.id === 3
        ? "bx bx-right-arrow-circle bx-fade-right"
        : "bx bx-right-arrow-circle"}
    />
  </div>
  <div class="media">
    <div class="me-3">
      <i class={"bx " + status.iconClass + " h2 text-primary"} />
    </div>
    <div class="media-body">
      <div>
        <h5>{status.stausTitle}</h5>
        <p class="text-muted">{status.description}</p>
      </div>
    </div>
  </div>
</li>
