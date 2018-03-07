import { combineReducers } from 'redux'
import layout from './layout.js'
import navbar from '../components/navbar/actions'

export default combineReducers({
  layout,
  navbar
})
