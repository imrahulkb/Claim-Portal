<script>
    import { Row, Container , Col} from 'sveltestrap';
</script>
<footer class="footer">
    <Container fluid={true}>
      <Row class="text-center">
        <Col md={12}>{new Date().getFullYear()} © IEEE Bombay Section.</Col>
      </Row>
    </Container>
  </footer>