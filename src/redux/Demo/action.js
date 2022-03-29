export const SET_UP = 'SET_UP';
export const SET_DOWN = 'SET_DOWN';

export const setUp = number => dispatch => {
  dispatch({
    type: SET_UP,
    payload: number
  })
}

export const setDown = number => dispatch => {
  dispatch({
    type: SET_DOWN,
    payload: number
  })
}