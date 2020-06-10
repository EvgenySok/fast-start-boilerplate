import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Messages from './messages'
import InputNotes from './inputNotes'
import ListNotes from './listNotes'
import Loader from './loader'

const Home = () => {
  const isLoading = useSelector((state) => state.messageReducer.loading)

  return (
    <div className="flex flex-row justify-center">
      <Head />
      <div className="h-screen w-2/3 p-6 border-4 bg-white bg-opacity-75">
        <div className=" h-auto">
          <div className="text-2xl text-center tracking-widest">Your notes</div>
          <div className="border-2">
            <InputNotes />
          </div>
          <div className="h-12">
            <Messages />
          </div>
          <div className="border-2">{isLoading ? <Loader /> : <ListNotes />}</div>
        </div>
      </div>
    </div>
  )
}

export default Home
