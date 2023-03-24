<script>
    import { Card, CardBody, Col, Container, Row } from "sveltestrap";
    import { Link } from "svelte-routing";
    import Breadcrumb from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
    <Container fluid={true}>
        <Breadcrumb title="UI Elements" breadcrumbItem="Placeholders" />

        <Row>
            <Col xl={6}>
                <Card>
                    <CardBody>
                        <h4 class="card-title">Default Examples</h4>
                        <p class="card-title-desc">
                            In the example below, we take a typical card
                            component and recreate it with placeholders applied
                            to create a “loading card”. Size and proportions are
                            the same between the two.
                        </p>

                        <Row class="gap-4">
                            <Col lg={5}>
                                <Card class="shadow-none border mb-0">
                                    <img
                                        src="assets/images/small/img-1.jpg"
                                        class="card-img-top"
                                        alt="..."
                                    />

                                    <CardBody>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card&apos;s content.
                                        </p>
                                        <Link to="#" class="btn btn-primary"
                                            >Go somewhere</Link
                                        >
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={5}>
                                <Card
                                    class="shadow-none border mb-0"
                                    aria-hidden="true"
                                >
                                    <img
                                        src="assets/images/small/img-1.jpg"
                                        class="card-img-top"
                                        alt="..."
                                    />
                                    <CardBody>
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6" />
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7" />
                                            <span class="placeholder col-4" />
                                            <span class="placeholder col-4" />
                                            <span class="placeholder col-6" />
                                            <span class="placeholder col-8" />
                                        </p>
                                        <Link
                                            to="#"
                                            tabIndex="-1"
                                            class="btn btn-primary disabled placeholder col-6"
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

            <Col xl={6}>
                <Card>
                    <CardBody>
                        <h4 class="card-title">
                            Placeholders with Grid column
                        </h4>
                        <p class="card-title-desc">
                            Create placeholders with the <code
                                >.placeholder</code
                            >
                            class and a grid column class (e.g.,
                            <code>.col-6</code>) to set the <code>width</code>.
                            They can replace the text inside an element or be
                            added as a modifier class to an existing component.
                        </p>

                        <div>
                            <p aria-hidden="true">
                                <span class="placeholder col-6" />
                            </p>

                            <Link
                                to="#"
                                tabIndex="-1"
                                class="btn btn-primary disabled placeholder col-4"
                                aria-hidden="true"
                            />
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <h4 class="card-title">Placeholders Width</h4>
                        <p class="card-title-desc">
                            You can change the <code>width</code> through grid column
                            classes, width utilities, or inline styles.
                        </p>

                        <div>
                            <span class="placeholder col-6" />
                            <span class="placeholder w-75" />
                            <span class="placeholder" style="width: 25%" />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col xl={6}>
                <Card>
                    <CardBody>
                        <h4 class="card-title">Placeholders Color</h4>
                        <p class="card-title-desc">
                            By default, the <code>placeholder</code> uses
                            <code>currentColor</code>. This can be overridden
                            with a custom color or utility class.
                        </p>

                        <div>
                            <span class="placeholder col-12" />
                            <span class="placeholder col-12 bg-primary" />
                            <span class="placeholder col-12 bg-secondary" />
                            <span class="placeholder col-12 bg-success" />
                            <span class="placeholder col-12 bg-danger" />
                            <span class="placeholder col-12 bg-warning" />
                            <span class="placeholder col-12 bg-info" />
                            <span class="placeholder col-12 bg-light" />
                            <span class="placeholder col-12 bg-dark" />
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col xl={6}>
                <Card>
                    <CardBody>
                        <h4 class="card-title">Placeholders Sizing</h4>
                        <p class="card-title-desc">
                            The size of <code>.placeholder</code>s are based on
                            the typographic style of the parent element.
                            Customize them with sizing modifiers:
                            <code>.placeholder-lg</code>,
                            <code>.placeholder-sm</code>, or
                            <code>.placeholder-xs</code>.
                        </p>

                        <div>
                            <span class="placeholder col-12 placeholder-lg" />
                            <span class="placeholder col-12" />
                            <span class="placeholder col-12 placeholder-sm" />
                            <span class="placeholder col-12 placeholder-xs" />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col xl={6}>
                <Card>
                    <CardBody>
                        <h4 class="card-title">Animation in Placeholders</h4>
                        <p class="card-title-desc">
                            Animate placeholders with <code
                                >.placeholder-glow</code
                            >
                            or <code>.placeholder-wave</code> to better convey
                            the perception of something being <em>actively</em> loaded.
                        </p>

                        <div>
                            <p class="placeholder-glow">
                                <span class="placeholder col-12" />
                            </p>

                            <p class="placeholder-wave mb-0">
                                <span class="placeholder col-12" />
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</div>
