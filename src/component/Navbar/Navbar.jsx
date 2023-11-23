/* eslint-disable react/prop-types */
import  { Fragment } from 'react'
import style from './Navbar.module.css'
import list from '../../assets/icons/List.png'
import cart from '../../assets/icons/cart.png'
import search from '../../assets/icons/search.png'
import brand from '../../assets/Logo/brand.png'
function Navbar({count}) {
  return (
    <Fragment>
      <nav style={{zIndex:'9999'}} className={style.navbar}>
        <div  className={style.container}>


        <div className={style.leftNav}>
            <a href='#' className={style.cart}> 
            <div className={style.cartNumber}>{count}</div>
              <img  src={cart} alt="cart" />
             </a>
             <a href='#' className={style.cart} > 
              <img  src={search} alt="search" />
             </a>
          </div>

          <spna className={style.navbar_brand}>
            <a>
              <img src={brand} alt="" />
            </a>
          </spna>



          <div className={style.rightNav}>
            <button className={style.lang}> 
              EN
             </button>
            <button className={style.menu}> 
              <img  src={list} alt="menu" />
             </button>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar;