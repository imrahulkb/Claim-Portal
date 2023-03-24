<script>
    import { Card, CardBody, Col, Row } from 'sveltestrap';
    import {Link} from 'svelte-routing'
</script>
<Col lg={9}>
    <Card>
        <CardBody>
            <h5 class="mb-3">About Us</h5>
            <p class="text-muted">Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
            <p class="text-muted mb-4">As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.</p>
            
            <h5 class="mb-3">Education</h5>
            <ul class="verti-timeline list-unstyled">
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="bx bx-right-arrow-circle"></i>
                    </div>
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <div>
                                <h6 class="font-size-14 mb-1">BCA - Bachelor of Computer Applications</h6>
                                <p class="text-muted">International University - (2004-2010)</p>
                                
                                <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
            
                            </div>
                        </div>
                    </div>
                </li>
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="bx bx-right-arrow-circle"></i>
                    </div>
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <div>
                                <h6 class="font-size-14 mb-1">MCA - Master of Computer Application</h6>
                                <p class="text-muted">International University - (2010-2012)</p>
                                
                                <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="event-list">
                    <div class="event-timeline-dot">
                        <i class="bx bx-right-arrow-circle"></i>
                    </div>
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <div>
                                <h6 class="font-size-14 mb-1">Design Communication Visual</h6>
                                <p class="text-muted">International University - (2012-2015)</p>

                                <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </CardBody>
    </Card>
    <Row>
        <Col lg={12}>
            <h5 class="mb-3">Projects</h5>
        </Col>
        <Col xl={4}>
            <Card>
                <CardBody>
                    <div class="d-flex">
                        <div class="flex-shrink-0 me-4">
                            <div class="avatar-md">
                                <span class="avatar-title rounded-circle bg-light text-danger font-size-16">
                                    <img src="/assets/images/companies/img-1.png" alt="" height="30" />
                                </span>
                            </div>
                        </div>
    
    
                        <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate font-size-15"><Link to="#" class="text-dark">New admin Design</Link></h5>
                            <p class="text-muted mb-4">It will be as simple as Occidental</p>
                            <div class="avatar-group">
                                <div class="avatar-group-item">
                                    <Link to="#" class="d-inline-block">
                                        <img src="/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs" />
                                    </Link>
                                </div>
                                <div class="avatar-group-item">
                                    <Link to="#" class="d-inline-block">
                                        <img src="/assets/images/users/avatar-5.jpg" alt="" class="rounded-circle avatar-xs" />
                                    </Link>
                                </div>
                                <div class="avatar-group-item">
                                    <Link to="#" class="d-inline-block">
                                        <div class="avatar-xs">
                                            <span class="avatar-title rounded-circle bg-success text-white font-size-16">
                                                A
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div class="avatar-group-item">
                                    <Link to="#" class="d-inline-block">
                                        <img src="/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xs" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <div class="px-4 py-3 border-top">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item me-3">
                            <span class="badge bg-success">Completed</span>
                        </li>{" "}
                        <li class="list-inline-item me-3">
                            <i class="bx bx-calendar me-1"></i> 15 Oct, 22
                        </li>{" "}
                        <li class="list-inline-item me-3">
                            <i class="bx bx-comment-dots me-1"></i> 214
                        </li>
                    </ul>
                </div>
            </Card>
        </Col>
        <Col xl={4}>
            <Card>
                <CardBody>
                    <div class="d-flex">
                        <div class="flex-shrink-0 me-4">
                            <div class="avatar-md">
                                <span class="avatar-title rounded-circle bg-light text-danger font-size-16">
                                    <img src="/assets/images/companies/img-4.png" alt="" height="30" />
                                </span>
                            </div>
                        </div>
            
                        <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate font-size-15"><Link to="#" class="text-dark">App Landing UI</Link></h5>
                            <p class="text-muted mb-4">To achieve it would be necessary</p>
                            <div class="avatar-group">
                                <div class="avatar-group-item">
                                    <Link to="#" class="d-inline-block">
                                        <div class="avatar-xs">
                                            <span class="avatar-title rounded-circle bg-pink text-white font-size-16">
                                                L
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div class="avatar-group-item">
                                    <Link to="#" class="d-inline-block">
                                        <img src="/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xs" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <div class="px-4 py-3 border-top">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item me-3">
                            <span class="badge bg-success">Completed</span>
                        </li>{" "}
                        <li class="list-inline-item me-3">
                            <i class="bx bx-calendar me-1"></i> 11 Oct, 22
                        </li>{" "}
                        <li class="list-inline-item me-3">
                            <i class="bx bx-comment-dots me-1"></i> 185
                        </li>
                    </ul>
                </div>
            </Card>
        </Col>
        <Col xl={4}>
            <Card>
                <CardBody>
                    <div class="d-flex">
                        <div class="flex-shrink-0 me-4">
                            <div class="avatar-md">
                                <span class="avatar-title rounded-circle bg-light text-danger font-size-16">
                                    <img src="/assets/images/companies/img-5.png" alt="" height="30" />
                                </span>
                            </div>
                        </div>
            
                        <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate font-size-15"><Link to="#" class="text-dark">Skote Dashboard UI</Link></h5>
                            <p class="text-muted mb-4">Separate existence is a myth</p>
                            <div class="avatar-group">
                                <div class="avatar-group-item">
                                    <Link to="#" class="d-inline-block">
                                        <img src="/assets/images/users/avatar-1.jpg" alt="" class="rounded-circle avatar-xs" />
                                    </Link>
                                </div>
                                <div class="avatar-group-item">
                                    <Link to="#" class="d-inline-block">
                                        <img src="/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs" />
                                    </Link>
                                </div>
                                <div class="avatar-group-item">
                                    <Link to="#" class="d-inline-block">
                                        <div class="avatar-xs">
                                            <span class="avatar-title rounded-circle bg-danger text-white font-size-16">
                                                3+
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <div class="px-4 py-3 border-top">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item me-3">
                            <span class="badge bg-success">Completed</span>
                        </li>{" "}
                        <li class="list-inline-item me-3">
                            <i class="bx bx-calendar me-1"></i> 13 Oct, 22
                        </li>{" "}
                        <li class="list-inline-item me-3">
                            <i class="bx bx-comment-dots me-1"></i> 194
                        </li>
                    </ul>
                </div>
            </Card>
        </Col>
    </Row>
    
    <Row>
        <Col lg={12}>
            <Card>
                <CardBody class="border-bottom">
                    <h5 class="mb-3">Social Media</h5>
                    <div class="hstack gap-2">
                        <Link to="#!" class="btn btn-soft-primary"><i class="bx bxl-facebook align-middle me-1"></i> Facebook </Link>
                        <Link to="#!" class="btn btn-soft-info"><i class="bx bxl-twitter align-middle me-1"></i> Twitter</Link>
                        <Link to="#!" class="btn btn-soft-pink"><i class="bx bxl-instagram align-middle me-1"></i> Instagram</Link>
                        <Link to="#!" class="btn btn-soft-success"><i class="bx bxl-whatsapp align-middle me-1"></i> Whatsapp</Link>
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>

</Col>