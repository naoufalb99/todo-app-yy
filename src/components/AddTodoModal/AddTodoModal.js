import { useFormik } from 'formik';
import { addTodo } from '../../store/todos';
import Modal from '../Modal';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

function AddTodoModal({ onClose }) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            text: '',
            completed: false,
        },
        onSubmit: ({ text, completed }) => {
            dispatch(addTodo(uuidv4(), text, completed));
            onClose();
        },
    });

    return (
        <Modal onClose={onClose}>
            <div style={{ color: 'var(--primary)' }}>
                <h2>Add Todo</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input
                            name="text"
                            type="text"
                            placeholder="Add todo"
                            onChange={formik.handleChange}
                            value={formik.values.text}
                        />
                    </div>
                    <div>
                        <label>
                            <span>Completed</span>
                            <input
                                name="completed"
                                type="checkbox"
                                onChange={formik.handleChange}
                                checked={formik.values.completed}
                            />
                        </label>
                    </div>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        </Modal>
    );
}

export default AddTodoModal;
