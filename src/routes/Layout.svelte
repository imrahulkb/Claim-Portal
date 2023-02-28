<script>
  import HorizontalLayout from "../routes/HorizontalLayout/Index.svelte";
  import VerticalLayout from "../routes/VerticalLayout/Index.svelte";

  let layoutType = "vertical";

  let component = layoutType == "vertical" ? VerticalLayout : HorizontalLayout;

  if (layoutType == "horizontal") {
    document.body.setAttribute("data-layout", "horizontal");
  }
</script>

<svelte:component this={component}>
  <slot />
</svelte:component>