import ReactDOM from 'react-dom';
import usePortal from '../../hooks/usePortal';
import styles from './Modal.module.css';

function Modal({ onClose, children }) {
    return (
        <ModalPortal>
            <div className={styles.overlay} />
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </ModalPortal>
    );
}

function ModalPortal({ children }) {
    const container = usePortal('modal');

    return ReactDOM.createPortal(children, container);
}

export default Modal;
