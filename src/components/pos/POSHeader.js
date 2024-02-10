import React, { useState, useContext, useRef, useEffect } from 'react';
import './POSHeader.css';


const menuitems = [
	{

		name: 'Order',
		link: '/pos/order',
		cName: 'menu_items',
	
	   },

	{
       name: 'Return',
	   link: '/pos/creditnote',
	   cName: 'menu_items',

   },

   {
	name: 'Settings',
	link: '/settings',
	cName: 'menu_items',
   },
//    {
// 	   name: 'Contact',
// 	   link: '#',
// 	   cName: 'menu_items',

//    },


   
]


class POSHeaderNavbar extends React.Component {
   constructor(props) {
	   super(props)
	   this.state = {
		   clicked: false,
		   login: false
	   };
	   this.handleclick = this
		   .handleclick
		   .bind(this);
	   this.handlelog = this
		   .handlelog
		   .bind(this);
   }

   handleclick() {
	   this.state.clicked
		   ? this.setState({clicked: false})
		   : this.setState({clicked: true})
   }

   handlelog() {
	   this.state.login
		   ? this.setState({login: false})
		   : this.setState({login: true})
   }

   render() {
	   return (
		   <div className="navbar">
			   {/* <h1>BRAND</h1> */}

			   <ul
				   className={!this.state.clicked
				   ? 'navlist'
				   : 'navlist_active'}>
				   {menuitems.map((item, index) => {
					   return (
						   <li onClick={this.handleclick} key={index} className={item.cName}>
							   <a href ={item.link}>{item.name}</a>
						   </li>
					   )
				   })}
				   {/* <li className='log' onClick={this.handlelog}>{"Sign out"}
				   </li> */}
			   </ul>
			   {/* {< i onClick = {
				   this.handleclick
			   }
			   className = {
				   this.state.clicked
					   ? 'fas fa-times'
					   : 'fas fa-bars'
			   } > </i>} */}
		   </div>
	   )
   }
}

 export default class POSHeader extends React.Component {
 render(){
   return(
	 <div className="header">

	   <POSHeaderNavbar />
	 </div>
   )
 }
};

