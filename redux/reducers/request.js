/* eslint-disable default-case */
import { SET_TOKEN, 
    REQUEST_PENDING, 
    REQUEST_SUCCESSED, 
    REQUEST_FAILED, 
} from "../actions/actionType";

const initialState = {
    Articles: {},
    token: {},
    loading: false,
    error: '',
}

export default function requestReducer( state = initialState, action){
    switch(action.type){
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            }
        case REQUEST_PENDING:
            return{
                ...state,
                loading: true
            }
        case REQUEST_SUCCESSED:
            return{
                ...state,
                loading: false,
                Articles: action.payload.posts
            }
        case REQUEST_FAILED:
            return{
                ...state,
                loading: false,
                error: action.payload.err
            }
        default:
            return state;
    }

    
}