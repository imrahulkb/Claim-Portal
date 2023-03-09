<script>
    import { Col, Row } from 'sveltestrap';
    import { Link } from "svelte-routing";
</script>
<Row class="mb-4">
    <Col lg={12}>
        <div class="d-flex align-items-center">
            <img src="/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded" />
            <div class="ms-3 flex-grow-1">
                <h5 class="mb-2 card-title">Hello, Henry Franklin</h5>
                <p class="text-muted mb-0">Ready to jump back in?</p>
            </div>
            <div>
                <Link to="#" class="btn btn-primary"><i class="bx bx-plus align-middle"></i> Add New Jobs</Link>
            </div>
        </div>
    </Col>
</Row>