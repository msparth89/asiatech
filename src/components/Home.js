import React, { useState, useContext } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Moment from "react-moment";
import "../style.css";
import Loader from "../Loader.gif"
import Master from "../utils/Master";

function Home () {

    const { phoneNumberChange, PhoneNumber } = useContext(Master);


  



        const [name, setName] = useState("");
        const [title, setTitle] = useState("");
        const [show,setshow]=useState("button");

        const handleChange = async (event) => {
          setName(event.target.value);

          const { electronAPI } = window;

         var abc= await electronAPI.openFile();
         setTitle(abc);
        //   electronAPI.setTitle(event.target.value);

                    // electronAPI.setTitle(abc);

        };
console.log("ppp", show);
        
        return(
            <div>

<div>
      {/* <input type="text" onChange={handleChange} value={name} /> */}
      {/* <h1>Your title is: {title}</h1> */}
    {(show=="ardh") &&   <div className='ardh' onClick={handleChange}>
      <img src="./ardh.jpg" height="400px" weight="200px" ></img>
      </div> }

      {(show=="button") &&  <div className='ardh' onClick={()=>setshow("ardh")}>
    <button id="btn" type="button" onClick={()=>setshow("ardh")}>Set</button> 
    </div>
     }
    </div>
   


                {/* <Navbar/> */}
                {/* {error && <div className='alert alert-danger'>{error}</div>}
                {  posts.length ? (
                    <div className='mt-5 post-container'>
                        { posts.map ( post => (
                            <div key={post.id} className='card border-dark mb-3' style={{
                                width: '50rem'}}>
                                    <div className='card-header'>
                                         <Link to = {`/post/${post.id}`}>{post.title.rendered}</Link>
                                    </div>
                            

                            <div className='card-body'>
                                <div className='card-text post-content'>
                                    {parse(post.excerpt.rendered)}
                                </div>
                            </div>

                            <div className='card-footer'>
                                <Moment fromNow>{post.date}</Moment>    
                                <Link to = {`/post/${post.id}`} className='btn btn-secondary float-right'>Read More...</Link>
                            </div>   

                        </div>
                        ))  }
                    </div>
                ): '' } */}
                {/* {loading && <img className='loader' src = {Loader} alt="Loader"/>} */}
            </div>
        )
   
}

export default Home;