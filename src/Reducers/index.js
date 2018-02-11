import {combineReducers} from 'redux'
import Postreducer from './postreducer'
import {reducer as formReducer} from 'redux-form'

const rootreducer=combineReducers({
post: Postreducer,
form: formReducer
})

export default rootreducer;