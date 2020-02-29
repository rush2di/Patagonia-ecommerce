import React from 'react'
import searchIcon from "../assets/icons/SearchIcon"
import cartIcon from "../assets/icons/ShoppingCartIcon"

const Layout = props => {
return (
	<React.Fragment>
	<NavBar />
	{props.children}
	<Footer />
	</React.Fragment>
 )
}

export default Layout

const NavBar = () => {
 return (
	<React.Fragment>
	<div className='head--msg'>
	FREE SHIPPING ON ALL ORDERS OVER $150.
	</div>
	<nav className='nav'>
	<div className='nav--Logo'>
	Logo
	</div>
	<ul className='nav--items'>
		<li>Categorie</li>
		<li>Categorie</li>
		<li>Categorie</li>
	</ul>
	<div className='nav--icons'>
	<button>
		<img src={searchIcon}/>
	</button>
	<button>
		<img src={cartIcon}/>
	</button>
	</div>
	</nav>
	</React.Fragment>
	)
}

const Footer = () => {
  return (
	<div className="footer">
	footer goes here
	</div>
	)
}