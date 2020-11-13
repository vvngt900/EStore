import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { Link } from 'react-router-dom';

function Header() {
    return (
        // <div className="header">
        // <Link to='/'>
        // <img className="header_logo" alt="" src="https://fuwu.s3.ap-south-1.amazonaws.com/icons/fuwu+logoslow.gif"/>
        // </Link>
        //   <div className="header_search">
        //       <input className="header_searchInput" type="text"/>
        //       <SearchIcon className="header_searchIcon"/>
        //   </div>

        //   <div className="header_nav">

        //     <div className="header_option">
        //         <span className="header_optionLineOne">Hello Guest</span>
        //         <span className="header_optionLineTwo">Sign In</span>
        //     </div>

        //     <div className="header_option">
        //         <span className="header_optionLineOne">Returns</span>
        //         <span className="header_optionLineTwo">& your Order</span>
        //     </div>
        //     <Link to='checkout'>
        //     <div className="header_optionBasket">
        //         <ShoppingCartIcon className="header_cartIcon"/>
        //         <span className="header_basketCount">0</span>
        //     </div>
        //     </Link>
        //   </div>

        // </div>

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Navbar>


    )
}

export default Header
