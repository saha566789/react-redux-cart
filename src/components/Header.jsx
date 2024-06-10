import { FaCartShopping } from "react-icons/fa6";
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <nav className="navbar navbar-expand-lg bg-black" style={{height:"60px"}}>
  <div className="container-fluid mx-4">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       <Link to="/">
       <li className="nav-item">
          <a className="nav-link active text-white text-decoration-none" aria-current="page">Add to cart</a>
        </li>      
         </Link>
     <Link to="/" >
     <li className="nav-item">
          <a className="nav-link text-light text-decoration-none">home</a>
        </li>
        </Link>
     
      </ul>
    
    </div>
    <Badge  badgeContent={4} color="secondary" 
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    >
    <FaCartShopping className="text-white text-xl" />
</Badge>

  </div>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem",padding:10,position:"relative"}}>
        <IoCloseSharp 
        onClick={handleClose}
        style={{position:"absolute",
          top:2,right:20,
          fontSize:23,
          cursor:"pointer"
        }} />
        <p style={{fontSize:22}}>Your cart is empty</p>
        <img src="./cart.gif" alt="name" className="emptycart_img" style={{width:"5rem",padding:10}}></img>
        </div>
      </Menu>
</nav>
    );
};

export default Header;