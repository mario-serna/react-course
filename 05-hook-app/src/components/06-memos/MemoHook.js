import React, { useMemo, useState } from 'react';
import { heavyweightProcess } from '../../helpers/heavyweightProcess';
import { useCounter } from '../../hooks/useCounter';

import '../../styles.css';

export const MemoHook = () => {
    const { increment, counter } = useCounter(5000);
    const [show, setShow] = useState(false);

    const memoHeavyweightProcess = useMemo(() => heavyweightProcess(counter), [counter]);


    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{memoHeavyweightProcess}</p>

            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-primary ml-3" onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'} {JSON.stringify(show)}
            </button>
        </div>
    )
}
