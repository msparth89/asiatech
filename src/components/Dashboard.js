import React from 'react';
import Navbar from "./Navbar";
import Redirect from './Redirect';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loggedIn: true,
		}
	}

	handleLogout = () => {
		// Clear user-related data from local storage
		localStorage.removeItem('token');
		localStorage.removeItem('userName');

		// Update state to reflect that the user is logged out
		this.setState({ loggedIn: false });
	}
	render() {
        const userName = localStorage.getItem('userName');

		if (!this.state.loggedIn) {
			return <Redirect to="/login" />;
		}

		return(
			<div>
				<Navbar/>
				<div className="jumbotron" style={{ height: '100vh' }}>
					<h4>Welcome {userName}!!</h4>
					<Link to="/dashboard/define-roles" className="btn btn-primary mb-3">
            			Define Roles
          			</Link>
					<form onSubmit={ this.handleLogout } style = {{margin:'20px'}}>
						<button className="btn btn-primary mb-3" type="submit">Log out</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Dashboard;