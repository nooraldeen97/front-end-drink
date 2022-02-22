import { Nav,Navbar,Container} from "react-bootstrap";

function Header() {


    return (
        <>
            <Navbar bg="light" variant="light" id="header">
                <Container>
                    <Navbar.Brand href="#home">DRINK STORE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/fav">Favorite</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;