<script>
  import Carousel from "svelte-carousel";
  const items = [
    {
      src: "assets/images/small/img-7.jpg",
      altText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      caption: "First slide label",
    },
    {
      src: "assets/images/small/img-2.jpg",
      altText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      caption: "Second slide label",
    },
    {
      src: "assets/images/small/img-4.jpg",
      altText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      caption: "Third slide label",
    },
  ];
</script>

<Carousel
  particlesToShow={1}
  arrows={true}
  dots={false}
>
  {#each items as item}
    <div class="item">
      <img src={item.src} alt="..." class="d-block img-fluid" />
      <div class="carousel-caption d-none d-md-block text-white-50">
        <h5 class="text-white">{item.caption}</h5>
        <p>{item.altText}</p>
      </div>
    </div>
  {/each}
</Carousel>