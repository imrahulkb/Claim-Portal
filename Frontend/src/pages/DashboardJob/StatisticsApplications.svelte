<script>
    import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'sveltestrap';
    import StatisticsApplicationsChart from './StatisticsApplicationsChart.svelte'
</script>
<Col lg={8}>
    <Card>
        <CardBody>
            <div class="d-sm-flex flex-wrap">
                <h4 class="card-title mb-4">Statistics Applications</h4>
                <div class="ms-auto">
                    <Nav pills>
                        <NavItem>
                            <NavLink href="#">Week</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Month</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink class="active" href="#">Year</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
            <StatisticsApplicationsChart dataColors={["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]} />
        </CardBody>
    </Card>
</Col>