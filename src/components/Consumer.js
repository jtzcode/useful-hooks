import React, { useState, useEffect } from 'react'
import useMemoCompare from '../hooks/useMemoCompare';

function Consumer({ opt, obj }) {
    const [id, setId] = useState(obj.id);
    const memoObj = useMemoCompare(obj, (prev, next) => {
        return prev && prev.id === next.id;
    });

    useEffect(() => {
        setId(memoObj.id);
    }, [memoObj]);

    return (
        <div>Consumer with id: {id}</div>
    );
}

export default Consumer