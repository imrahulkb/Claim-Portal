<script>
  import {
    Form,
    Input,
    Row,
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
  } from "sveltestrap";

  import { _ } from "svelte-i18n";

  import { Link } from "svelte-routing";

  import LanguageDropdown from "../../common/LanguageDropdown.svelte";
  import HeaderApp from "../../common/headerApp.svelte";
  import NotificationDropdown from "../../common/NotificationDropdown.svelte";
  import ProfileMenu from "../../common/ProfileMenu.svelte";
  import RightsidebarButton from "../../Components/RightsidebarButton.svelte";

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function tToggle() {
    var body = document.body;

    body.classList.toggle("sidebar-enable");
    body.classList.toggle("vertical-collpsed");

    if (window.innerWidth >= 992) {
      if (body.getAttribute("data-sidebar-size") == "sm") {
        body.setAttribute("data-sidebar-size", "lg");
      } else {
        body.setAttribute("data-sidebar-size", "sm");
      }
    }
  }

  export let sidebar = false;
</script>

<header id="page-topbar">
  <div class="navbar-header">
    <div class="d-flex">
      <!-- LOGO -->
      <div class="navbar-brand-box">
        <a href="index" class="logo logo-dark">
          <span class="logo-sm">
            <img src="/assets/images/logo.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="/assets/images/logo-dark.png" alt="" height="17" />
          </span>
        </a>

        <a href="index" class="logo logo-light">
          <span class="logo-sm">
            <img src="/assets/images/logo-light.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="/assets/images/logo-light.png" alt="" height="19" />
          </span>
        </a>
      </div>

      

      <!-- App Search-->
      <Form class="app-search d-none d-lg-block">
        <div class="position-relative">
          <Input
            type="text"
            class="form-control"
            placeholder={$_("navbar.search.text")}
          />
          <span class="bx bx-search-alt" />
        </div>
      </Form>

   
    </div>

    <div class="d-flex">
      

      

      <!-- <Dropdown class="d-none d-lg-inline-block ms-1">
        <button
          type="button"
          class="btn header-item noti-icon headerbtn"
          on:click={toggleFullscreen}
          data-toggle="fullscreen"
        >
          <i class="bx bx-fullscreen" />
        </button>
      </Dropdown> -->


      <ProfileMenu />

     
    </div>
  </div>
</header>