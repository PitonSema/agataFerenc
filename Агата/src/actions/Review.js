import { ADD_REVIEW, UPDATE_REVIEW } from '../constants'

export const addReview = (name, messages) => async (dispatch) => {
  try {
    const helpers = JSON.parse(localStorage.getItem('review'))
    helpers.push({name,messages})

    localStorage.setItem('review', JSON.stringify(helpers))

    dispatch({
      type: ADD_REVIEW,
      payload: {name, messages}
    })
  } catch(error) {
    console.log(error)
  }
}
export const Update = () => async (dispatch) => {
  try {
    const helpers = JSON.parse(localStorage.getItem('review'))

    dispatch({
      type: UPDATE_REVIEW,
      payload: helpers
    })
  } catch(error) {
    console.log(error)
  }
}