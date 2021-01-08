import React from 'react';
import {Navbar , Nav , NavDropdown , Form , FormControl , Button , Row , Col , Container} from 'react-bootstrap'
import styled from 'styled-components';
import Brand from './Brand/brand.png'

function Header() {

    const Styles = styled.div`
  .navbar { background-color: #4d614a; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
 
  return ( <Styles>
      
    <Navbar expand="lg">
    <Row>
        <Col md={{offset:0 , span:3}}>
             <img src={Brand} style={{width:'10%' , height:'10%'}} className='header-brand-image'></img>
        </Col>
        <Col md={{offset:0 , span:3}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
        </Col>
        <Col md={{offset:0 , span:6}}>
        
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
        </Col>
    
    </Row>
      
    </Navbar>
  </Styles>);
}
 
export default Header;