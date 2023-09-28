import api from "../api";

export async function get(endpoint) {
    const response = await api.get(endpoint)
    return response.data;
}

export async function post(endpoint, data) {
    const response = await api.post(endpoint, data);
    return response;
}

export async function put(endpoint, data) {
    const response = await api.put(endpoint, data);
    return response;
}

export async function del(endpoint) {
    const response = await api.delete(endpoint)
    return response.status;
}
