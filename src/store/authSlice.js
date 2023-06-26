import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        register: {
            isFetching: false,
            isError: false,
            isSuccess: false
        }
    },
    reducers: {
        registerStart: (state) => {
            state.register.isFetching = true;
            state.register.isSuccess = false;
            state.register.isError = false;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.isSuccess = true;
            state.register.Error = false;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.isSuccess = false;
            state.register.isError = true;
        },

    }
});

export const {
    registerFailed,
    registerStart,
    registerSuccess
} = authSlice.actions;

export default authSlice.reducer;