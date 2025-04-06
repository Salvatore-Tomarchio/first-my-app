import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import { ThemeContext } from '../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const MyNav = ({ searchQuery, setSearchQuery }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Navbar bg={theme} variant={theme} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">EpiBooks</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/contacts">Contattaci</Nav.Link>
          <Nav.Link as={Link} to="/about">Chi siamo</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Cerca un libro"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="me-2"
            data-testid="search-input"
          />
          <Button
            variant={theme === 'dark' ? 'light' : 'dark'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? 'DARK' : 'LIGHT'}
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default MyNav;