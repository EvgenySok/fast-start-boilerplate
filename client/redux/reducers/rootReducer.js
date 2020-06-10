import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import listNotesReducer from './listNotesReducer'
import messageReducer from './messageReducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    listNotesReducer,
    messageReducer,
  })

export default createRootReducer
