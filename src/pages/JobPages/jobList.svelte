<script>
    import {
        Col,
        Row,
        Modal,
        ModalHeader,
        ModalBody,
        Form,
        Input,
        Label,
        Card,
        CardBody,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "sveltestrap";
    import { Link } from 'svelte-routing'

    import Breadcrumbs from "../../common/Breadcrumb.svelte";
</script>
<div class="page-content">
    <div class="container-fluid">
        <Breadcrumbs title="Jobs" breadcrumbItem="Jobs List" />
        <Row>
            <Col lg="12">
                <Card>
                    <CardBody class="border-bottom">
                        <div class="d-flex align-items-center">
                            <h5 class="mb-0 card-title flex-grow-1">Jobs Lists</h5>
                            <div class="flex-shrink-0">
                                <Link to="#!" class="btn btn-primary me-1">Add New Job</Link>
                                <Link to="#!" class="btn btn-light me-1"><i class="mdi mdi-refresh"></i></Link>
                                <Dropdown class="dropdown d-inline-block me-1">
                                    <DropdownToggle type="menu" class="btn btn-success" id="dropdownMenuButton1">
                                        <i class="mdi mdi-dots-vertical"></i></DropdownToggle>
                                    <DropdownMenu>
                                        <li><DropdownItem href="#">Action</DropdownItem></li>
                                        <li><DropdownItem href="#">Another action</DropdownItem></li>
                                        <li><DropdownItem href="#">Something else here</DropdownItem></li>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </CardBody>
                    <CardBody>
                        <div class="table-responsive">
                            <table class="table table-bordered align-middle nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Job Title</th>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Experience</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Posted Date</th>
                                        <th scope="col">Last Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Magento Developer</td>
                                        <td>Themesbrand</td>
                                        <td>California</td>
                                        <td>0-2 Years</td>
                                        <td>2</td>
                                        <td><span class="badge badge-soft-success">Full Time</span></td>
                                        <td>02 June 2021</td>
                                        <td>25 June 2021</td>
                                        <td><span class="badge bg-success">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Product Designer</td>
                                        <td>Web Technology pvt.ltd</td>
                                        <td>California</td>
                                        <td>1-2 Years</td>
                                        <td>3</td>
                                        <td><span class="badge badge-soft-danger">Part Time</span></td>
                                        <td>15 June 2021</td>
                                        <td>28 June 2021</td>
                                        <td><span class="badge bg-info">New</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Marketing Director</td>
                                        <td>Creative Agency</td>
                                        <td>Phoenix</td>
                                        <td>-</td>
                                        <td>5</td>
                                        <td><span class="badge badge-soft-success">Full Time</span></td>
                                        <td>02 June 2021</td>
                                        <td>25 June 2021</td>
                                        <td><span class="badge bg-danger">Close</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>HTML Developer</td>
                                        <td>Web Technology pvt.ltd</td>
                                        <td>California</td>
                                        <td>0-4 Years</td>
                                        <td>8</td>
                                        <td><span class="badge badge-soft-success">Full Time</span></td>
                                        <td>02 June 2021</td>
                                        <td>25 June 2021</td>
                                        <td><span class="badge bg-success">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Product Sales Specialist</td>
                                        <td>Skote Technology pvt.Ltd</td>
                                        <td>Louisiana</td>
                                        <td>5+ Years</td>
                                        <td>1</td>
                                        <td><span class="badge badge-soft-danger">Part Time</span></td>
                                        <td>02 June 2021</td>
                                        <td>25 June 2021</td>
                                        <td><span class="badge bg-info">New</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Magento Developer</td>
                                        <td>New Technology pvt.ltd</td>
                                        <td>Oakridge Lane Richardson</td>
                                        <td>0-2 Years</td>
                                        <td>2</td>
                                        <td><span class="badge badge-soft-info">Freelance</span></td>
                                        <td>02 June 2021</td>
                                        <td>25 June 2021</td>
                                        <td><span class="badge text-bg-info">New</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Business Associate</td>
                                        <td>Web Technology pvt.ltd</td>
                                        <td>California</td>
                                        <td>0-2 Years</td>
                                        <td>2</td>
                                        <td><span class="badge badge-soft-success">Full Time</span></td>
                                        <td>02 June 2021</td>
                                        <td>25 June 2021</td>
                                        <td><span class="badge text-bg-success">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Magento Developer</td>
                                        <td>Adobe Agency</td>
                                        <td>California</td>
                                        <td>0-2 Years</td>
                                        <td>2</td>
                                        <td><span class="badge badge-soft-success">Full Time</span></td>
                                        <td>02 June 2021</td>
                                        <td>25 June 2021</td>
                                        <td><span class="badge text-bg-danger">Close</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>HTML Developer</td>
                                        <td>Web Technology pvt.ltd</td>
                                        <td>California</td>
                                        <td>0-2 Years</td>
                                        <td>2</td>
                                        <td><span class="badge badge-soft-danger">Part Time</span></td>
                                        <td>02 June 2021</td>
                                        <td>25 June 2021</td>
                                        <td><span class="badge text-bg-info">New</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>Marketing Director</td>
                                        <td>Web Technology pvt.ltd</td>
                                        <td>California</td>
                                        <td>0-2 Years</td>
                                        <td>2</td>
                                        <td><span class="badge badge-soft-warning">Internship</span></td>
                                        <td>02 June 2021</td>
                                        <td>25 June 2021</td>
                                        <td><span class="badge text-bg-success">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                    <Link to="job-details.html" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                    <Link to="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                    <Link to="#jobDelete" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row justify-content-between align-items-center">
                            <div class="col-auto me-auto">
                                <p class="text-muted mb-0">Showing <b>1</b> to <b>12</b> of <b>45</b> entries</p>
                            </div>
                            <div class="col-auto">
                                <div class="card d-inline-block ms-auto mb-0">
                                    <div class="card-body p-2">
                                        <nav aria-label="Page navigation example" class="mb-0">
                                            <ul class="pagination mb-0">
                                                <li class="page-item">
                                                    <Link class="page-link" to="javascript:void(0);" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </Link>
                                                </li>
                                                <li class="page-item"><Link class="page-link" to="javascript:void(0);">1</Link></li>
                                                <li class="page-item active"><Link class="page-link" to="javascript:void(0);">2</Link></li>
                                                <li class="page-item"><Link class="page-link" to="javascript:void(0);">3</Link></li>
                                                <li class="page-item"><Link class="page-link" to="javascript:void(0);">...</Link></li>
                                                <li class="page-item"><Link class="page-link" to="javascript:void(0);">12</Link></li>
                                                <li class="page-item">
                                                    <Link class="page-link" to="javascript:void(0);" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
</div>