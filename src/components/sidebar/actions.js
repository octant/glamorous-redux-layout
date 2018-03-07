export const SHRINK = 'sidebar/SHRINK'
export const GROW = 'sidebar/GROW'

const initialState = {
  minWidth: 10,
  maxWidth: 20,
  width: 16
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHRINK:
      const skinnierWidth = state.width - action.payload.n

      if (skinnierWidth < state.minWidth) {
        return state
      }

      return {...state, width: skinnierWidth}
    case GROW:
      const thickerWidth = state.width + action.payload.n

      if (thickerWidth > state.maxWidth) {
        return state
      }

      return {...state, width: thickerWidth}
    default:
      return state
  }
}

export const shrink = (n = 1) => {
  return dispatch => {
    dispatch({
      type: SHRINK,
      payload: {n}
    })
  }
}

export const grow = (n = 1) => {
  return dispatch => {
    dispatch({
      type: GROW,
      payload: {n}
    })
  }
}
