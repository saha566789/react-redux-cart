import { FaCartShopping } from "react-icons/fa6";
import Badge from '@mui/material/Badge';
import { Link, NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import {  useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { DLT } from "../redux/actions/action";

const Header = () => {
  const [price,setPrice] = useState(0);
  console.log(price)
  const getdata = useSelector((state)=>state.cartreducer.carts)
  // console.log(getdata)
  
  const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


   
    const dlt = (id) =>{
      dispatch(DLT(id))
    }

    const total = () => {
      let totalPrice = 0;
      getdata.forEach((ele) => {
        totalPrice += ele.price * ele.qnty;
      });
      return totalPrice;
    };
  
    useEffect(() => {
      const totalPrice = total();
      setPrice(totalPrice);
    }, [getdata]);



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
    <Badge  badgeContent={getdata.length} color="primary" 
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
         {
                      getdata.length !== 0 ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p className="lg:hidden" style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)} >
                                                            <AiFillDelete />
                                                            </p>
                                                        </td>

                                                        <td className='mt-5 hidden'style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)} >
                                                        <AiFillDelete  />
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total :₹{price}</p>
                                </tbody>
                            </Table>
                        </div>:
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
                        
                        }
      
      </Menu>
</nav>
    );
};

export default Header;