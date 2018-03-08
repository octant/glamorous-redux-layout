export const SHRINK = 'topbar/SHRINK'
export const GROW = 'topbar/GROW'

const initialState = {
  minHeight: 2,
  maxHeight: 6,
  height: 3
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHRINK:
      const shorterHeight = state.height - action.payload.n

      if (shorterHeight < state.minHeight) {
        return state
      }

      return {...state, height: shorterHeight}
    case GROW:
      const tallerHeight = state.height + action.payload.n

      if (tallerHeight > state.maxHeight) {
        return state
      }

      return {...state, height: tallerHeight}
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
