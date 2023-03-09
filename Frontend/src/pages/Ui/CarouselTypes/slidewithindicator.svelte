<script>
  import Carousel from "svelte-carousel";
  const items = [
    {
      src: "assets/images/small/img-7.jpg",
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: "assets/images/small/img-2.jpg",
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: "assets/images/small/img-4.jpg",
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];
</script>

<Carousel
  particlesToShow={1}
  arrows={true}
  particlesToScroll={1}
>
  {#each items as item}
    <div class="item">
      <img src={item.src} class="d-block img-fluid" alt={item.altText} />
    </div>
  {/each}
</Carousel>