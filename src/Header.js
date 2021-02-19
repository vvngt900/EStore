import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge'

import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { auth } from "./firebase";

function Header() {

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

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

        <Navbar bg="light" expand="lg" sticky="top" >
        <Link to='home'>
        <Navbar.Brand>Fuwu</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
            <Link to={!user && '/login'}>
              <div className="header_option" onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">Hello {!user ? 'Guest' : user?.email}</span><br/>
              <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='checkout'>
              <ShoppingCartIcon/>
                <span className="header_basketCount"><Badge variant="light">({basket.length})</Badge></span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>


    )
}

export default Header
