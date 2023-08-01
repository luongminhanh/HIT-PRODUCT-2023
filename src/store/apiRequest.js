import axios from "axios"
import { registerFailed, registerStart, registerSuccess } from "./authSlice"

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmYwZGZmMC1jMmQ2LTRkYTAtYTZmNC03Y2RkNjU2YjA5NzkiLCJhdXRoIjoiUk9MRV9VU0VSIiwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTY5MDkxMzM2MCwiaWF0IjoxNjkwOTA5NzYwLCJ1c2VybmFtZSI6Im1pbmgxMjIzNDUifQ.CjmtYuNhlz2720LlewDhJBHZVLLgDLIAxwKoczQhP3Y'

// export const registerUser = async (user, dispatch, navigate) => {
//     dispatch(registerStart());
//     try {
//         await axios.post("", user);
//         dispatch(registerSuccess());
//         navigate("/login");
//     } catch (err) {
//         dispatch(registerFailed());
//     }
// }

export const getAllUsers = () => {
    return axios.get('http://localhost:8080/api/v1/user',
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
}

export const getAllCustomers = () => {
    return axios.get('http://localhost:8080/api/v1/customer',
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
}

export const postCreateNewUser = (email, password, username) => {
    const userData = {
        email: email,
        password: password,
        repeatPassword: password,
        username: username
    };
    axios.post("http://localhost:8080/api/v1/auth/register",
        userData
    )
        .then(response => {
            console.log("ok", response);
        })
        .catch(error => {
            console.log(error)
        })
}

export const deleteUser = (userId) => {
    axios.delete('http://localhost:8080/api/v1/customer/' + userId, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })
        .then(res => {
            console.log("Xoa thanh cong");
            window.location.reload();
        }).catch(err => {
            alert(err)
        });
}

export const putUpdateUser = (data) => {
    // console.log(String(data.id), "cho fetch");
    axios.put('http://localhost:8080/api/v1/customer/' + data.id,
        data,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
        /*fetch('http://localhost:3000/users/' + String(data.id), {
            method: "PUT",
            headers: { "content-type": "application/stringify" },
            body: JSON.stringify(data)
        })*/
        .then(res => {
            // window.location.reload();
            console.log("ok");
        }).catch(err => {
            alert(err)
        });
}

export const getAllProducts = () => {
    return axios.get('http://localhost:8080/api/v1/product',
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
}

export const postCreateNewProduct = (email, password, username) => {
    const userData = {
        email: email,
        password: password,
        repeatPassword: password,
        username: username
    };
    axios.post("http://localhost:8080/api/v1/auth/register",
        userData
    )
        .then(response => {
            console.log("ok", response);
        })
        .catch(error => {
            console.log(error)
        })
}

export const deleteProduct = (userId) => {
    axios.delete('http://localhost:8080/api/v1/customer/' + userId, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })
        .then(res => {
            console.log("Xoa thanh cong");
            window.location.reload();
        }).catch(err => {
            alert(err)
        });
}

export const putUpdateProduct = (data) => {
    // console.log(String(data.id), "cho fetch");
    axios.put('http://localhost:8080/api/v1/customer/' + data.id,
        data,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
        /*fetch('http://localhost:3000/users/' + String(data.id), {
            method: "PUT",
            headers: { "content-type": "application/stringify" },
            body: JSON.stringify(data)
        })*/
        .then(res => {
            // window.location.reload();
            console.log("ok");
        }).catch(err => {
            alert(err)
        });
}

