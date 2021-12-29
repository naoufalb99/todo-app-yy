import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { TODO_CHECKBOX_COLORS } from '../../constants';
import { toggleTodo } from '../../store/todos';
import { getRandomElementFromArray } from '../../utils/array';
import styles from './TodoItem.module.css';

function TodoItemCheckbox({ color, completed }) {
    return (
        <div
            className={clsx(styles.checkbox, completed && styles.completed)}
            style={{
                '--checkbox-color': color,
            }}
        />
    );
}

function TodoItem({ completed, id, text }) {
    const disptach = useDispatch();

    const handleToogle = () => {
        disptach(toggleTodo(id));
    };

    return (
        <div
            className={clsx(styles.box, completed && styles.completed)}
            onClick={handleToogle}
        >
            <TodoItemCheckbox
                color={getRandomElementFromArray(TODO_CHECKBOX_COLORS)}
                completed={completed}
            />
            {text}
        </div>
    );
}

export default TodoItem;
