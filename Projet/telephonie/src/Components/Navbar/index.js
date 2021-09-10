import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


//Partie NavBar visible sur toutes les pages
const NavBar = () => (
    <>
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand style={{ marginLeft : '1rem' }}>ESLC Energies</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link href="/Accueil">Accueil</Nav.Link>
                        <Nav.Link href="/Afficher">Afficher</Nav.Link>
                        <Nav.Link href="/Ajouter">Ajouter</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Rechercher"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="success">Rechercher</Button>
                    </Form>
                </Navbar.Collapse>
        </Navbar>
    </>
)

export default NavBar;
