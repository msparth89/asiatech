import React, { useState, useContext } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';
// import Moment from "react-moment";
// import "../style.css";
// import Loader from "../Loader.gif"
import Master from '../../utils/Master';

function Searchbynumber(Props) {



    const [name, setname] = useState("");
    const [title, settitle] = useState("");
    const [show, setshow] = useState("button");

    // const handlechange = async (event) => {
    //     setname(event.target.value);

    //     const { electronAPI } = window;

    //     var abc = await electronAPI.openFile();
    //     settitle(abc);
    //     //   electronAPI.settitle(event.target.value);

    //     // electronAPI.settitle(abc);

    // };
    // console.log("ppp", show);

    
    const handleclick = () => {
        axios.get(`http://localhost/asiatech/back/?rest_route=/shakti/v1/finduser&phone_number=${Props.value}`)
        .then((response) => {
          if (response.data) {
            console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
            console.log(response);
            Props.setuserdata(response.data)
            // setroles(response.data.data.role);
            // localStorage.setItem('userid', userid.current);
            // localStorage.setItem('posphno', posphno.current);
            // const prevLocation = localStorage.getItem('prevLocation');
            // navigate(fromlocation || '/dashboard');
          }
        })
        .catch((error) => {
          console.error('API call error:', error);
        });
      };



    return (
        <div className='search-by-number'>

           {Props.label}: <input type='number' required className='search-by-number-phno-input'
           onChange={(e)=>Props.update(e.target.value)}/>
           
           <input
                type="button"
                className='search-by-numbee-search-button'
                onClick={handleclick}
                // onMouseEnter={() => setishovered(true)}
                // onMouseLeave={() => setishovered(false)}
                style={{ width: '25%', height: '50px' }}
                value= 'Search'

              />
                {/* <div className='search-by-number-name'>{rolephno }</div> */}


        </div>
    )

}

export default Searchbynumber;