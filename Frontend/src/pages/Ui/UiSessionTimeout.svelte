<script>
  import { onMount } from "svelte";
  import Swal from "sweetalert2/dist/sweetalert2.js";

  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
  } from "sveltestrap";

  import Breadcrumbs from "../../common/Breadcrumb.svelte";

  let timeralert = null;

  onMount(() => {
    main_function();
  });

  const main_function = () => {
    setTimeout(
      function () {
        setTimeout(
          function () {
            function1();
          }.bind(this),
          6000
        );
        function2();
      }.bind(this),
      6000
    );
  };

  const function1 = () => {
    if (window.location.pathname === "/ui-session-timeout") {
      window.location = "/login";
    } else {
    }
  };

  const function2 = () => {
    const nextmsg = () =>
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      });
    timeralert = nextmsg();
  };
</script>

<div class="page-content">
  <Container fluid>
    
    <Breadcrumbs title="Advanced Kit" breadcrumbItem="Sweet Alert" />

    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle class="h5 mt-0 header-title"
              >Bootstrap-session-timeout</CardTitle
            >
            <p class="sub-header">
              Session timeout and keep-alive control with a nice Bootstrap
              warning dialog.
            </p>

            <div>
              <p>
                After a set amount of idle time, a Bootstrap warning dialog is
                shown to the user with the option to either log out, or stay
                connected. If &quot;Logout&ldquo; button is selected, the page
                is redirected to a logout URL. If &quot;Stay Connected&ldquo; is
                selected the dialog closes and the session is kept alive. If no
                option is selected after another set amount of idle time, the
                page is automatically redirected to a set timeout URL.
              </p>
              <p>
                Idle time is defined as no mouse, keyboard or touch event
                activity registered by the browser.
              </p>

              <p class="mb-0">
                As long as the user is active, the (optional) keep-alive URL
                keeps getting pinged and the session stays alive. If you have no
                need to keep the server-side session alive via the keep-alive
                URL, you can also use this plugin as a simple lock mechanism
                that redirects to your lock-session or log-out URL after a set
                amount of idle time.
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>