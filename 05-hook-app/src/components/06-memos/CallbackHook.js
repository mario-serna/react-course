import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../../styles.css';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        (num) => {
            setCounter((e) => e + num);
        },
        [setCounter],
    )

    return (
        <div>
            <h1>useCallback Hook {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
