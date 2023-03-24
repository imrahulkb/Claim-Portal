<script>
    import { Card, CardBody, Col, Collapse, Row, Form, Label, Input } from 'sveltestrap';
    import Flatpickr from 'svelte-flatpickr';
    import {Link} from 'svelte-routing';
    import 'flatpickr/dist/flatpickr.css';
</script>
<Row>
    <Col lg={12}>
        <Card class="job-filter">
            <CardBody>
                <Form>
                    <Row class="g-3">
                        <Col xxl={4} lg={4}>
                            <div class="position-relative">
                                <Input type="text" class="form-control" id="searchJob" placeholder="Search your job" />
                            </div>
                        </Col>

                        <Col xxl={2} lg={4}>
                            <div class="position-relative">
                                <Input type="text" class="form-control" id="locationInput" placeholder="San Francisco, LA" />
                            </div>
                        </Col>

                        <Col xxl={2} lg={4}>
                            <div class="position-relative">
                                <Input type="text" class="form-control" id="jobCategories" placeholder="Job Categories" />
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
                                <Link to="#" class="btn btn-secondary h-100 w-100">
                                    <i class="bx bx-filter-alt align-middle"></i> Advance</Link>
                            </div>
                        </Col>

                        <Collapse id="collapseExample">
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
                </Form>
            </CardBody>
        </Card>
    </Col>
</Row>