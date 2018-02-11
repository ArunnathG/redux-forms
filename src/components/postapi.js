import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../Actions'
import {NavLink} from 'react-router-dom'
import _ from 'lodash'
class Postapi extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

     renderPosts() {
       return  _.map(this.props.posts,post => {
            return <li key={post.id} className='list-group-item'><NavLink to={`/post/${post.id}`}>{post.title}</NavLink></li>
         })
       
    }
    render() {
    // console.log(this.props.post)
       
        return(
            <div>
                <h2>Blog Posts</h2>
                <NavLink to='/post/new' className='btn btn-primary'>Add new</NavLink>
                <hr/>
                    <ul className = 'list-group'>
                    {this.renderPosts()}
                    </ul>
             </div>       
        )
        
    }
}


function mapStateToProps(state) {
    console.log(state.post)
    return {
        posts: state.post
    }
}


export default connect(mapStateToProps,{fetchPosts})(Postapi);