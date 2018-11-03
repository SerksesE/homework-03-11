const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case 'SELECT_COMPUTER':
    return action.payload
    default:
    return state
  }
}

export default reducer