import {
    FETCH_ALL_USERS,





    IAuthState, IS_ERROR,
    IS_SUCCESS,
    LOADING,
    SIGN_IN,
    SIGN_OUT,
    USER_DETAILS
} from "utils";

type IAction = {
    type: string;
    payload: any;
};
export const userReducer = (state: IAuthState, action: IAction): IAuthState => {
    switch (action.type)
    {
        case SIGN_IN:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                currentUser: action.payload.currentUser,
            };
        case FETCH_ALL_USERS:
            return {
                ...state,
                users: action.payload.users,
            };
        case SIGN_OUT:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
            };
        case USER_DETAILS:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
            };
        case LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            };
        case IS_ERROR:
            return {
                ...state,
                isError: action.payload.isError,
                error: action.payload.error,
            };
        case IS_SUCCESS:
            return {
                ...state,
                isSuccess: action.payload.isSuccess,
                success: action.payload.success,
            };
      
        default:
            return state;
    }
};
