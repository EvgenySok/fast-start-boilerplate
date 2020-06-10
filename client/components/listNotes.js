import React from 'react'
import { useSelector } from 'react-redux'

import Note from './note'

const ListNotes = () => {
  const store = useSelector((state) => state.listNotesReducer)

  if (store.notes.length === 0) {
    return (
      <div>
        <div className="underline text-xl">list of notes: </div>
        <div className="divide-y divide-gray-400">no notes yet...</div>
      </div>
    )
  }

  return (
    <div>
      <div>list of notes: </div>
      <div className="divide-y divide-gray-400">
        {store.notes.map((note) => (
          <Note key={note.id} props={note} />
        ))}
      </div>
    </div>
  )
}

export default ListNotes
