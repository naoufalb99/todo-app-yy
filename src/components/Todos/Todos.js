import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCompletedTodos, getUncompletedTodos } from '../../store/todos';
import AddTodoModal from '../AddTodoModal';
import TodoItem from '../TodoItem';
import styles from './Todos.module.css';

function Todos() {
    const [todoModalOpen, setTodoModalOpen] = useState(false);

    const completedTodos = useSelector(getCompletedTodos);
    const uncompletedTodos = useSelector(getUncompletedTodos);

    const handleModalClose = () => {
        setTodoModalOpen(false);
    };

    return (
        <>
            {todoModalOpen && <AddTodoModal onClose={handleModalClose} />}
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.title}>Todos</div>
                    <button onClick={() => setTodoModalOpen(true)}>
                        Add new todo
                    </button>
                </div>
                {uncompletedTodos.map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} text={todo.text} />
                ))}
                <div className={styles.divider} />
                <div className={styles.title}>Completed</div>
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
