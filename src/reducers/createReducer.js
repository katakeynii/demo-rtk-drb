export const createReducer = ({initialState, reducers}) => {
    return (state = initialState, { type, payload }) => {
        return type in reducers ? reducers[type](state, payload) : state;
    }
}
