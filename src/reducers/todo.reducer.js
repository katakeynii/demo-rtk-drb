
import { createReducer } from "./createReducer"

const initialState = {
  todo: [],
  error: null,
  loader: false,
}
export const todosReducer = createReducer({
    initialState: {
        todos: [],
        error: null,
        loader: false,
      },
    reducers: {
        "GET_TODOS_FULFILLED":  (state, payload) =>{
            return {...state,  todos: payload.data,  loader: false}
        },
        "GET_TODOS_PENDING": (state, payload) =>{
            return {...state, loader: true}
          },
        "GET_TODOS_FAILED":  (state, payload) =>{
            console.log(payload);
            return {...state, loader: false}
        }
    },
})
