import { ADD_REVIEW, UPDATE_REVIEW } from '../constants'

const initialState = {
  data: []
}

export default (state = initialState, action) =>{
  switch (action.type) {
    
    case ADD_REVIEW:
      return {
        data: [...state.data, action.payload]
      }

      case UPDATE_REVIEW:
        return {
          data: action.payload
        }

    default:
      return state
    }
}