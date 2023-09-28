// register
// login

import { post } from "../utils/request";


export const register = (data) => {
    const route = "/register/";
    return post(route, data);
}

export const login = async(data) => {
    const route = "/token/";
    try {
        const response = await post(route, data);
        if(response.status === 200){
            const { access, refresh } = response.data;
            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);
            return response.status;
        }
    }catch(error){
        throw error;
    }
}

export const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}