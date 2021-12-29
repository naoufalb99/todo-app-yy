import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TodoItem from '../TodoItem';
import { toggleTodo } from '../../../store/todos';

jest.mock('../../../utils/array', () => ({
    getRandomElementFromArray(array) {
        return array[0];
    },
}));

const mockStore = configureStore();

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Learn React',
            completed: false,
        },
    ],
};

const todo = initialState.todos[0];

describe('<TodoItem />', () => {
    let mockStore;

    beforeEach(() => {
        mockStore = configureStore();
    });

    it('should match a snapshot', () => {
        const store = mockStore(initialState);

        const wrapper = mount(
            <Provider store={store}>
                <TodoItem
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should dispatch TOGGLE_TODO', () => {
        const store = mockStore(initialState);

        const wrapper = mount(
            <Provider store={store}>
                <TodoItem
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                />
            </Provider>
        );

        wrapper.find('TodoItem > div').simulate('click');

        expect(store.getActions()[0]).toEqual(toggleTodo(todo.id));
    });
});
