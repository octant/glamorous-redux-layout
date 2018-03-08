import { combineReducers } from 'redux'

import titlebar from '../components/titlebar/actions'
import sidebar from '../components/sidebar/actions'
import topbar from '../components/topbar/actions'

export default combineReducers({
  titlebar,
  sidebar,
  topbar
})
