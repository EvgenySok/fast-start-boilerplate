import { SHOW_LOADER, HIDE_LOADER, SHOW_MESSAGE, HIDE_MESSAGE } from './types'

const inicialState = {
  loading: false,
  message: null,
}

const messageReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }
    case HIDE_LOADER:
      return { ...state, loading: false }
    case SHOW_MESSAGE:
      return { ...state, message: action.payload }
    case HIDE_MESSAGE:
      return { ...state, message: null }
    default:
      return state
  }
}

export default messageReducer
