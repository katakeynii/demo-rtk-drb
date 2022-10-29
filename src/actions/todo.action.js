import axios from "axios"

const baseUrl = "https://jsonplaceholder.typicode.com"

export const getTodos = (userId) => ({
    type: "GET_TODOS",
    payload: axios.get(`${baseUrl}/users/${userId}/todos`)
})

export const getTodo = (todoID) => ({
    type: "GET_TODO",
    payload: axios.get(`${baseUrl}/todos/${todoID}`)
})

export const createTodo = (data) => ({
    type: "CREATE_TODO",
    payload: axios.post(`${baseUrl}/todos`, data)
})

export const deleteTodo = (todoID) => ({
    type: "DELETE_TODO",
    payload: axios.delete(`${baseUrl}/todos/${todoID}`)
})

export const updateTodo = (todoID, data) => ({
    type: "UPDATE_TODO",
    payload: axios.put(`${baseUrl}/todos/${todoID}`, data)
})


