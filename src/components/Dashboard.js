import React, { useState, useContext, useRef, useEffect } from 'react';
import './navbar.css';


const MenuItems = [
  {
    name: 'POS',
    link: '/pos',
    cName: 'menu_items',

  },
  {
    name: 'Reoprts',
    link: '/reports',
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


class DashboardNavbar extends React.Component {
   constructor(props) {
	   super(props)
	   this.state = {
		   clicked: false,
		   login: false
	   };
	   this.handleClick = this
		   .handleClick
		   .bind(this);
	   this.handleLog = this
		   .handleLog
		   .bind(this);
   }

   handleClick() {
	   this.state.clicked
		   ? this.setState({clicked: false})
		   : this.setState({clicked: true})
   }

   handleLog() {
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
        {MenuItems.map((item, index) => {
					   return (
          <li onClick={this.handleClick} key={index} className={item.cName}>
            <a href ={item.link}>{item.name}</a>
          </li>
        )
				   })}
{/* <li className='log' onClick={this.handleLog}>{"Sign out"}
				   </li> */}
      </ul>
{/* {< i onClick = {
				   this.handleClick
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

export default class Dashboard extends React.Component {
 render(){
  return(
    <div className="Dashboard">
      <DashboardNavbar />
    </div>
  )
 }
};

