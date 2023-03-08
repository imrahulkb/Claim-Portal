<script>
    import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'sveltestrap';
    import ReceivedTimeCharts from './ReceivedTimeCharts.svelte';
</script>
<Col lg={4}>
    <Card>
        <CardBody>
            <div class="d-flex">
                <h4 class="card-title">Applications Received Time</h4>
                <Dropdown class="ms-auto">
                    <DropdownToggle tag="a" color="" class="text-muted font-size-16 p-0" role="button">
                        <i class="mdi mdi-dots-horizontal"></i>
                    </DropdownToggle>                            
                    <DropdownMenu class="dropdown-menu-end">
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">Another action</DropdownItem>
                        <DropdownItem href="#">Something else here</DropdownItem>
                        <div class="dropdown-divider"></div>
                        <DropdownItem href="#">Separated link</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <ReceivedTimeCharts dataColors={["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]} />
        </CardBody>
    </Card>
</Col>