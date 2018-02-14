import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import data from './loadData'

export default combineReducers({
  router,
  data
})