export const handlePending = (state) => {
  return {
    ...state,
    isLoading: true
  }
}

export const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload
  }
}


export const fetchContactsSucces = (state, action) => {
  return {
    ...state,
    items: action.payload,
    isLoading: false,
    error: null,

  }
}


export const addContactsSuccess = (state, action) => {
  return {
    ...state,
    items: [action.payload, ...state.items],
    isLoading: false,
    error: null,

  }
}


export const deleteContactsSuccess = (state, action) => {
  return {
    ...state,
    items: state.items.filter(item => item.id !== action.payload.id),
    isLoading: false,
    error: null,
  }
}