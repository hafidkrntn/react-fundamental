import { Container, Navbar, Nav, } from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">H & R</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/albums">Albums</Nav.Link>
              <Nav.Link href="/posts">Posts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation