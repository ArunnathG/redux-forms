import {FETCH_POSTS, fetchPosts,SHOW_POSTS,DELETE_POSTS} from '../Actions/index'
import _ from 'lodash'

const Postreducer = (state={},action) => {
    
switch(action.type)
{
  
    case FETCH_POSTS:
    
    // const sum=Object.keys(action.payload.data).map((igkey) => {
    //     return action.payload.data[igkey]
    // })
    //      console.log('sum',sum)
    // return sum
    return _.mapKeys(action.payload.data,'id')

    case SHOW_POSTS:

    return {...state,[action.payload.data.id]: action.payload.data}

    case DELETE_POSTS:
        console.log('delete reducer',{...state})
    return {...state}

    default:

    return state
}

}

export default Postreducer;