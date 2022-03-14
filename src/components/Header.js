import { Nav,Navbar,Container} from "react-bootstrap";

function Header() {


    return (
        <>
            <Navbar bg="light" variant="light" id="header" expand="sm">
                <Container>
                    <Navbar.Brand href="#home" >
                        <img src="https://cdn3.iconfinder.com/data/icons/food-drink-33/514/Food__Drink-12-512.png" width="40px" height="40px" alt="dss"/>
                        DRINK STORE</Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                        <Nav.Link className="atr" href="/">Home</Nav.Link>
                        <Nav.Link className="atr" href="/fav">Favorite</Nav.Link>
                        </Navbar.Collapse>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/fav">Favorite</Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
        </>
    );
}

export default Header;