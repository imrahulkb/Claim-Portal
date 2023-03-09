<script>
    import JobFilter from './JobGrid/JobFilter.svelte';
    import JobData from './JobGrid/JobData.svelte';
    import Breadcrumbs from "../../common/Breadcrumb.svelte";
    import { Container } from 'sveltestrap';
</script>

<div class="page-content">
    <Container fluid>

    <Breadcrumbs title="Jobs" breadcrumbItem="Jobs Grid" />

        <JobFilter />
        <JobData />
        
    </Container>
</div>