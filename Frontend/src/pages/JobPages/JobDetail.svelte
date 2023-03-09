<script>
    import { Container, Row } from 'sveltestrap';
    import Breadcrumbs from "../../common/Breadcrumb.svelte";
    import Overview from './JobDetails/Overview.svelte';
    import DetailsSection from './JobDetails/DetailsSection.svelte';
</script>

<div class="page-content">
    <Container fluid>
    <Breadcrumbs title="Jobs" breadcrumbItem="Job Details" />

    <Row>
        <Overview />
        <DetailsSection />
    </Row>
    </Container>
</div>