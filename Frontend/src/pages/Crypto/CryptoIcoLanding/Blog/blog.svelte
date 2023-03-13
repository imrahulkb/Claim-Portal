<script>
  import { Link } from "svelte-routing";
  import { Container, Row, Col } from "sveltestrap";
  const blogs = [
    {
      imgUrl: "assets/images/crypto/blog/img-1.jpg",
      tag: "Cryptocurrency",
      date: "04 Mar, 2020",
      title: "Donec pede justo, fringilla vele",
      desc: "If several languages coalesce, the grammar of the resulting language",
    },
    {
      imgUrl: "assets/images/crypto/blog/img-2.jpg",
      tag: "Cryptocurrency",
      date: "12 Feb, 2020",
      title: "Aenean ut eros et nisl",
      desc: "Everyone realizes why a new common language would be desirable",
    },
    {
      imgUrl: "assets/images/crypto/blog/img-3.jpg",
      tag: "Cryptocurrency",
      date: "06 Jan, 2020",
      title: "In turpis, pellentesque posuere",
      desc: "To an English person, it will seem like simplified English, as a skeptical Cambridge",
    },
  ];
</script>

<section class="section bg-white" id="news">
  <Container>
    <Row>
      <Col lg="12">
        <div class="text-center mb-5">
          <div class="small-title">Blog</div>
          <h4>Latest News</h4>
        </div>
      </Col>
    </Row>

    <Row>
      {#each blogs as blog}
        <Col xl="4" sm="6">
          <div class="blog-box mb-4 mb-xl-0">
            <div class="position-relative">
              <img
                src={blog.imgUrl}
                alt=""
                class="rounded img-fluid mx-auto d-block"
              />
              <div class="badge bg-success blog-badge font-size-11">
                {blog.tag}
              </div>
            </div>

            <div class="mt-4 text-muted">
              <p class="mb-2">
                <i class="bx bx-calendar me-1" />
                {blog.date}
              </p>
              <h5 class="mb-3">{blog.title}</h5>
              <p>{blog.desc}</p>

              <div>
                <Link to="#">Read more</Link>
              </div>
            </div>
          </div>
        </Col>
      {/each}
    </Row>
  </Container>
</section>