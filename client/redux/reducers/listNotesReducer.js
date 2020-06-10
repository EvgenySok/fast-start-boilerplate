const inicialState = {
  sort: 'SORT_BY_DATE',
  notes: [],
  input: '',
  // {
  //   id: 1,
  //   time: 1,
  //   text: 'no notes yet...',
  //   status: true,
  // },
}

const listNotesReducer = (state = inicialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload], input: '' }
    case 'GET_NOTES':
      return { ...state, notes: [...state.notes, ...action.payload] }
    case 'REMOVE_ALL_NOOTES':
      return { ...state, notes: [] }
    case 'REMOVE_NOOTE': {
      const newNotes = state.notes.filter((note) => note.id !== action.payload)
      return { ...state, notes: newNotes }
    }
    case 'CHANGE_INPUT':
      return { ...state, input: action.payload }

    case 'SORT_BY_DATE':
      return { ...state, notes: action.payload }
    case 'SORT_BY_ALPHABET':
      return { ...state, notes: action.payload }
    case 'SORT_BY_LENGTH':
      return { ...state, notes: action.payload }
    case 'SORT_BY_RELEVANT':
      return { ...state, notes: action.payload }

    case 'CHANGE_STATUS': {
      const newNotes = state.notes.map((note) => {
        if (note.id === action.payload) {
          // eslint-disable-next-line no-param-reassign
          note.status = !note.status
        }
        return note
      })
      return { ...state, notes: newNotes }
    }

    default:
      return state
  }
}

export default listNotesReducer
