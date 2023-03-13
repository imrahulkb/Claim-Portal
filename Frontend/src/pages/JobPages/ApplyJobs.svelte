<script>
    import Breadcrumbs from "../../common/Breadcrumb.svelte";
    import { Card,CardBody,Col,Container,Row,Tooltip, } from 'sveltestrap';
    import DeleteModal from "../../common/DeleteModal.svelte";
    import jobApplydata from '../../common/data/job'
    import { html } from 'gridjs';
	import Grid from 'gridjs-svelte';
    
    let deleteModal = false;
    let data = jobApplydata.jobApply
    const setDeleteModal = (status) => {
        deleteModal = status;
    };

    const columns = [
		{
			name: 'No',
            id : "no"
		},
		{
			name: 'Job Title',
            id : "jobTitle"
		},
        {
			name: 'Company Name',
            id : "companyName"
		},
        {
			name: 'Type',
            formatter: (cell) => {
                if(cell === 'Part Time'){
                    return html(`
                    <span class="badge badge-soft-danger">
                    ${cell}
                    </span>`)
                }else if(cell === 'Freelance'){
                    return html(`
                    <span class="badge badge-soft-info">
                    ${cell}
                    </span>`)
                }else if(cell === 'Internship'){
                    return html(`
                    <span class="badge badge-soft-warning">
                    ${cell}
                    </span>`)
                }else{
                    return html(`
                    <span class="badge badge-soft-success">
                    ${cell}
                    </span>`)
                }
               
            }
		},
        {
			name: 'Apply Date',
            id : "applyDate"
		},

        {
			name: 'Status',
            formatter: (cell) => {
                if(cell === 'New'){
                    return html(`
                    <span class="badge bg-info">
                    ${cell}
                    </span>`)
                }else if(cell === 'Active'){
                    return html(`
                    <span class="badge bg-success">
                    ${cell}
                    </span>`)
                }else{
                    return html(`
                    <span class="badge bg-danger">
                    ${cell}
                    </span>`)
                }
               
            }
		},
        {
			name: 'Action',
            formatter: (cell, row) =>{
				return html(`<div class="list-unstyled hstack gap-1 mb-0">
                    <li>
                        <a href="/job-details" class="btn btn-sm btn-soft-primary">
                            <i class="mdi mdi-eye-outline"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="btn btn-sm btn-soft-danger">
                            <i class="mdi mdi-delete-outline"></i>
                        </a>
                    </li>
                </div>`)
            }
		},
	];
</script>

<DeleteModal
  show={deleteModal}
  onDeleteClick={deleteModal = false}
  onCloseClick={() => setDeleteModal(false)}
/>

<div class="page-content">
    <Container fluid>
       
        <Breadcrumbs title="Jobs" breadcrumbItem="Job Apply" />
        <Row>
            <Col lg="12">
                <Card>
                    <CardBody>
                        <div class="table-card gridjs-border-none">
                            <Grid {data} {columns} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</div>