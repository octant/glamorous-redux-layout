export const INITIALIZE_LAYOUT = 'forms/INITIALIZE'
export const UPDATE_LAYOUT = 'forms/SUBMIT'

// All units in rem
const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_LAYOUT:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const initialize = (savedLayout) => {
  // TODO rehydrate state
  return dispatch => {
    dispatch({
      type: INITIALIZE_LAYOUT,
      payload: savedLayout
    })
  }
}

export const update = (newValues) => {
  return dispatch => {
    dispatch({
      type: UPDATE_LAYOUT,
      payload: newValues
    })
  }
}
