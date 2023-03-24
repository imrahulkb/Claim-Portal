<script>
    import { Card, CardBody, Col, Container, Row } from 'sveltestrap';
    import AboutUs from './Candidate/AboutUs.svelte';
    import Sidebar from './Candidate/Sidebar.svelte';
</script>
<div class="page-content">
    <Container fluid>
    <Row>
        <Col lg={12}>
            <Card class="mx-n4 mt-n4 bg-info bg-soft">
                <CardBody>
                    <div class="text-center mb-4">
                        <img src="/assets/images/users/avatar-6.jpg" alt="" class="avatar-md rounded-circle mx-auto d-block" />
                        <h5 class="mt-3 mb-1">Steven Franklin</h5>
                        <p class="text-muted mb-3">UI/UX Designer</p>
                        <div class="mx-auto">
                            <span class="badge me-1 text-bg-info">Freelance</span>
                            <span class="badge me-1 text-bg-success">Active</span>
                            <span class="badge me-1 text-bg-warning">Adobe XD</span>
                            <span class="badge me-1 text-bg-warning">Figma</span>
                            <span class="badge text-bg-warning">Sketch</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <ul class="list-unstyled hstack gap-3 mb-0 flex-grow-1">
                            <li>
                                <i class="bx bx-map align-middle"></i> California
                            </li>
                            <li>
                                <i class="bx bx-money align-middle"></i> $87 / hrs
                            </li>
                            <li>
                                <i class="bx bx-time align-middle"></i> 5 days working
                            </li>
                        </ul>
                        <div class="hstack gap-2">
                            <button type="button" class="btn btn-primary">Download CV <i class='bx bx-download align-baseline ms-1'></i></button>
                            <button type="button" class="btn btn-light"><i class='bx bx-bookmark align-baseline'></i></button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>

    <Row>
        <Sidebar />
        <AboutUs />
    </Row>
    </Container>
</div>