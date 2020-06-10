import {
  GET_NOTES,
  REMOVE_ALL_NOOTES,
  REMOVE_NOOTE,
  CHANGE_INPUT,
  ADD_NOTE,
  SORT_BY_DATE,
  SORT_BY_ALPHABET,
  SORT_BY_LENGTH,
  SORT_BY_RELEVANT,
  CHANGE_STATUS,
} from './types'
import { showLoader, hideLoader, showMessage } from './actionsMessage'

const shortid = require('shortid')

export const getNotes = (dispatch) => {
  dispatch(showLoader())
  const linc = '/api/notes/v1/getNotes'
  return async () => {
    const listNotes = await fetch(linc).then((data) => data.json())
    dispatch({
      type: GET_NOTES,
      payload: listNotes,
    })
    dispatch(hideLoader())
  }
}

export const removeAllNotes = () => ({
  type: REMOVE_ALL_NOOTES,
})

export const removeNote = (id) => ({
  type: REMOVE_NOOTE,
  payload: id,
})

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  payload: input,
})

export const addNotes = (input) => {
  if (input.trim() === '') {
    return showMessage('Note must not be blank!')
  }
  return {
    type: ADD_NOTE,
    payload: {
      id: shortid.generate(),
      time: JSON.stringify(new Date()),
      timeMS: +new Date(),
      text: input,
      status: true,
    },
  }
}

export const sortByDate = (notes) => {
  const newListNotes = notes.sort((a, b) => -a.timeMS + b.timeMS)
  return {
    type: SORT_BY_DATE,
    payload: newListNotes,
  }
}
export const sortByAlphabet = (notes) => {
  const newListNotes = notes.sort((a, b) => a.text.localeCompare(b.text))
  return {
    type: SORT_BY_ALPHABET,
    payload: newListNotes,
  }
}
export const sortByLength = (notes) => {
  const newListNotes = notes.sort((a, b) => a.text.length - b.text.length)
  return {
    type: SORT_BY_LENGTH,
    payload: newListNotes,
  }
}
export const sortByRelevant = (notes) => {
  return {
    type: SORT_BY_RELEVANT,
    payload: [...notes.filter((note) => note.status), ...notes.filter((note) => !note.status)],
  }
}

export const changeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: id,
  }
}
