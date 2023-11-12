import { USER_PROFILE } from "../action/login.action";


const initialState = {
    userProfile: ""
}

export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case USER_PROFILE :
            return {
            ...state,
            userProfile : action.payload,
            }



            default : 
            return state 
}
}