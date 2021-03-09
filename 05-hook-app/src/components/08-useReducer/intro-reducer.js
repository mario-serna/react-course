const initialState = [{
    id: 1,
    todo: "Comprar pan",
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload];
    }
    return state;
};

const newState = {
    id: 2,
    todo: "Comprar leche",
    done: false
};

const action = {
    type: 'add',
    payload: newState
};

const todos = todoReducer(initialState, action);

console.log(todos);