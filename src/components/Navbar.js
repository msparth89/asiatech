import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to ="/">Wit- commerce</Link>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to ="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to ="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to ="/Dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navbar;