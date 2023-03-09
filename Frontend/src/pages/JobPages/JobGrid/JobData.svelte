<script>
    import { html } from 'gridjs';
	import Grid from 'gridjs-svelte';
    import { Link } from 'svelte-routing'
    import { Card, CardBody, Col, Modal, ModalBody, ModalHeader, Row, Label, Input,Button } from 'sveltestrap';
    

    let modal = false;
    const setModal = () => (modal = !modal);

    const jobsGridData = [
        {
            id: 1,
            img: "/assets/images/companies/adobe.svg",
            title: "Magento Developer"
        },
        {
            id: 2,
            img: "/assets/images/companies/adobe-photoshop.svg",
            title: "Product Designer"
        },
        {
            id: 3,
            img: "/assets/images/companies/airbnb.svg",
            title: "Marketing Director"
        },
        {
            id: 4,
            img: "/assets/images/companies/amazon.svg",
            title: "Project Manager"
        },
        {
            id: 5,
            img: "/assets/images/companies/flutter.svg",
            title: "HTML Developer"
        },
        {
            id: 6,
            img: "/assets/images/companies/mailchimp.svg",
            title: "Business Associate"
        },
        {
            id: 7,
            img: "/assets/images/companies/line.svg",
            title: "Product Sales Specialist"
        },
        {
            id: 8,
            img: "/assets/images/companies/spotify.svg",
            title: "Magento Developer"
        },
        {
            id: 9,
            img: "/assets/images/companies/wordpress.svg",
            title: "Magento Developer"
        },
        {
            id: 10,
            img: "/assets/images/companies/upwork.svg",
            title: "Magento Developer"
        },
        {
            id: 11,
            img: "/assets/images/companies/sass.svg",
            title: "Magento Developer"
        },
        {
            id: 12,
            img: "/assets/images/companies/reddit.svg",
            title: "Magento Developer"
        },
    ]
</script>

<Row>
    {#each jobsGridData as item}
        <Col xl={3} md={6}>
            <Card>
                <CardBody>
                    <div class="favorite-icon">
                        <Link to="#"><i class="uil uil-heart-alt fs-18"></i></Link>
                    </div>
                    <img src={item.img} alt="" height="50" class="mb-3" />
                    <h5 class="fs-17 mb-2">
                        <Link to="/job-details" class="text-dark">{item.title}</Link> <small class="text-muted fw-normal">(0-2 Yrs Exp.)</small></h5>
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <p class="text-muted fs-14 mb-1">Skote Technology Pvt.Ltd</p>
                        </li>{" "}
                        <li class="list-inline-item">
                            <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> California</p>
                        </li>
                        <li class="list-inline-item">
                            <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> $250 - $800 / month</p>
                        </li>
                    </ul>
                    <div class="mt-3 hstack gap-2">
                        <span class="badge rounded-1 badge-soft-success">Full Time</span>
                        <span class="badge rounded-1 badge-soft-warning">Urgent</span>
                        <span class="badge rounded-1 badge-soft-info">Private</span>
                    </div>
                    <div class="mt-4 hstack gap-2">
                        <Link to="/job-details" class="btn btn-soft-success w-100">View Profile</Link>
                        <Button on:click={setModal} class="btn btn-soft-primary w-100">Apply Now</Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    {/each}
</Row>

<Row class="justify-content-between align-items-center mb-3">
    <div class="col-auto me-auto">
        <p class="text-muted mb-0">Showing <b>1</b> to <b>12</b> of <b>45</b> entries</p>
    </div>
    <div class="col-auto">
        <Card class="d-inline-block ms-auto mb-0">
            <CardBody class="p-2">
                <nav aria-label="Page navigation example" class="mb-0">
                    <ul class="pagination mb-0">
                        <li class="page-item">
                            <Link class="page-link" to="#">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                        <li class="page-item"><Link class="page-link" to="#">1</Link></li>
                        <li class="page-item active"><Link class="page-link" to="#">2</Link></li>
                        <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                        <li class="page-item"><Link class="page-link" to="#">...</Link></li>
                        <li class="page-item"><Link class="page-link" to="#">12</Link></li>
                        <li class="page-item">
                            <Link class="page-link" to="#">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </CardBody>
        </Card>
    </div>
</Row>

<Modal
    isOpen={modal}
    {setModal}
    id="applyJobs"
>
    <div class="modal-content">
        <ModalHeader {setModal} id="applyJobsLabel" class="modal-header">
            Apply For This Job
        </ModalHeader>
        <ModalBody>
            <Row>
                <Col lg={12}>
                    <div class="mb-3">
                        <Label htmlfor="fullnameInput" class="form-label">Full Name</Label>
                        <Input type="text" class="form-control" id="fullnameInput" placeholder="Enter your name" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div class="mb-3">
                        <Label htmlfor="emailInput" class="form-label">Email</Label>
                        <Input type="email" class="form-control" id="emailInput" placeholder="Enter your email" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div class="mb-3">
                        <Label htmlfor="phoneNumberInput" class="form-label">Phone Number</Label>
                        <Input type="email" class="form-control" id="phoneNumberInput" placeholder="Enter your number" />
                    </div>
                </Col>
                <Col lg={12}>
                    <div class="mb-3">
                        <Label htmlfor="uploadResume" class="form-label">Upload Resume</Label>
                        <Input type="file" class="form-control" id="uploadResume" placeholder="Upload resume" />
                    </div>
                </Col>
                <Col lg={12}>
                    <div class="mb-4">
                        <Label htmlfor="messageInput" class="form-label">Message</Label>
                        <textarea class="form-control" id="messageInput" rows="3" placeholder="Enter your message"></textarea>
                    </div>
                </Col>
                <Col lg={12}>
                    <div class="text-end">
                        <button class="btn btn-success me-1" on:click={setModal}>Send Application <i class="bx bx-send align-middle"></i></button>
                        <button class="btn btn-outline-secondary" on:click={setModal}>Cancel</button>
                    </div>
                </Col>
            </Row>
        </ModalBody>
    </div>
</Modal>