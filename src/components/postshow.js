import React,{Component} from "react";
import {connect} from 'react-redux';
import {showpost,deletepost} from '../Actions';
import {NavLink} from 'react-router-dom'
import Classes from './form.css'
class Postshow extends Component {
    componentDidMount() {
        const {id} =this.props.match.params
      
        this.props.showpost(id)
    }

    deletepost = () => {
        const {id} =this.props.match.params
        this.props.deletepost(id,()=> {
            this.props.history.push('/')
        })
    }

    render() {
        const {posts} =this.props
        if(!posts) {
            return <div>loading...</div>
        }else {
            console.log('see',posts)
            return (
                <div>
                    <button onClick={this.deletepost} className='btn btn-danger'>delete</button>
                    <NavLink to='/' className='btn btn-primary left-margin'>Back to home </NavLink>
                  <h1 className='textalign'>{posts.title}</h1>
                  <h2>category</h2>
                  {posts.categories}
                  <h2>contents</h2>
                  {posts.content}
                  
                </div>
            )
        }
       
    }
}

function mapStateToProps({post},ownprops) {

return {
    posts: post[ownprops.match.params.id]
}
}

export default connect(mapStateToProps,{showpost,deletepost})(Postshow)