const initialState = [
    {
        id: 'id-1',
        text: 'Consider using Redux',
        completed: false,
    },
];

const createActionName = (name) => `todos/${name}`;

const ADD_TODO = createActionName('ADD_TODO');
const TOGGLE_TODO = createActionName('TOGGLE_TODO');

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed,
                },
            ];
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};

// Action creators
const addTodo = (id, text, completed) => ({
    type: ADD_TODO,
    id,
    text,
    completed,
});
const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

// Selectors
const getTodos = (state) => state.todos;
const getCompletedTodos = (state) =>
    getTodos(state).filter((todo) => todo.completed);
const getUncompletedTodos = (state) =>
    getTodos(state).filter((todo) => !todo.completed);

export {
    reducer as default,
    addTodo,
    toggleTodo,
    getCompletedTodos,
    getUncompletedTodos,
};
