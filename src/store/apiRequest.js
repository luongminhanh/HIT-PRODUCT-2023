import axios from "axios"
import { registerFailed, registerStart, registerSuccess } from "./authSlice"

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("", user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(registerFailed());
    }
}