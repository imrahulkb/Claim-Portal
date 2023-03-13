<script>
  import Carousel from 'svelte-carousel';
  import { Col } from "sveltestrap";
</script>

<Col xl={9}>
  <div class="auth-full-bg pt-lg-5 p-4">
    <div class="w-100">
      <div class="bg-overlay" />
      <div class="d-flex h-100 flex-column">
        <div class="p-4 mt-auto">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="text-center">
                <h4 class="mb-3">
                  <i
                    class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"
                  />
                  <span class="text-primary">5k</span>+ Satisfied clients
                </h4>
                <div dir="ltr">
                  <Carousel particlesToShow={1} arrows={false} dots={true}>
                    <div>
                      <div class="item">
                        <div class="py-3">
                          <p class="font-size-16 mb-4">
                            &quot;Fantastic theme with a ton of options. If you
                            just want the HTML to integrate with your project,
                            then this is the package. You can find the files in
                            the &apos;dist&lsquo; folder...no need to install
                            git and all the other stuff the documentation talks
                            about. &ldquo;
                          </p>

                          <div>
                            <h4 class="font-size-16 text-primary">Abs1981</h4>
                            <p class="font-size-14 mb-0">- Skote User</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="item">
                        <div class="py-3">
                          <p class="font-size-16 mb-4">
                            &quot;If Every Vendor on Envato are as supportive as
                            Themesbrand, Development with be a nice experience.
                            You guys are Wonderful. Keep us the good work.
                            &ldquo;
                          </p>

                          <div>
                            <h4 class="font-size-16 text-primary">Abs1981</h4>
                            <p class="font-size-14 mb-0">- Skote User</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Col>