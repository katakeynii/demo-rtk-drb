import axios from "axios"

const baseUrl = "https://jsonplaceholder.typicode.com"

export const getUsers = () => ({
    type: "GET_USERS",
    payload: axios.get(`${baseUrl}/users/1/users`)
})

export const getUser = (userID) => ({
    type: "GET_USER",
    payload: axios.get(`${baseUrl}/users/${userID}`)
})

export const createuser = (data) => ({
    type: "CREATE_USER",
    payload: axios.post(`${baseUrl}/users`, data)
})

export const deleteuser = (userID) => ({
    type: "DELETE_USER",
    payload: axios.delete(`${baseUrl}/users/${userID}`)
})

export const updateuser = (userID, data) => ({
    type: "UPDATE_USER",
    payload: axios.put(`${baseUrl}/users/${userID}`, data)
})


