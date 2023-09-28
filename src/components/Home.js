import React from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Moment from "react-moment";
import "../style.css";
import Loader from "../Loader.gif"

class Home extends React.Component {

    constructor( props ){
        super( props );

        this.state = {
            loading: false,
            posts: [],
            error: ""
        }
    }

    componentDidMount(){
        const wordPressSiteUrl = 'http://localhost/asiatech';
        this.setState( { loading : true }, ()=>{
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
            .then( res => {
                this.setState({ loading : false, posts: res.data })
            })
            .catch( error => this.setState( { loading : false , error : error.response.data.message}))
        } );
    }




    render() {

        // console.log('state' , this.state)
        // destructuring
        const { posts,loading,error } = this.state;
        
        return(
            <div>
                <Navbar/>
                {error && <div className='alert alert-danger'>{error}</div>}
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
                ): '' }
                {loading && <img className='loader' src = {Loader} alt="Loader"/>}
            </div>
        )
    }
}

export default Home;