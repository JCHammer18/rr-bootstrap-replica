import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


export default function TopBar() {
    return (
        
            <Navbar bg="light" expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{display:"block", border:"none"}}/>
                <Navbar.Brand href="#home"><img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="logo"/> 
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" style={{flexDirection:"row-reverse"}}>
                    <Nav className="mr-auto"></Nav>
                    <Nav style={{padding: "20px 40px 20px 40px", lineHeight: "26px", fontWeight: "bolder", display:"flex"}} >
                        <Nav.Link style={{color: "#343538", margin: "0 22px", fontSize:"18px"}} href="#LogIn">Log in</Nav.Link>
                        <Button variant="success" style={{fontSize: "18px", borderRadius:"20px", border:"none", backgroundColor:"#0AAD0A", fontWeight:"bold"}}>Sign up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
     
    )
}