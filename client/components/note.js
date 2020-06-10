import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote, changeStatus } from '../redux/reducers/actionsNotes'

const Note = ({ props }) => {
  const dispatch = useDispatch()
  const time = props.time.toString().slice(1, 20).split('T')
  const status = props.status ? '' : 'line-through'

  return (
    <div className="flex">
      <button type="button" className="btn-gray h-8" onClick={() => dispatch(changeStatus(props.id))}>
        -
      </button>
      <p className={`whitespace-normal w-full bg-gray-300 m-1 bg-opacity-75 ${status}`}>
        {props.text} <span className="text-purple-700 text-opacity-50">{`${time[0]} ${time[1]}`}</span>
      </p>
      <button type="button" className="btn-red h-8" onClick={() => dispatch(removeNote(props.id))}>
        dell
      </button>
    </div>
  )
}

export default Note
