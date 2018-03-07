import { combineReducers } from 'redux'
import layout from './layout.js'
import navbar from '../components/navbar/actions'
import sidebar from '../components/sidebar/actions'
import subnav from '../components/subnav/actions'

export default combineReducers({
  layout,
  navbar,
  sidebar,
  subnav
})
