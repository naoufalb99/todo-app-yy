const styles = {
    overlay: {
        position: 'fixed',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        width: '80%',
        maxWidth: '600px',
        padding: '1em',
        borderRadius: '3px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    },
    close: {
        background: 'transparent',
        border: 'none',
        fontFamily: 'sans-serif',
        position: 'absolute',
        top: '0.5em',
        right: '0.5em',
        cursor: 'pointer',
    },
};

export default styles;
