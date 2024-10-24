// import React, { useContext, useState } from 'react'
// import"./Navbar.css"
// import logo from "../Images/logo.png"
// import cart_icon from "../Images/cart_icon.png"
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../../Context/ShopContext'


// const Navbar = () => {

//     const [menu, setMenu] = useState("shop");
//     const {getTotalCartItems} = useContext(ShopContext);


//   return (
//     <div className="navbar">
       
//        <div className="nav-logo">
//         <img src={logo} alt="" />
//         <p>SHOPPER</p>
// </div>

// <ul className="nav-menu">
//     <li onClick={()=>{setMenu("shop")}}>  <Link style={{textDecoration : "none"}}  to="/"> Shop </Link>  {menu === "shop"? <hr/>: <></>}</li>
//     <li onClick={()=>{setMenu("mens")}}>  <Link style={{textDecoration : "none"}}  to="/mens"> Men</Link> {menu === "mens"? <hr/>: <></>}</li>
//     <li onClick={()=>{setMenu("womens")}}>  <Link style={{textDecoration : "none"}}  to="/womens"> Women </Link> {menu === "womens"? <hr/>: <></>}</li>
//     <li onClick={()=>{setMenu("kids")}}>  <Link style={{textDecoration : "none"}}  to="/kids"> kids </Link> {menu === "kids"? <hr/>: <></>}</li>
// </ul>

// <div className="nav-login-cart">
//     <Link style={{textDecoration : "none"}}  to="/login">  <button className='button1'>Login</button>  </Link>
//     <Link style={{textDecoration : "none"}}  to="/cart">  <img src={cart_icon} alt="" />   </Link>
//     <div className="nav-cart-count">{getTotalCartItems()}</div>
// </div>




//     </div>
//   )
// }

// export default Navbar







import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Images/logo.png';
import cart_icon from '../Images/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={() => { setMenu("shop"); toggleMenu(); }}>  
          <Link style={{ textDecoration: "none" }} to="/"> Shop </Link>  
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("mens"); toggleMenu(); }}>  
          <Link style={{ textDecoration: "none" }} to="/mens"> Men </Link> 
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("womens"); toggleMenu(); }}>  
          <Link style={{ textDecoration: "none" }} to="/womens"> Women </Link> 
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("kids"); toggleMenu(); }}>  
          <Link style={{ textDecoration: "none" }} to="/kids"> Kids </Link> 
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">  
          <button className='button1'>Login</button>  
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">  
          <img src={cart_icon} alt="Cart" className='nav-cart-count-img'/>   
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
