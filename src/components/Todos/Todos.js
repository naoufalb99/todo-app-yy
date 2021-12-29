import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { getCompletedTodos, getUncompletedTodos } from '../../store/todos';
import AddTodoModal from '../AddTodoModal';
import TodoItem from '../TodoItem';

import styles from './Todos.styles.js';

const useStyles = createUseStyles(styles);

function Todos() {
    const classes = useStyles();
    const [todoModalOpen, setTodoModalOpen] = useState(false);

    const completedTodos = useSelector(getCompletedTodos);
    const uncompletedTodos = useSelector(getUncompletedTodos);

    const handleModalClose = () => {
        setTodoModalOpen(false);
    };

    return (
        <>
            {todoModalOpen && <AddTodoModal onClose={handleModalClose} />}
            <div className={classes.container}>
                <div className={classes.flex}>
                    <div className={classes.title}>Todos</div>
                    <button onClick={() => setTodoModalOpen(true)}>
                        Add new todo
                    </button>
                </div>
                {uncompletedTodos.map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} text={todo.text} />
                ))}
                <div className={classes.divider} />
                <div className={classes.title}>Completed</div>
                {completedTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed
                    />
                ))}
            </div>
        </>
    );
}

export default Todos;
