<script>
  import { Link } from "svelte-routing";
  import { Container, Row, Col } from "sveltestrap";
  import FooterLink from "./footer-link.svelte";
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { title: "About Us", link: "#" },
        { title: "Features", link: "#" },
        { title: "Team", link: "#" },
        { title: "News", link: "#" },
        { title: "FAQs", link: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Whitepaper", link: "#" },
        { title: "Token sales", link: "#" },
        { title: "Privacy Policy", link: "#" },
        { title: "Terms & Conditions", link: "#" },
      ],
    },
    {
      title: "Links",
      links: [
        { title: "Tokens", link: "#" },
        { title: "Roadmap", link: "#" },
        { title: "FAQs", link: "#" },
      ],
    },
  ];
</script>

<footer class="landing-footer">
  <Container>
    <Row>
      {#each footerLinks as footerLink}
        <Col lg="3" sm="6">
          <div class="mb-4 mb-lg-0">
            <h5 class="mb-3 footer-list-title">
              {footerLink.title}
            </h5>
            <ul class="list-unstyled footer-list-menu">
              {#each footerLink.links as Flink}
                <li>
                  <Link to={Flink.link}>{Flink.title}</Link>
                </li>
              {/each}
            </ul>
          </div>
        </Col>
      {/each}

      <Col lg="3" sm="6">
        <div class="mb-4 mb-lg-0">
          <h5 class="mb-3 footer-list-title">Latest News</h5>
          <div class="blog-post">
            <Link to="#" class="post">
              <div class="badge badge-soft-success font-size-11 mb-3">
                Cryptocurrency
              </div>
              <h5 class="post-title">Donec pede justo aliquet nec</h5>
              <p class="mb-0">
                <i class="bx bx-calendar me-1" /> 04 Mar, 2020
              </p>
            </Link>
            <Link to="#" class="post">
              <div class="badge badge-soft-success font-size-11 mb-3">
                Cryptocurrency
              </div>
              <h5 class="post-title">In turpis, Pellentesque</h5>
              <p class="mb-0">
                <i class="bx bx-calendar me-1" /> 12 Mar, 2020
              </p>
            </Link>
          </div>
        </div>
      </Col>
    </Row>

    <hr class="footer-border my-5" />

    <FooterLink />
  </Container>
</footer>