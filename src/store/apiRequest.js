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

export const getAllUsers = () => {
    return axios.get('http://localhost:3000/users');
}

export const postCreateNewUser = (email, password, username) => {
    const userData = { email, password, username };
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
    })
        .then((res) => {
            console.log(userData)
            window.location.reload();
        }).catch(err => {
            alert('Save fail!')
        })
}

export const deleteUser = (userId) => {
    axios.delete('http://localhost:3000/users/' + userId)
        .then(res => {
            window.location.reload();
        }).catch(err => {
            alert(err)
        });
}

export const putUpdateUser = (data) => {
    console.log(String(data.id), "cho fetch");
    // axios.put('http://localhost:3000/users/' + userId, data)
    fetch('http://localhost:3000/users/' + String(data.id), {
        method: "PUT",
        headers: { "content-type": "application/stringify" },
        body: JSON.stringify(data)
    })
        .then(res => {
            // window.location.reload();
            console.log("ok");
        }).catch(err => {
            alert(err)
        });
}

