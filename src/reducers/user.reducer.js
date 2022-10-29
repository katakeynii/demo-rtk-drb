import { createReducer } from "./createReducer";
const getSuccess = (state, payload) => {
  console.log("info", payload);
  return { ...state, users: payload.data, loader: false };
};

const getRejected = (state, payload) => {
  console.log(payload);
  return { ...state, loader: false };
};
const getPending = (state, payload) => {
  return { ...state, loader: true };
};

const initialState = {
  users: [],
  user: null,
  error: null,
  loader: false,
};
export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_USERS_PENDING":
    case "GET_USER_PENDING":
      return { ...state, loader: true };
    case "GET_USER_FULFILLED":
      return { ...state, user: payload.data, loader: false };
    case "GET_USERS_FULFILLED":
      return { ...state, users: payload.data, loader: false };
    case "GET_USERS_FAILED":
    case "GET_USER_FAILED":
      return { ...state, error: payload.data, loader: false };
    default:
      return state;
  }
};

// export const userReducer = (state = initialState, { type, payload }) => {
//   let actions = {
//     GET_USER_FULFILLED: (state, payload) => {
//       console.log("info", payload);
//       return { ...state, users: payload.data, loader: false };
//     },
//     GET_USER_PENDING: (state, payload) => {
//       console.log(payload);
//       return { ...state, loader: false };
//     },
//     GET_USER_FAILED: (state, payload) => {
//       return { ...state, loader: true };
//     },
//   };
//   return type in actions ? actions[type](state, payload) : state;
// };
