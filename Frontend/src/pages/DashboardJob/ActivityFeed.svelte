<script>
    import { Card, CardBody, Col } from 'sveltestrap';
    import { Link } from "svelte-routing";
</script>
<Col lg={4}>
    <Card>
        <CardBody>
            <h4 class="card-title mb-4">Activity Feed</h4>
            <div data-simplebar style="max-height: 376px">
                <ul class="verti-timeline list-unstyled">
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <img src="/assets/images/users/avatar-5.jpg" alt="" class="avatar-xs rounded-circle" />
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    <b>Charles Brown</b> applied for the job <b>Sr.frontend Developer</b>
                                    <p class="mb-0 text-muted">3 min ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-xs">
                                    <div class="avatar-title bg-primary text-primary bg-soft rounded-circle">
                                        <i class='bx bx-revision font-size-14'></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    Your subscription expires today <Link to="#">Renew Now</Link>
                                    <p class="text-muted mb-0">53 min ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-xs">
                                    <div class="avatar-title bg-primary text-primary bg-soft rounded-circle">
                                        JA
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    <b>Jennifer Alexandar</b> created a new account as a <b>Freelance</b>. 
                                    <p class="text-muted mb-0">1 hrs ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <img src="/assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle" />
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    <b>Mark Ellison</b> applied for the job <b>Project Manager</b>
                                    <p class="mb-0 text-muted">3 hrs ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="event-list">
                        <div class="event-timeline-dot">
                            <i class="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-xs">
                                    <div class="avatar-title bg-primary text-primary bg-soft rounded-circle">
                                        AZ
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div>
                                    <b>Acolin Zelton</b> created a new account as a <b>Freelance</b>.
                                    <p class="text-muted mb-0">1 hrs ago</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="text-center mt-4">
                    <Link to="#" class="btn btn-primary waves-effect waves-light btn-sm">View More <i class="mdi mdi-arrow-right ms-1"></i></Link>
                </div>
            </div>
        </CardBody>
    </Card>
</Col>