import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions";

const initialState = {
    fetching: false,
    token: null,
    error: null,
    loged: false
}

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                token: null,
                error: null,
                loged: false
            }
        
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: true,
                error: null,
                loged: true,
                token: action.payload.token
            }

        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload.error,
                loged: false,
                token: null
            }
    
        default:
            return state;
    }
} 