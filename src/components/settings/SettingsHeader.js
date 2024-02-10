import React, { useState, useContext, useRef, useEffect } from 'react';
import './SettingsHeader.css';


const menuitems = [
    {
        name: 'Business',
        link: '/settings/business',
        cName: 'menu_items',

    },
    {
        name: 'roles',
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


const  Settingsheadernavbar = ()=>{

 			let[settingsheaderclick,setsettingsheaderclick]=useState(false);
			 let[settingsheaderactive,setsettingsheaderactive]=useState(null)


  function handleclick(e) {
	setsettingsheaderactive(e.target.innerText);
	settingsheaderclick
		   ? setsettingsheaderclick (false)
		   : setsettingsheaderclick (true)
   }

	   return (
		   <div className="navbar">
			   <ul
				   className={!settingsheaderclick
				   ? 'navlist'
				   : 'navlist_active'}>
				   {menuitems.map((item, index) => {
					   return (
						   <li onClick={(e)=>handleclick(e)} key={index} className={item.cName+((settingsheaderactive==item.name)?"-active":"")}>
							   <a href ={item.link}>{item.name}</a>
						   </li>
					   )
				   })}

			   </ul>

		   </div>
	   )
}

 export default class SettingsHeader extends React.Component {
 render(){
   return(
	<div className="header">
	<Settingsheadernavbar />
	  </div>
   )
 }
};

