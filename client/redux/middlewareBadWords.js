import { ADD_NOTE } from './reducers/types'
import { showMessage } from './reducers/actionsMessage'

const badWords = ['fuck', 'shit', 'piss off', 'dick head', 'asshole',]

const middlewareBadWords = ({ dispatch }) => (next) => (action) => {
  if (action.type === ADD_NOTE) {
    const found = badWords.filter((it) => action.payload.text.includes(it))
    if (found.length) {
      return dispatch(showMessage('You can’t use bad words in a note!'))
    }
  }
  const result = next(action)
  return result
}

export default middlewareBadWords
