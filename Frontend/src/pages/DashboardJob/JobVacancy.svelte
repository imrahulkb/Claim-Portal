<script>
    import { Card, CardBody, Col } from 'sveltestrap';
    import { Link } from "svelte-routing";
    import data from '../../common/data/dashboard-job'
</script>
<Col lg={12}>
    <div class="d-flex">
        <h4 class="card-title mb-4 flex-grow-1">New Job Vacancy</h4>
        <div>
            <Link to="/job-list" class="btn btn-primary btn-sm">View All <i class="bx bx-right-arrow-alt"></i></Link>
        </div>
    </div>
</Col>
{#each data.jobVacancy as item}
    <Col lg={2}>
        <Card>
            <CardBody class="p-4">
                <div class="text-center mb-3">
                    <img src={item.img} alt="" class="avatar-sm" />
                    <Link to="/job-details" class="text-body">
                        <h5 class="mt-4 mb-2 font-size-15">{item.title}</h5>
                    </Link>
                    <p class="mb-0 text-muted">Themesbrand</p>
                </div>

                <div class="d-flex">
                    <p class="mb-0 flex-grow-1 text-muted"><i class="bx bx-map text-body"></i> {item.country}</p>
                    <p class="mb-0 text-muted"><b>{item.vacancy}</b> Vacancy</p>
                </div>
            </CardBody>
        </Card>
    </Col>
{/each}