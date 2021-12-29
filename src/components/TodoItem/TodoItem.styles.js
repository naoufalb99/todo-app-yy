const styles = {
    box: {
        border: '2px solid var(--primary-light)',
        padding: '1em',
        borderRadius: '3px',
        cursor: 'pointer',
        marginBottom: '1em',
        display: 'flex',
        alignItems: 'center',
        gap: '1em',
        textDecoration: ({ completed }) =>
            completed ? 'line-through' : 'none',
    },
    checkbox: {
        width: '1.2em',
        height: '1.2em',
        border: ({ color }) => `0.25em solid ${color}`,
        borderRadius: '99rem',
        backgroundColor: ({ completed, color }) =>
            completed ? color : 'transparent',
    },
};

export default styles;
