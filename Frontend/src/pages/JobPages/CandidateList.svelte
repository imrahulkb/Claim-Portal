<script>
    import { Card, CardBody, Col, Container, Row, Collapse, Label, Input,Button } from 'sveltestrap';
    import Flatpickr from 'svelte-flatpickr';
    import 'flatpickr/dist/flatpickr.css';
    import Breadcrumbs from "../../common/Breadcrumb.svelte";
    import data from '../../common/data/job'
    import {Link} from 'svelte-routing'
    let isOpen = false;

    const activeBtn = (ele) => {
        if(ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    }

</script>
<div class="page-content">
    <Container fluid>
       
        <Breadcrumbs title="Jobs" breadcrumbItem="Candidate List" />

        <Row>
            <Col lg={12}>
                <Card class="job-filter">
                    <CardBody>
                        <form action="#">
                            <Row class="g-3">
                                <Col xxl={4} lg={4}>
                                    <div class="position-relative">
                                        <Input type="text" class="form-control" id="searchJob" autoComplete="off" placeholder="Search your candidate" />
                                    </div>
                                </Col>

                                <Col xxl={2} lg={4}>
                                    <div class="position-relative">
                                        <Input type="text" class="form-control" id="locationInput" autoComplete="off" placeholder="San Francisco, LA" />
                                    </div>
                                </Col>

                                <Col xxl={2} lg={4}>
                                    <div class="position-relative">
                                        <select class="form-select select2" aria-label="Default select example">
                                            <option defaultvalue>Select for</option>
                                            <option value="Freelance">Freelance</option>
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Internship">Internship</option>
                                        </select>
                                    </div>
                                </Col>

                                <Col xxl={2} lg={6}>
                                    <div class="position-relative">
                                        <div id="datepicker1">
                                             <Flatpickr
                                                class="form-control"
                                                options={{
                                                    dateFormat: 'd M, Y'
                                                }}
                                                placeholder="Selact Date"
                                            />
                                        </div>
                                    </div>
                                </Col>

                                <Col xxl={2} lg={6}>
                                    <div class="position-relative h-100 hstack gap-3">
                                        <button type="submit" class="btn btn-primary h-100 w-100"><i class="bx bx-search-alt align-middle"></i> Find Jobs</button>
                                        <Button color="secondary" on:click={() => (isOpen = !isOpen)} class="h-100 w-100">
                                            <i class="bx bx-filter-alt align-middle"></i> Advance</Button>
                                    </div>
                                </Col>

                                <Collapse {isOpen} id="collapseExample">
                                    <div>
                                        <Row class="g-3">
                                            <Col xxl={4} lg={6}>
                                                <div>
                                                    <Label htmlfor="experience" class="form-label fw-semibold">Experience</Label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <Input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <Label class="form-check-label" htmlfor="inlineCheckbox1">All</Label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <Input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                                                    <Label class="form-check-label" htmlfor="inlineCheckbox2">Fresher</Label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <Input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2" />
                                                    <Label class="form-check-label" htmlfor="inlineCheckbox3">1-2</Label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <Input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2" />
                                                    <Label class="form-check-label" htmlfor="inlineCheckbox4">2-3</Label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <Input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option3" />
                                                    <Label class="form-check-label" htmlfor="inlineCheckbox5">4+</Label>
                                                </div>
                                            </Col>
                                            <Col xxl={4} lg={6}>
                                                <div>
                                                    <Label htmlfor="jobType" class="form-label fw-semibold">Job Type</Label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <Input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3" />
                                                    <Label class="form-check-label" htmlfor="inlineCheckbox6">Full Time</Label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <Input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option3" />
                                                    <Label class="form-check-label" htmlfor="inlineCheckbox7">Part Time</Label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <Input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="option3" />
                                                    <Label class="form-check-label" htmlfor="inlineCheckbox8">Freelance</Label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <Input class="form-check-input" type="checkbox" id="inlineCheckbox9" value="option3" />
                                                    <Label class="form-check-label" htmlfor="inlineCheckbox9">Internship</Label>
                                                </div>
                                            </Col>
                                            <Col xxl={4} lg={4}>
                                                <div class="position-relative">
                                                    <Label htmlfor="qualificationInput" class="form-label fw-semibold">Qualification</Label>
                                                    <Input type="text" class="form-control" id="qualificationInput" autoComplete="off" placeholder="Qualification" />
                                                    <i class="ri-government-line filter-icon"></i>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Collapse>
                            </Row>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            {#each data.jobListCandidate as item}
                <Col xl={3}>
                    <Card>
                        <CardBody>
                            <div class="d-flex align-start mb-3">
                                <div class="flex-grow-1">
                                    <span class={item.type === "Full Time" ? "badge badge-soft-success" : item.type === "Freelance" ? "badge badge-soft-info" : item.type === "Part Time" ? "badge badge-soft-danger" : "badge badge-soft-warning"}>
                                        {item.type}
                                    </span>
                                </div>
                                <button type="button" class="btn btn-light btn-sm like-btn" on:click={(e) => activeBtn(e.target)}>
                                    <i class="bx bx-heart"></i>
                                </button>
                            </div>
                            <div class="text-center mb-3">
                                <img src={item.img} alt="" class="avatar-sm rounded-circle" />
                                <h6 class="font-size-15 mt-3 mb-1">{item.name}</h6>
                                <p class="mb-0 text-muted">{item.designation}</p>
                            </div>
                            <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                                <div>
                                    <i class='bx bx-map align-middle text-primary'></i> {item.location}
                                </div>
                                <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> ${item.experience} / hrs</p>
                            </div>
                            <div class="hstack gap-2 justify-content-center">
                                {#if item.skills}
                                    {#each item.skills as subItem}
                                    <span class="badge badge-soft-secondary">{subItem}</span>
                                    {/each}
                                {/if}
                            </div>

                            <div class="mt-4 pt-1">
                                <Link to="/candidate-overview" class="btn btn-soft-primary d-block">View Profile</Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            {/each}
        </Row>
    </Container>
</div>