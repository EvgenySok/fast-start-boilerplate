import { SHOW_LOADER, HIDE_LOADER, SHOW_MESSAGE, HIDE_MESSAGE } from './types'

export const showLoader = () => ({
  type: SHOW_LOADER,
})

export const hideLoader = () => ({
  type: HIDE_LOADER,
})

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
})

export const showMessage = (text) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_MESSAGE,
      payload: text,
    })
    setTimeout(() => {
      dispatch(hideMessage())
    }, 2000)
  }
}
