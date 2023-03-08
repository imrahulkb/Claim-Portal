<script>
  import { Container, Row, Col } from "sveltestrap";
  import Carousel from "svelte-carousel";

  const events = [
    {
      id: 1,
      date: "December, 2019",
      title: "ICO Platform Idea",
      desc: "It will be as simple as occidental in fact it will be Cambridge",
    },
    {
      id: 2,
      date: "January, 2020",
      title: "Research on project",
      desc: "To an English person, it will seem like simplified English existence.",
    },
    {
      id: 3,
      extraclass: "active",
      date: "February, 2020",
      title: "ICO & Token Design",
      desc: "For science, music, sport, etc, Europe uses the same vocabulary.",
    },
    {
      id: 4,
      date: "March, 2020",
      title: "ICO Launch Platform",
      desc: "New common language will be more simple than existing.",
    },
    {
      id: 5,
      date: "April, 2020",
      title: "Token sale round 1",
      desc: "It will be as simple as occidental in fact it will be Cambridge",
    },
    {
      id: 6,
      date: "May, 2020",
      title: "Token sale round 2",
      desc: "To an English person, it will seem like simplified English existence.",
    },
  ];

  let carousel;

  function goToPrevPage() {
    carousel.goToPrev({ animated: false });
  }

  function goToNextPage() {
    carousel.goToNext({ animated: false });
  }
</script>

<section class="section bg-white" id="roadmap">
  <Container>
    <Row>
      <Col lg="12">
        <div class="text-center mb-5">
          <div class="small-title">Timeline</div>
          <h4>Our Roadmap</h4>
        </div>
      </Col>
    </Row>

    <Row class="mt-4">
      <Col lg="12">
        <div class="hori-timeline" dir="ltr">
          <div class="events">
            <Carousel
              particlesToShow={4}
              dots={false}
              autoplay={false}
              arrows={false}
              bind:this={carousel}
              let:showPrevPage
              let:showNextPage
            >
              {#each events as event}
                <div class="item event-list {event.extraclass}">
                  <div>
                    <div class="event-date">
                      <div class="text-primary mb-1">{event.date}</div>
                      <h5 class="mb-4">{event.title}</h5>
                    </div>
                    <div class="event-down-icon">
                      <i
                        class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"
                      />
                    </div>

                    <div class="mt-3 px-3">
                      <p class="text-muted">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </div>
              {/each}
            </Carousel>
          </div>
          <div
            class="owl-carousel owl-theme  navs-carousel events"
            id="timeline-carousel"
          >
            <div class="owl-nav" style="text-align:center">
              <button type="button" class="border-0" on:click={goToPrevPage}>
                <i class="mdi mdi-chevron-left" />
              </button>

              <button type="button" class="border-0" on:click={goToNextPage}>
                <i class="mdi mdi-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>