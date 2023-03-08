<script>
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'sveltestrap'
import { Link } from "svelte-routing";
//swiper
import { Swiper, SwiperSlide } from 'swiper/svelte';
import { Pagination, Navigation, Autoplay } from "swiper";
import "../../../node_modules/swiper/swiper.scss";

</script>

<Col lg={4}>
    <Card>
        <CardBody>
            <div class="d-flex">
                <div>
                    <h4 class="card-title mb-3">Invite your friends to Skote</h4>
                    <p class="text-muted">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally.</p>
                    <div>
                        <Link to="#" class="btn btn-primary btn-sm"><i class='bx bx-user-plus align-middle'></i> Invite Friends</Link>
                    </div>
                </div>
                <div>
                    <img src="/assets/images/jobs.png" alt="" height="130" />
                </div>
            </div>
        </CardBody>
    </Card>
    <Card>
        <CardBody>
            <h4 class="card-title mb-3">Popular Candidate</h4>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="bg-light p-3 d-flex mb-3 rounded">
                            <img src="/assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded me-3" />
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Stephen Hadley</a> <span class="badge badge-soft-info">Freelance</span></h5>
                                <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Germany</p>
                            </div>
                            <div>
                                <Dropdown>
                                    <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                        <i class='bx bx-dots-vertical-rounded'></i>
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                        <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                        <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <div class="bg-light p-3 d-flex">
                            <img src="/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded me-3" />
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Charles Brown</a> <span class="badge badge-soft-success">Full Time</span></h5>
                                <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Cambodia</p>
                            </div>
                            <div>
                                <Dropdown>
                                    <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                        <i class='bx bx-dots-vertical-rounded'></i>
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                        <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                        <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="bg-light p-3 d-flex mb-3 rounded">
                            <img src="/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded me-3" />
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Adam Miller</a> <span class="badge badge-soft-warning">Internship</span></h5>
                                <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Australia</p>
                            </div>
                            <div>
                                <Dropdown>
                                    <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                        <i class='bx bx-dots-vertical-rounded'></i>
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                        <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                        <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <div class="bg-light p-3 d-flex">
                            <img src="/assets/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded me-3" />
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Keith Gonzales</a> <span class="badge badge-soft-info">Freelance</span></h5>
                                <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Belgium</p>
                            </div>
                            <div>
                                <Dropdown>
                                    <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                        <i class='bx bx-dots-vertical-rounded'></i>
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                        <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                        <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="bg-light p-3 d-flex mb-3 rounded">
                            <img src="/assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded me-3" />
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Bonnie Harney</a> <span class="badge badge-soft-success">Full Timer</span></h5>
                                <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Syria</p>
                            </div>
                            <div>
                                <Dropdown>
                                    <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                        <i class='bx bx-dots-vertical-rounded'></i>
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                        <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                        <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <div class="bg-light p-3 d-flex">
                            <img src="/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded me-3" />
                            <div class="flex-grow-1">
                                <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Dolores Minter</a> <span class="badge badge-soft-danger">Part Time</span></h5>
                                <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> San Marino</p>
                            </div>
                            <div>
                                <Dropdown>
                                    <DropdownToggle class="btn btn-soft-primary" type="button" id="dropdownMenuButton11">
                                        <i class='bx bx-dots-vertical-rounded'></i>
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="dropdownMenuButton11">
                                        <li><DropdownItem href="candidate-overview">View Details</DropdownItem></li>
                                        <li><DropdownItem href="#">Download CV</DropdownItem></li>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </CardBody>
    </Card>
</Col>