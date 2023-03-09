<script>
    import { Card, CardBody, Col, Row } from 'sveltestrap';

    //import components
    import JobWidgetCharts from './JobCharts.svelte';
    export let chartsData;
    </script>
<Row>
    {#each chartsData as item}
        <Col lg={3}>
            <Card class="mini-stats-wid">
                <CardBody>
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <p class="text-muted fw-medium">{item.title}</p>
                            <h4 class="mb-0">{item.price}</h4>
                        </div>

                        <div class="flex-shrink-0 align-self-center">
                            <JobWidgetCharts dataColors={item.color} series={item.seriesData} />
                        </div>
                    </div>
                </CardBody>
                {#if item.istrendingArrow}
                    <div class="card-body border-top py-3">
                        <p class="mb-0"> <span class={"badge badge-soft-" + item.bagdeColor + " me-2"}>
                            <i class="bx bx-trending-down align-bottom me-1"></i> {item.perstangeValue}%</span>
                            Decrease last month</p>
                    </div>
                {:else}
                <div class="card-body border-top py-3">
                    <p class="mb-0"> <span class={"badge badge-soft-" + item.bagdeColor + " me-2"}>
                        <i class="bx bx-trending-up align-bottom me-1"></i> {item.perstangeValue}%</span>
                        Increase last month</p>
                </div>
                {/if}
            </Card>
        </Col>
    {/each}
        
</Row>