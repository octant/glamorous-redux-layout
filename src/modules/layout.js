export const INITIALIZE_LAYOUT = 'forms/INITIALIZE'
export const UPDATE_LAYOUT = 'forms/SUBMIT'

const initialState = {
  baseSize: '1rem',
  tiny: '0.5rem',
  small: '3rem',
  $medium: '4rem',
  $large: '6rem',
  $huge: '16rem'
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const initialize = (savedLayout) => {
  // TODO rehydrate state
  return dispatch => {
    dispatch({
      type: INITIALIZE_LAYOUT
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
