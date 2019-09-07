import { combineReducers } from 'redux'
import authReducer from './authReducer'
import 'materialize-css/dist/css/materialize.min.css'

export default combineReducers({
	auth: authReducer
})