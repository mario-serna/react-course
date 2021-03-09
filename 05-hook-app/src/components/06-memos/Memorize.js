import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../../styles.css';

export const Memorize = () => {
    const { increment, counter } = useCounter(10);
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />

            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-primary ml-3" onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'} {JSON.stringify(show)}
            </button>
        </div>
    )
}
