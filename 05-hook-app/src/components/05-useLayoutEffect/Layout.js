import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../../styles.css';

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxState, setBoxState] = useState({});
    useLayoutEffect(() => {
        setBoxState(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            <div>
                <blockquote className="blockquote text-right">
                    <p ref={pTag}>{quote}</p>
                </blockquote>
                <pre>
                    {JSON.stringify(boxState, undefined, 3)}
                </pre>
                <button
                    className="btn btn-primary float-right"
                    onClick={() => increment()}
                >Next</button>
            </div>
        </div>
    )
}
