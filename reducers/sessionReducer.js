import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../actions/sessionActions'

const initialState = {
  user: null,
  errorMessage: '',
  isAuth: false,  
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
        errorMessage: '',
        isAuth: true
      }
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMessage: '',
        isAuth: false
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return state
  }
}