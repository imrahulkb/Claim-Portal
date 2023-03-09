<script>
  import {
    Row,
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu
  } from "sveltestrap";

  import { Link } from "svelte-routing";

  import { _ } from "svelte-i18n";

  import LanguageDropdown from "../../common/LanguageDropdown.svelte";
  import NotificationDropdown from "../../common/NotificationDropdown.svelte";
  import ProfileMenu from "../../common/ProfileMenu.svelte";
  import HeaderApp from "../../common/headerApp.svelte";
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

  export let sidebar = false;
</script>

<header id="page-topbar">
  <div class="navbar-header">
    <div class="d-flex">
      <div class="navbar-brand-box">
        <Link to="/" class="logo logo-dark">
          <span class="logo-sm">
            <img src="assets/images/logo.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="assets/images/logo-dark.png" alt="" height="17" />
          </span>
        </Link>

        <Link to="/" class="logo logo-light">
          <span class="logo-sm">
            <img src="assets/images/logo-light.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="assets/images/logo-light.png" alt="" height="19" />
          </span>
        </Link>
      </div>

      <button
        type="button"
        class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
        data-toggle="collapse"
        onClick={this.toggleMenu}
        data-target="#topnav-menu-content"
      >
        <i class="fa fa-fw fa-bars" />
      </button>

      <form class="app-search d-none d-lg-block">
        <div class="position-relative">
          <input type="text" class="form-control" placeholder="Search..." />
          <span class="bx bx-search-alt" />
        </div>
      </form>

       <Dropdown class="dropdown-mega d-none d-lg-block ms-2">
        <DropdownToggle class="btn header-item" color="white" caret tag="button">
          {$_("navbar.dropdown.megamenu.text")}
          <i class="mdi mdi-chevron-down" />
        </DropdownToggle>
        <DropdownMenu class="dropdown-menu dropdown-megamenu">
          <Row>
            <Col sm={8}>
              <Row>
                <Col md={4}>
                  <h5 class="font-size-14 mt-0">
                    {$_("navbar.dropdown.megamenu.uicontent.title")}
                  </h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.lightbox"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_("navbar.dropdown.megamenu.uicontent.list.rangeslider")}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.sweetalert"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.rating"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.forms"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.tables"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.charts"
                        )}</Link
                      >
                    </li>
                  </ul>
                </Col>

                <Col md={4}>
                  <h5 class="font-size-14 mt-0">
                    {$_("navbar.dropdown.megamenu.application.title")}
                  </h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.ecommerce"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.calendar"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.email"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.projects"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.tasks"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.contacts"
                        )}</Link
                      >
                    </li>
                  </ul>
                </Col>

                <Col md={4}>
                  <h5 class="font-size-14 mt-0">
                    {$_("navbar.dropdown.megamenu.extrapages.title")}
                  </h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <Link to="#">
                        {$_(
                          "navbar.dropdown.megamenu.extrapages.list.lightsidebar"
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {$_(
                          "navbar.dropdown.megamenu.extrapages.list.compactsidebar"
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {$_(
                          "navbar.dropdown.megamenu.extrapages.list.horizontallayout"
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {$_(
                          "navbar.dropdown.megamenu.extrapages.list.maintenance"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.extrapages.list.comingsoon"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.extrapages.list.timeline"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.extrapages.list.faqs"
                        )}</Link
                      >
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <Row>
                <Col sm={6}>
                  <h5 class="font-size-14 mt-0">
                    {$_("navbar.dropdown.megamenu.uicontent.title")}
                  </h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.lightbox"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.rangeslider"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.sweetalert"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.rating"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.forms"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.tables"
                        )}</Link
                      >
                    </li>
                    <li>
                      <Link to="#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.charts"
                        )}</Link
                      >
                    </li>
                  </ul>
                </Col>

                <Col sm={5}>
                  <div>
                    <img
                      src="assets/images/megamenu-img.png"
                      alt=""
                      class="img-fluid mx-auto d-block"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </DropdownMenu>
      </Dropdown>
    </div>

    <div class="d-flex">

      <LanguageDropdown />

      <HeaderApp />

      <Dropdown class="d-none d-lg-inline-block ms-1">
        <button
          type="button"
          class="btn header-item noti-icon headerbtn"
          on:click={toggleFullscreen}
          data-toggle="fullscreen"
        >
          <i class="bx bx-fullscreen" />
        </button>
      </Dropdown>

      <NotificationDropdown />

      <ProfileMenu />

      <Dropdown class="d-inline-block">
        <RightsidebarButton bind:open={sidebar} />
      </Dropdown>
    </div>
  </div>
</header>
