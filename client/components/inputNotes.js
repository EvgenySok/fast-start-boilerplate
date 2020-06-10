import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getNotes,
  removeAllNotes,
  changeInput,
  addNotes,
  sortByRelevant,
  sortByLength,
  sortByDate,
  sortByAlphabet,
} from '../redux/reducers/actionsNotes'

const InputNotes = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.listNotesReducer)
  const isLoading = useSelector((state) => state.messageReducer.loading)

  const disabledBtn = isLoading ? 'disabled' : ''
  const reCallInput = (event) => {
    event.persist()
    dispatch(changeInput(event.target.value))
  }

  return (
    <div className="relative">
      <input
        className="placeholder-gray-500 border w-full"
        placeholder="enter your note..."
        value={store.input}
        onChange={reCallInput}
      />
      <div>Remember! You can’t use bad words.</div>
      <button type="button" disabled={disabledBtn} className="btn-blue" onClick={() => dispatch(addNotes(store.input))}>
        Add note
      </button>
      <button type="button" disabled={disabledBtn} className="btn-blue" onClick={() => dispatch(getNotes(dispatch))}>
        Download notes
      </button>
      <span className="ml-8 mr-2">Sort:</span>
      <div className="inline-flex">
        <button type="button" className="btn-gray" onClick={() => dispatch(sortByRelevant(store.notes))}>
          relevant
        </button>
        <button type="button" className="btn-gray" onClick={() => dispatch(sortByLength(store.notes))}>
          length
        </button>
        <button type="button" className="btn-gray" onClick={() => dispatch(sortByDate(store.notes))}>
          date
        </button>
        <button type="button" className="btn-gray" onClick={() => dispatch(sortByAlphabet(store.notes))}>
          alphabet
        </button>
      </div>
      <button type="button" className="btn-red absolute right-0" onClick={() => dispatch(removeAllNotes())}>
        Delete all notes
      </button>
    </div>
  )
}

export default InputNotes
