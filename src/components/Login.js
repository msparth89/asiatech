import React from 'react';
import Navbar from "./Navbar";
import Loader from "../Loader.gif";
import axios from 'axios';
import Redirect from './Redirect';

// for using redirect because it is depreacated in react new version


class Login extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			username: '',
			password: '',
			usernicename: '',
			useremail: '',
			loggedin: false,
			loading: false,
			error: ''
		}
	}

	onformsubmit = ( event ) => {
		event.preventDefault();

    const siteUrl = "http://localhost/wordpress";

    const loginData = {
      username: this.state.username,
      password: this.state.password,
    };

    this.setState( { loading: true }, () => {
    axios.post( `${siteUrl}/wp-json/jwt-auth/v1/token`, loginData )
      .then( res => {
        console.log(res.data)
        if ( undefined === res.data.token ) {
          this.setState( { error: res.data.message, loading: false } );
						return;
					}

          const { token, user_nicename, user_email } = res.data;

          localStorage.setItem( 'token', token );
          localStorage.setItem( 'userName', user_nicename );

					this.setState( {
						loading: false,
						token: token,
						usernicename: user_nicename,
						useremail: user_email,
						loggedin: true
					} )
				} )
				.catch( err => {
        
					this.setState( { error: err.response.data.message, loading: false } );
      } )
		} )
	};

	handleonchange = ( event ) => {
		this.setState( { [event.target.name]: event.target.value } );
	};

	render() {

		const { username, password, usernicename, loggedin, error, loading } = this.state;

		const user = ( usernicename ) ? usernicename : localStorage.getItem( 'userName' );

		if ( loggedin || localStorage.getItem( 'token' ) ) {
    return ( <Redirect to={`/dashboard/${user}`} noThrow /> )
  } else {
    return (
      <div>
        <Navbar/>
        <div className="jumbotron" style={{ height: '100vh' }}>
          <h4>Login</h4>
          {error && <div className='alert alert-danger'>{error}</div>}
          <form onSubmit={ this.onformsubmit } style = {{margin:'20px'}}>
            <label className="form-group">
              Username:
              <input
                type="text"
                className="form-control"
                name="username"
                value={ username }
                onChange={ this.handleonchange }
              />
            </label>
            <br/>
            <label className="form-group">
              Password:
              <input
                type="password"
                className="form-control"
                name="password"
                value={ password }
                onChange={ this.handleonchange }
              />
            </label>
            <br/>
            <button className="btn btn-primary mb-3" type="submit">Login</button>
            { loading && <img className="loader" src={Loader} alt="Loader"/> }
          </form>
        </div>
      </div>
    )
		}
  }
}

export default Login;


