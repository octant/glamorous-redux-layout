import { combineReducers } from 'redux'

import navbar from '../components/navbar/actions'
import sidebar from '../components/sidebar/actions'
import subnav from '../components/subnav/actions'

export default combineReducers({
  navbar,
  sidebar,
  subnav
})
