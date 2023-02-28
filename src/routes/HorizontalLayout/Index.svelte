<script>
  import Navbar from "./Navbar.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Rightbar from "../../Components/Rightbar.svelte";

  let open = false;
  let show = false;
</script>

<div id="layout-wrapper">
  <Navbar bind:show />
  <Header bind:sidebar={open} bind:topbar={show} />

  <div class="main-content" id="maincontent">
    <slot />
  </div>

  <Footer />

  <Rightbar layout="horizontal" bind:open />
</div>
