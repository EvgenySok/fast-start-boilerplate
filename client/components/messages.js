import React from 'react'
import { useSelector } from 'react-redux'

const Messages = () => {
  const message = useSelector((state) => state.messageReducer.message)

  return message !== null ? (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
      <span className="block sm:inline">{`${message}`}</span>
    </div>
  ) : ''
}

export default Messages
