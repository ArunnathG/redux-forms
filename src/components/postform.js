import React,{Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import classes from './form.css'
import {NavLink} from 'react-router-dom'
import {submitposts} from '../Actions'
import {connect} from 'react-redux'
class Postform extends Component {
    rendertitleInput(fields) {
        const className1 = `form-group ${fields.meta.touched && fields.meta.error?'has-error': null}`
        const className2 = `form-control ${fields.meta.touched && fields.meta.error?'has-danger': null}`
        //console.log(fields)
        return (
            <div className={className1}>
             <label> {fields.label}</label>
                  <input className={className2} type="text" {...fields.input}/>
                  
                  {fields.meta.touched? fields.meta.error : null}
                 
             </div>   
          
        )
    }
    rendercontentInput(fields) {
        const className1 = `form-group ${fields.meta.touched && fields.meta.error?'has-error': null}`
        const className2 = `form-control ${fields.meta.touched && fields.meta.error?'has-danger': null}`
        //console.log(fields)
        return (
            <div className={className1}>
             <label> Contents</label>
                  <textarea  className={className2} {...fields.input}/>
                  {fields.meta.touched? fields.meta.error : null}
             </div>   
          
        )
    }
     formSubmit = (values) => {
        console.log('in submit',values)
        
       this.props.submitposts(values,() => {
           this.props.history.push('/')
       })
        }
    render() {
     
        const  {handleSubmit}= this.props
        return (
            <form onSubmit={handleSubmit(this.formSubmit)}>
                {/* <div className='form-group'>
                    <label> title</label>
                    <input type ='text' className='form-control' {...this.props}/>
                </div>
                <div className='form-group'>
                    <label> categories</label>
                    <input type ='text' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label> content</label>
                    <textarea className='form-control'/>
                </div> */}
                <Field label='Title' name='title' component={this.rendertitleInput}/>
                <Field label='Categories' name='categories' component={this.rendertitleInput}/>
                <Field name='content' component={this.rendercontentInput}/>
                <button type='submit' className='btn btn-success'>Submit</button>
               < NavLink to='/' className='btn btn-danger left-margin'>cancel</NavLink>
            </form>
        )
    }
}

function validate(values) {
   let error = {}
    
   if(!values.title) {
       error.title = 'please enter a title'
   }
   if(!values.categories) {
    error.categories = 'please enter a categories'
    }
    if(!values.content) {
        error.content = 'please enter a content'
    }

    return error
}

export default reduxForm({
    form: 'blogForm',
    validate
})(
    connect(null,{submitposts})
    (Postform)
) 