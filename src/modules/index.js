import { combineReducers } from 'redux'

import titlebar from '../components/titlebar/actions'
import sidebar from '../components/sidebar/actions'
import subnav from '../components/subnav/actions'

export default combineReducers({
  titlebar,
  sidebar,
  subnav
})
