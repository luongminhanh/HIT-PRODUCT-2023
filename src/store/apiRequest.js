import axios from "axios"

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4ZTVjOTljZS1mMTkwLTQzNTMtOTJkMi1iMTg2ZWFiNmZlMWUiLCJhdXRoIjoiUk9MRV9VU0VSIiwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTY5MDk3MDE1OCwiaWF0IjoxNjkwOTY2NTU4LCJ1c2VybmFtZSI6Im1pbmgxMjIzNDUifQ.s-CLxaWjfKfFTlpwqm_6uvfYXYeiAWVOccFUrQVVyaQ'


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
    axios.put('http://localhost:8080/api/v1/customer/' + data.id,
        data,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
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

export const postCreateNewProduct = (name, price, description, image, discount, stock) => {
    const product = {
        name: name,
        price: price,
        description: description,
        image: image,
        discount: discount,
        stock: stock
    };
    axios.put("http://localhost:8080/api/v1/product",
        product,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
        .then(response => {
            console.log("ok", response);
        })
        .catch(error => {
            console.log(error)
        })
}

export const deleteProduct = (productId) => {
    axios.delete('http://localhost:8080/api/v1/product/' + productId, {
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

export const putUpdateProduct = (product) => {
    axios.put("http://localhost:8080/api/v1/product/" + product.id,
        product,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
        .then(response => {
            console.log("ok", response);
        })
        .catch(error => {
            console.log(error)
        })
}

export const getAllShops = () => {
    return axios.get('http://localhost:8080/api/v1/shop',
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
}

export const postCreateNewShop = (name, hotline, timeOpen, timeClose) => {
    const shop = {
        name: name,
        hotline: hotline,
        timeOpen: timeOpen,
        timeClose: timeClose
    };
    axios.post("http://localhost:8080/api/v1/shop",
        shop,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
        .then(response => {
            console.log("ok", response);
        })
        .catch(error => {
            console.log(error)
        })
}

export const deleteShop = (shopId) => {
    axios.delete('http://localhost:8080/api/v1/shop/' + shopId, {
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

export const putUpdateShop = (shop) => {
    axios.put("http://localhost:8080/api/v1/shop/" + shop.id,
        shop,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
        .then(response => {
            console.log("ok", response);
        })
        .catch(error => {
            console.log(error)
        })
}

export const getAllCategories = () => {
    return axios.get('http://localhost:8080/api/v1/category',
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
}

export const postCreateNewCategory = (name, hotline, timeOpen, timeClose) => {
    const category = {
        name: name
    };
    axios.post("http://localhost:8080/api/v1/category",
        category,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
        .then(response => {
            console.log("ok", response);
        })
        .catch(error => {
            console.log(error)
        })
}

export const deleteCategory = (categoryId) => {
    axios.delete('http://localhost:8080/api/v1/category/' + categoryId, {
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

export const putUpdateCategory = (category) => {
    axios.put("http://localhost:8080/api/v1/category/" + category.id,
        category,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
        .then(response => {
            console.log("ok", response);
        })
        .catch(error => {
            console.log(error)
        })
}