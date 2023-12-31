import React, { useState, useEffect } from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';  

function Header(){
    const url = "http://localhost:1337/api/headers";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }
  
  
    useEffect(() => {
      fetchInfo();
    }, []);

    <center>
        {data.map((dataObj, index) => {
          return (
            // <div
            //   style={{
            //     width: "15em",
            //     backgroundColor: "#35D841",
            //     padding: 2,
            //     borderRadius: 10,
            //     marginBlock: 10,
            //   }}
            // >
            //   <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            // </div>
            <div className='header'>
                <Link to='/' className='header__homeLink'>
                    <div className='header__logo'>
                        <StorefrontIcon className='header__logoImage' fontSize='large'/ >
                        <h2 className='header__logoTitle'>eShop</h2>
                    </div>
                </Link>
        
                <div className='header__search'>
                    <input type='text' className='header__searchInput' />
                    <SearchIcon className='header__searchIcon'/>
                </div>
        
                <div className='header__nav'>
                    <div className='nav__item'>
                        <span className='nav__itemLineOne'>Hello Guest</span>
                        <span className='nav__itemLineTwo'>Sign In</span>
                    </div>
                    <div className='nav__item'>
                        <span className='nav__itemLineOne'>Your</span>
                        <span className='nav__itemLineTwo'>Shop</span>
                    </div>
                    <Link to='/checkout' className='header__checkoutLink'>
                        <div className='nav__itemBasket'>
                            <ShoppingBasketIcon />
                            <span className='nav__itemLineTwo nav__basketCount'>0</span>
                        </div>
                    </Link>
                </div>
            </div>
          );
        })}
      </center>


    // return (
    //     <div className='header'>
    //         <Link to='/' className='header__homeLink'>
    //             <div className='header__logo'>
    //                 <StorefrontIcon className='header__logoImage' fontSize='large'/ >
    //                 <h2 className='header__logoTitle'>eShop</h2>
    //             </div>
    //         </Link>
    
    //         <div className='header__search'>
    //             <input type='text' className='header__searchInput' />
    //             <SearchIcon className='header__searchIcon'/>
    //         </div>
    
    //         <div className='header__nav'>
    //             <div className='nav__item'>
    //                 <span className='nav__itemLineOne'>Hello Guest</span>
    //                 <span className='nav__itemLineTwo'>Sign In</span>
    //             </div>
    //             <div className='nav__item'>
    //                 <span className='nav__itemLineOne'>Your</span>
    //                 <span className='nav__itemLineTwo'>Shop</span>
    //             </div>
    //             <Link to='/checkout' className='header__checkoutLink'>
    //                 <div className='nav__itemBasket'>
    //                     <ShoppingBasketIcon />
    //                     <span className='nav__itemLineTwo nav__basketCount'>0</span>
    //                 </div>
    //             </Link>
    //         </div>
    //     </div>
    // )
}

export default Header