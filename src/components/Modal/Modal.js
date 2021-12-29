import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';
import usePortal from '../../hooks/usePortal';
import styles from './Modal.styles.js';

const useStyles = createUseStyles(styles);

function Modal({ onClose, children }) {
    const classes = useStyles();

    return (
        <ModalPortal>
            <div className={classes.overlay} />
            <div className={classes.modal}>
                <button className={classes.close} onClick={onClose}>
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
