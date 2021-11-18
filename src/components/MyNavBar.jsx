import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const MyNavBar = () => {

    // use navigate() to programmatically change the route via code
    const navigate = useNavigate()

    return (
        <Navbar bg="light" expand="lg" className="mb-4">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">
                        <div className="nav-link">Home</div>
                    </Link>
                    {/* also this works, but use Link if possible in JSX */}
                    {/* <div className="nav-link" onClick={() => navigate('/')}>Home</div> */}
                    <Link to="/info">
                        <div className="nav-link">Info</div>
                    </Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <Link to="/strive">
                            <div className="dropdown-item">Another action</div>
                        </Link>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button variant="outline-success" onClick={() => navigate('/search')}>Search</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar