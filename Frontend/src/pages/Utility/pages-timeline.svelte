<script>
  import { Row, Col, Card, CardBody, CardTitle } from "sveltestrap";
  import Breadcrumb from "../../common/Breadcrumb.svelte";
  import LiVerticalTimeline from "./vertical-timeline.svelte";
  import Carousel from "svelte-carousel";
  
  const events = [
    {
      id: 1,
      date: "12 September",
      title: "First event",
      desc: "It will be as simple as occidental in fact it will be Cambridge",
    },
    {
      id: 2,
      date: "06 October",
      title: "Second event",
      desc: "To an English person, it will seem like simplified English existence.",
    },
    {
      id: 3,
      date: "25 October",
      title: "Third event",
      desc: "For science, music, sport, etc, Europe uses the same vocabulary.",
    },
    {
      id: 4,
      date: "04 November",
      title: "Fourth event",
      desc: "New common language will be more simple than existing.",
    },
    {
      id: 5,
      date: "19 November",
      title: "Fifth event",
      desc: "It will be as simple as occidental in fact it will be Cambridge",
    },
    {
      id: 6,
      date: "21 December",
      title: "Sixth event",
      desc: "To an English person, it will seem like simplified English existence.",
    },
  ];
  const statuses = [
    {
      id: 1,
      stausTitle: "Ordered",
      iconClass: "bx-copy-alt",
      description: "New common language will be more simple than existing.",
    },
    {
      id: 2,
      stausTitle: "Packed",
      iconClass: "bx-package",
      description:
        "To an English person, it will seem like simplified English existence.",
    },
    {
      id: 3,
      stausTitle: "Shipped",
      iconClass: "bx-car",
      description:
        "It will be as simple as occidental in fact it will be Cambridge",
    },
    {
      id: 4,
      stausTitle: "Delivered",
      iconClass: "bx-badge-check",
      description:
        "To an English person, it will seem like simplified English existence.",
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


<div class="page-content">
  <div class="container-fluid">
    <Breadcrumb title="Utility" breadcrumbItem="Timeline" />

    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <CardTitle class="mb-4">Horizontal Timeline</CardTitle>

            <div class="hori-timeline">
              <div
                class="owl-carousel owl-theme navs-carousel events"
                id="timeline-carousel"
                dir="ltr"
              >
                <Carousel
                  particlesToShow={4}
                  arrows={false}
                  dots={false}
                  bind:this={carousel}
                  let:showPrevPage
                  let:showNextPage
                >
                  {#each events as event}
                    <div class="item event-list">
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
                <div
                  class="owl-carousel owl-theme  navs-carousel events"
                  id="timeline-carousel"
                >
                  <div class="owl-nav" style="text-align:center">
                    <button
                      type="button"
                      class="border-0"
                      on:click={goToPrevPage}
                    >
                      <i class="mdi mdi-chevron-left" />
                    </button>

                    <button
                      type="button"
                      class="border-0"
                      on:click={goToNextPage}
                    >
                      <i class="mdi mdi-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <CardTitle class="mb-5 h4">Vertical Timeline</CardTitle>
            <div class="">
              <ul class="verti-timeline list-unstyled">
                {#each statuses as status}
                  <LiVerticalTimeline {status} />
                {/each}
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
</div>
