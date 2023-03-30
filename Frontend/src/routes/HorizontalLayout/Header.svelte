<script>
  import { Link } from "svelte-routing";

  import ProfileMenu from "../../common/ProfileMenu.svelte";

</script>

<header id="page-topbar">
  <div id="navbar-header">
    <Link to="/">
      <!-- <span class="logo-sm">
        <img src="assets/images/logo-light.svg" alt="" height="22" />
      </span> -->
        <img src="assets/images/IEEE-BS-Logo.png" id="logo" alt="IEEE-BS-Logo" />
    </Link>

    <h1 id="Title" class="mb-0 text-dark">Claim Portal</h1>

    <div class="d-flex">
      <ProfileMenu />
    </div>
  </div>
</header>

<style>
  #navbar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
  #logo {
    height: 50px;
    display: block;
  }
</style>
