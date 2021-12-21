import {loginFailure, loginStart, loginSuccess} from "./userReducer";
import {publicRequest} from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    console.log(user)
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
