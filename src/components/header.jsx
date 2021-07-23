import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from './header.module.css'
import githublogo from '../assets/github_logo.svg'
import email from '../assets/mail_logo.png';
import phone from '../assets/phone.svg'




function Header() {

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home" className = "navlogo">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Articels</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>
                        <Nav.Link href="#pricing">Publications</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets"><img className = {styles.logo} src={githublogo} /></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><img className = {styles.socials} src={githublogo} /></Nav.Link>
                        <Nav.Link href="#deets"><img className = {styles.socials} src={email} /></Nav.Link>
                        <Nav.Link href="#deets"><img className = {styles.socials} src={phone} /></Nav.Link>
                    </Nav>

                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;