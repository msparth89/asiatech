import React, { useState, useContext, useRef, useEffect } from 'react';
// import './navbar.css';
import Master from "../../utils/Master";


const menuitems = [
  // {
  //   name: 'POS',
  //   link: '/pos',
  //   cName: 'menu_items',

  // },
  // {
  //   name: 'Reoprts',
  //   link: '/reports',
  //   cName: 'menu_items',

  // },

  // {
  //   name: 'Settings',
  //   link: '/settings',
  //   cName: 'menu_items',
  
  //  },
//    {
// 	   name: 'Contact',
// 	   link: '#',
// 	   cName: 'menu_items',

//    },

  {
  name: 'Order',
  link: '/order',
  cName: 'menu_items',
  access:['admin','partner','manager','biller','picker']
  },
{
   name: 'Return',
   link: '/return',
   cName: 'menu_items',
   access:['admin','partner','manager','biller','picker']
 },
 {
  name: 'Exchange',
  link: '/exchange',
  cName: 'menu_items',
  access:['admin','partner','manager','biller','picker']
},
{
  name: 'Pack',
  link: '/pack',
  cName: 'menu_items',
  access:['admin','partner','manager','biller','picker']
},
{
  name: 'STN',
  link: '/stn',
  cName: 'menu_items',
  access:['admin','partner','manager','biller','picker']
},
{
  name: 'Profile',
  link: '/profile',
  cName: 'menu_items',
  access:['admin','partner','manager','biller','picker']
},
{
  name: 'Roles',
  link: '/roles',
  cName: 'menu_items',
  access:['admin','partner','manager']
},
{
  name: 'Reports',
  link: '/reports',
  cName: 'menu_items',
  access:['admin','partner','manager']
},
{
  name: 'Printer',
  link: '/printer',
  cName: 'menu_items',
  access:['admin','partner','manager','biller','picker']
},
   
]


function DashboardNavbar () {
  const { setotp, posphno, userid, roles, setroles, screen,setscreen } = useContext(Master);

   const [clicked,setclicked]=useState(false);
   const [login,setlogin]=useState(true);

   function handleclick(screen) {
    setscreen(screen);
    console.log("--------------------------------------------------------------",screen);
      //  setclicked(!clicked);
   }

  function handlelog() {
       setlogin(login);
   }

  return (
    <div className="navbar">
			   <ul
				   className={!clicked
				   ? 'navlist'
				   : 'navlist_active'}>
        {menuitems.map((item, index) => {
					   return (
          <li onClick={handleclick(item.name)} key={index} className={item.cName}>
            <a href ={item.link}>{item.name}</a>
          </li>
        )
				   })}
      </ul>

    </div>
  )
   }
// }

export default function Dashboard (){

  return(
    <div className="Dashboard">
      <DashboardNavbar />
    </div>
  )
};
