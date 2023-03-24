<script>
  export let num;
  export let title;
  export let features;
  export let desc;
</script>

<div class="mt-4 mt-md-auto">
  <div class="d-flex align-items-center mb-2">
    <div class="features-number fw-semibold display-4 me-3">
      {num}
    </div>
    <h4 class="mb-0">{title}</h4>
  </div>
  <p class="text-muted">{desc}</p>
  <div class="text-muted mt-4">
    {#each features as feature}
      <p class={feature.id === 1 ? "mb-2" : ""}>
        <i class="mdi mdi-circle-medium text-success me-1" />
        {feature.desc}
      </p>
    {/each}
  </div>
</div>