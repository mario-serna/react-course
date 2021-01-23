import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../../styles.css';

export const RealExampleRef = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            <button
                className="btn btn-outline-info"
                onClick={() => setShow(!show)}
            >Show</button>

            {show && <MultipleCustomHooks />}
        </div>
    )
}
