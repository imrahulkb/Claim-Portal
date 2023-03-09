<script>
  import Swal from "sweetalert2/dist/sweetalert2.js";

  import {
    Button,
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
  } from "sveltestrap";

  import Breadcrumbs from "../../common/Breadcrumb.svelte";

  import 'sweetalert2/src/sweetalert2.scss';

  const showSwal = (type) => {
    if (type === "basic") {
      Swal.fire({
        title: "Any fool can use a computer",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-primary",
      });
    } else if (type === "question") {
      Swal.fire({
        title: "Are you sure?",
        text: "A few words about this sweet alert ...",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-default",
        icon: "question",
      });
    } else if (type === "success") {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        icon: "success",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      });
    } else if (type === "confirm") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(52, 195, 175)",
        cancelButtonColor: "rgb(244, 106, 106)",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } else if (type === "cancel") {
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            "Deleted!",
            "Your imaginary file has been deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    } else if (type === "customimg") {
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "assets/images/logo-dark.png",
        imageHeight: 20,
        imageAlt: "Custom image",
      });
    } else if (type === "timer") {
      let timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 10000,
        timerProgressBar: true,
        buttonsStyling: true,
        confirmButtonClass: "btn btn-primary",
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getContent();
            if (content) {
              const b = content.querySelector("b");
              if (b) {
                b.textContent = Swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    } else if (type === "customhtml") {
      Swal.fire({
        title: "<i>HTML</i> <u>example</u>",
        icon: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//Pichforest.in/">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down",
        confirmButtonColor: "rgb(71, 189, 154)",
        cancelButtonColor: "rgb(244, 106, 106)",
      });
    } else if (type === "customposition") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (type === "custombackground") {
      Swal.fire({
        title: "Custom width, padding, background.",
        width: 600,
        padding: "100px",
        background: "url(assets/images/modal-bg.png) rgb(255, 255, 255)",
        display: "flex",
      });
    } else if (type === "ajax") {
      Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
          });
        }
      });
    } else if (type === "queue") {
      Swal.mixin({
        input: "text",
        confirmButtonText: "Next &rarr;",
        showCancelButton: true,
        progressSteps: ["1", "2", "3"],
      })
        .queue([
          {
            title: "Question 1",
            text: "Chaining swal2 modals is easy",
          },
          "Question 2",
          "Question 3",
        ])
        .then((result) => {
          if (result.value) {
            const answers = JSON.stringify(result.value);
            Swal.fire({
              title: "All done!",
              html: `
        Your answers:
        <pre><code>${answers}</code></pre>
      `,
              confirmButtonText: "Lovely!",
            });
          }
        });
    } else if (type === "dynamicqueue") {
      const ipAPI = "//api.ipify.org?format=json";

      Swal.queue([
        {
          title: "Your public IP",
          confirmButtonText: "Show my public IP",
          text: "Your public IP will be received " + "via AJAX request",
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return fetch(ipAPI)
              .then((response) => response.json())
              .then((data) => Swal.insertQueueStep(data.ip))
              .catch(() => {
                Swal.insertQueueStep({
                  icon: "error",
                  title: "Unable to get your public IP",
                });
              });
          },
        },
      ]);
    }
  };
</script>

<svelte:head>
    @import 'sweetalert2/src/sweetalert2.scss';
</svelte:head>

<div class="page-content">
  <Container fluid>
    <Breadcrumbs title="Advanced Kit" breadcrumbItem="Sweet Alert" />

    <Row>
      <Col xs={12}>
        <Card>
          <CardBody>
            <CardTitle class="h4">Examples</CardTitle>
            <p class="card-title-desc">
              A beautiful, responsive, customizable and accessible (WAI-ARIA)
              replacement for JavaScript's popup boxes. Zero dependencies.
            </p>

            <Row class="text-center">
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>A basic message</p>
                  <Button
                    on:click={() => showSwal("basic")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>A title with a text under</p>
                  <Button
                    on:click={() => showSwal("question")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>A success message!</p>
                  <Button
                    on:click={() => showSwal("success")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>
                    A warning message, with a function attached to the
                    "Confirm"-button...
                  </p>
                  <Button
                    on:click={() => showSwal("confirm")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>
                    By passing a parameter, you can execute something else for
                    "Cancel".
                  </p>
                  <Button
                    on:click={() => showSwal("cancel")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>A message with custom Image Header</p>
                  <Button
                    on:click={() => showSwal("customimg")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>A message with auto close timer</p>
                  <Button
                    on:click={() => showSwal("timer")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>Custom HTML description and buttons</p>
                  <Button
                    on:click={() => showSwal("customhtml")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>A custom positioned dialog</p>
                  <Button
                    on:click={() => showSwal("customposition")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>A message with custom width, padding and background</p>
                  <Button
                    on:click={() => showSwal("custombackground")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
              <Col xl="3" lg="4" sm="6" class="mb-2">
                <div class="p-3">
                  <p>Ajax request example</p>
                  <Button
                    on:click={() => showSwal("ajax")}
                    color="primary"
                    class="waves-effect waves-light">Click me</Button
                  >
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>