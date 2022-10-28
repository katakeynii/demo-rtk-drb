import axios from "axios"

export const GET_TODOS = "GET_TODOS"
export const GET_TODO = "GET_TODO"
export const CREATE_TODO = "CREATE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

const baseUrl = "https://jsonplaceholder.typicode.com"

export const getTodos = () => ({
    type: GET_TODOS,
    payload: axios.get(`${baseUrl}/todos`)
})

export const getTodo = (todoID) => ({
    type: GET_TODO,
    payload: axios.get(`${baseUrl}/todos/${todoID}`)
})

export const createTodo = (data) => ({
    type: CREATE_TODO,
    payload: axios.post(`${baseUrl}/todos`, data)
})

export const deleteTodo = (todoID) => ({
    type: DELETE_TODO,
    payload: axios.delete(`${baseUrl}/todos/${todoID}`)
})

export const updateTodo = (todoID, data) => ({
    type: UPDATE_TODO,
    payload: axios.put(`${baseUrl}/todos/${todoID}`, data)
})


