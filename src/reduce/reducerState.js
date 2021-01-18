const countReducer = () => {
  const initialState = { count: 0 }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          count: state.count + 1
        }
      case 'decrement':
        return {
          ...state,
          count: state.count - 1
        }
      default:
        throw new Error('Wrong action type!')
    }
  }

  return { initialState, reducer }
}

export default countReducer
