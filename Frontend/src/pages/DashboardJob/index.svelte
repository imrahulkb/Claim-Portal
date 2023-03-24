<script>
    import {Container, Row} from 'sveltestrap'
    import ActivityFeed from './ActivityFeed.svelte';
    import AddedJobs from './AddedJobs.svelte';
    import CandidateSection from './CandidateSection.svelte';
    import ChartSection from './ChartSection.svelte';
    import JobVacancy from './JobVacancy.svelte';
    import ReceivedTime from './ReceivedTime.svelte';
    import Section from './Section.svelte';
    import StatisticsApplications from './StatisticsApplications.svelte';

      //Import Breadcrumb
  import Breadcrumbs from "../../common/Breadcrumb.svelte";
const chartsData = [
        {
            id : 1,
            title : "Job View",
            price : "14,487",
            perstangeValue : "18.89",
            bagdeColor : "success",
            seriesData : [{
                name: "Job View",
                data: [36, 21, 65, 22, 35, 50, 87, 98],
            }],
            color : ['--bs-success', '--bs-transparent']
        },
        {
            id : 2,
            title : "New Application",
            price : "7,402",
            perstangeValue : "24.07",
            bagdeColor : "success",
            seriesData : [{
                name: "New Application",
                data: [36, 48, 10, 74, 35, 50, 70, 73],
            }],
            color : ['--bs-success', '--bs-transparent']
        },
        {
            id : 3,
            title : "Total Approved",
            price : "12,487",
            perstangeValue : " 8.41",
            bagdeColor : "success",
            seriesData : [{
                name: "Total Approved",
                data: [60, 14, 5, 60, 30, 43, 65, 84],
            }],
            color : ['--bs-success', '--bs-transparent']
        },
        {
            id : 4,
            title : "Total Rejected",
            price : "12,487",
            perstangeValue : " 20.63",
            bagdeColor : "danger",
            istrendingArrow: true,
            seriesData : [{
                name: "Total Rejected",
                data: [32, 22, 7, 55, 20, 45, 36, 20],
            }],
            color : ['--bs-danger', '--bs-transparent']
        },
    ];
</script>
<div class="page-content">
    <Container fluid>
        <Breadcrumbs title="Dashboards" breadcrumbItem="Jobs" />
        <Section />

        <ChartSection chartsData={chartsData} />
        <Row>
            <StatisticsApplications />
            <CandidateSection />
        </Row>

        <Row>
            <JobVacancy />
        </Row>

        <Row>
            <ReceivedTime />
            <ActivityFeed />
            <AddedJobs />
        </Row>
    </Container>
</div>