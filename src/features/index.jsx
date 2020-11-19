import React, { useState } from 'react';

const Counter = () => {
    let [count, setCount] = useState(0);

    return (
        <>
        <h1>Count component</h1>
            <p> { count } </p>
        <button
            onClick= { () => setCount( count++ )}
        >
            Click here!
        </button>
        </>
)};

export default Counter;