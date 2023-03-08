<script>
  import { Container, Row, Col, Card, CardBody, Button } from "sveltestrap";
  import { Link } from "svelte-routing";

  const countdown = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 1, 2023").getTime();

    // Update the count down every 1 second
    var countDown = setInterval(function () {
      // Get today's date and time
      var currentTime = new Date().getTime();

      // Find the distance between currentTime and the count down date
      var distance = countDownDate - currentTime;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var countDownBlock =
        '<div class="coming-box">' +
        days +
        "<span>Days</span></div>" +
        '<div class="coming-box">' +
        hours +
        "<span>Hours</span>" +
        "</div>" +
        '<div class="coming-box">' +
        minutes +
        "<span>Minutes</span>" +
        "</div>" +
        '<div class="coming-box">' +
        seconds +
        "<span>Seconds</span>" +
        "</div>";

      // Output the result in an element with id="countDownBlock"
      document.getElementById("countdown").innerHTML = countDownBlock;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(countDown);
        document.getElementById("countdown").innerHTML =
          '<div class="countdown-endtxt">The countdown has ended!</div>';
      }
    }, 1000);
  };
  var isCountdown = document.getElementById("countdown");
  if (isCountdown) {
    countdown();
  }
</script>

<section class="section hero-section bg-ico-hero" id="home">
  <div class="bg-overlay bg-primary" />
  <Container>
    <Row class="align-items-center">
      <Col lg="5">
        <div class="text-white-50">
          <h1 class="text-white fw-semibold mb-3 hero-title">
            Skote - Ico Landing for a cryptocurrency business
          </h1>
          <p class="font-size-14">
            It will be as simple as occidental in fact to an English person, it
            will seem like simplified as a skeptical Cambridge
          </p>

          <div class="d-flex flex-wrap gap-2 mt-4">
            <Link to="#" class="btn btn-success">Get Whitepaper</Link>{" "}
            <Link to="#" class="btn btn-light">How it work</Link>
          </div>
        </div>
      </Col>
      <Col lg="5" md="8" sm="10" class="ms-lg-auto">
        <Card class="overflow-hidden mb-0 mt-5 mt-lg-0">
          <div class="card-header text-center">
            <h5 class="mb-0">ICO Countdown time</h5>
          </div>
          <CardBody>
            <div class="text-center">
              <h5>Time left to Ico :</h5>
              <div class="mt-4">
                <div id="countdown" class="counter-number ico-countdown" />
              </div>

              <div class="mt-4">
                <Button type="button" color="success" class="w-md">
                  Get Token
                </Button>
              </div>

              <div class="mt-5">
                <h4 class="fw-semibold">1 ETH = 2235 SKT</h4>
                <div class="clearfix mt-4">
                  <h5 class="float-end font-size-14">5234.43</h5>
                </div>
                <div class="progress p-1 progress-xl softcap-progress">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    style="width: 15%"
                  >
                    <div class="progress-label">15 %</div>
                  </div>
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style="width: 30%"
                  >
                    <div class="progress-label">30 %</div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</section>
