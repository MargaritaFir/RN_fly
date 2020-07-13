import { GET_LIST, GET_DATE_LIST } from '../actions/listActions'

const initialState = {
     dataList: null,
     loading: true,
   }


   export default (state = initialState, action) => {
     switch (action.type) {
       case GET_LIST:
         return {
           ...state,
           loading:true,
         }
        case GET_DATE_LIST:
          return {
            ...state,
            loading:true,
        }
       case 'LIST_RECEIVED':
         return {
          ...state, 
          dataList: action.dataList, 
          loading: false
         }

       default:
         return state
     }
   }