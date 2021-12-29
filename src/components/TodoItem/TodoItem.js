import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { TODO_CHECKBOX_COLORS } from '../../constants';
import { toggleTodo } from '../../store/todos';
import { getRandomElementFromArray } from '../../utils/array';

import styles from './TodoItem.styles.js';

const useStyles = createUseStyles(styles);

function TodoItemCheckbox({ color, completed }) {
    const classes = useStyles({ completed, color });

    return <div className={classes.checkbox} />;
}

function TodoItem({ completed, id, text }) {
    const classes = useStyles({ completed });

    const disptach = useDispatch();

    const handleToogle = () => {
        disptach(toggleTodo(id));
    };

    return (
        <div
            className={clsx(classes.box, completed && classes.completed)}
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
