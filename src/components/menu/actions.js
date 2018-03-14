export const SET_TYPE = 'menu/SET_TYPE'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return {...state, type: action.payload.style}
    default:
      return state
  }
}

export const setType = (style) => {
  return dispatch => {
    dispatch({
      type: SET_TYPE,
      payload: {style}
    })
  }
}
