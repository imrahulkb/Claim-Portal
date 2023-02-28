<script>
	import { onMount } from 'svelte';
  import {
    Nav,
    NavbarToggler,
    NavItem,
    NavLink,
    Container
  } from "sveltestrap";
  import { Link } from "svelte-routing";

  const navItems = [
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 2, idnm: "about", navheading: "About" },
    { id: 3, idnm: "features", navheading: "Features" },
    { id: 3, idnm: "roadmap", navheading: "Roadmap" },
    { id: 4, idnm: "team", navheading: "Team" },
    { id: 5, idnm: "news", navheading: "News" },
    { id: 6, idnm: "faqs", navheading: "FAQs" },
  ];
  let isOpenMenu = false;

  onMount(() => {
    windowScroll();
  });

  const windowScroll = () => {
    const navbar = document.getElementById("navbar");
    if(navbar){
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    }
  }

  window.addEventListener("scroll", windowScroll);

</script>

<nav class="navbar navbar-expand-lg navigation fixed-top sticky" id="navbar">
  <Container>
    <a class="navbar-logo" href="index">
      <img src="assets/images/logo-dark.png" alt="" height="19" class="logo logo-dark">
      <img src="assets/images/logo-light.png" alt="" height="19" class="logo logo-light">
    </a>

    <NavbarToggler class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" on:click={() => (isOpenMenu = !isOpenMenu)}>
      <i class="fa fa-fw fa-bars" />
    </NavbarToggler>
    
    <div id="topnav-menu-content" {isOpenMenu} navbar>
      <div data-nav="list" class="navbar-collapse">
        <Nav class="ms-auto navbar-nav" id="navbar">
          {#each navItems as item}
            <NavItem class={item.navheading === "Home" ? "active" : ""}>
              <NavLink href={"#" + item.idnm}>
                {" "}
                {item.navheading}
              </NavLink>
            </NavItem>
          {/each}
        </Nav>
        <div class="ms-lg-2">
          <Link to="#" class="btn btn-outline-success w-xs">Sign in</Link>
        </div>
      </div>
    </div>

  </Container>
</nav>