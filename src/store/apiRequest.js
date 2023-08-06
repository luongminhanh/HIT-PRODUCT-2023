import axios from "axios"
import { toast } from "react-toastify";

const accessToken = localStorage.accessToken;

export const getAllUsers = () => {
    return axios.get('http://localhost:8080/api/v1/user',
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
}

export const getCurrentUserLogin = (use) => {
    return axios.get('http://localhost:8080/api/v1/user/current',
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

export const getAllProductsByShop = (shopId) => {
    return axios.get('http://localhost:8080/api/v1/product/', shopId,
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


export const getDetailProducts = (id) => {
    return axios.get('http://localhost:8080/api/v1/user/get-product-detail/' + id,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
}

export const postAddToCart = (productId, quantity) => {
    const data = {
        cartId: localStorage.getItem("cartId"),
        productId: productId,
        quantity: quantity
    }
    axios.post("http://localhost:8080/api/v1/cart/" + data.cartId + "/products?productId=" + data.productId + "&quality=" + data.quantity,
        data,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }
    )
        .then(response => {
            console.log("ok", response);
            toast.info('Thêm vào giỏ hàng thành công!', {
                position: "top-right",
                autoClose: 2000
            });
        })
        .catch(error => {
            console.log(error)
        })
}

export const putUpdateCart = (cart) => {
    axios.put("http://localhost:8080/api/v1/shop/" + cart.id,
        cart,
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

export const getProductInCart = (cartId) => {
    return axios.get('http://localhost:8080/api/v1/cart/' + cartId,
        {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
}

export const deleteProductFromCart = (cartId, productId) => {
    const data = {
        cartId: cartId,
        productId: productId,
        quantity: 0
    }
    axios.put('http://localhost:8080/api/v1/cart/' + cartId + '/products/' + productId + '?quantity=0',
        data,
        {
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

export const updateProductInCart = (cartId, productId, quantity) => {
    const data = {
        cartId: cartId,
        productId: productId,
        quantity: quantity
    }
    axios.put('http://localhost:8080/api/v1/cart/' + cartId + '/products/' + productId + '?quantity=' + quantity,
        data,
        {
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