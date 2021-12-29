import React from 'react';

export default function usePortal(id) {
    const el = React.useRef(document.getElementById(id));

    if (!el.current) {
        el.current = document.createElement('div');
        el.current.id = id;
        document.body.appendChild(el.current);
    }

    return el.current;
}
