import React, { useState, useContext, useRef, useEffect } from 'react';
import './SettingsHeader.css';


const MenuItems = [
    {
        name: 'Business',
        link: '/settings/business',
        cName: 'menu_items',

    },
    {
        name: 'Roles',
        link: '/settings/roles',
        cName: 'menu_items',

    },
	{
        name: 'Profile',
        link: '/settings/profile',
        cName: 'menu_items',

    },
	{
        name: 'System',
        link: '/settings/system',
        cName: 'menu_items',

    },
   
]


const  SettingsHeaderNavbar = ()=>{
//    constructor(props) {
// 	   super(props)
// 	   this.state = {
// 		   clicked: false,
// 		   login: false
// 	   };
// 	   this.handleClick = this
// 		   .handleClick
// 		   .bind(this);
// 	   this.handleLog = this
// 		   .handleLog
// 		   .bind(this);
//    }

 			let[settingsheaderclick,setsettingsheaderclick]=useState(false);
			 let[settingsheaderactive,setsettingsheaderactive]=useState(null)


  function handleClick(e) {
	// console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh    ",e);
	// console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh    ",e.target.innerText);
	setsettingsheaderactive(e.target.innerText);
	settingsheaderclick
		   ? setsettingsheaderclick (false)
		   : setsettingsheaderclick (true)
   }


//   function handleLog() {
// 	   this.state.login
// 		   ? this.setState({login: false})
// 		   : this.setState({login: true})
//    }

//    render() {
	// console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",this.state.clicked);
	// console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",this.state.login);

	   return (
		   <div className="navbar">
			   {/* <h1>BRAND</h1> */}

			   <ul
				   className={!settingsheaderclick
				   ? 'navlist'
				   : 'navlist_active'}>
				   {MenuItems.map((item, index) => {
					   return (
						   <li onClick={(e)=>handleClick(e)} key={index} className={item.cName+((settingsheaderactive==item.name)?"-active":"")}>
							   {/* <a href ={item.link}>{item.name}</a> */}
							   {item.name}
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
//    }
}

 export default class SettingsHeader extends React.Component {
 render(){
   return(
	//  <div className="full_page">
	   <SettingsHeaderNavbar />
	//  </div>
   )
 }
};

