import React from 'react';

function Counter({ count, error, handleIncrement, handleDecrement }) {
    return (
    <div className="flex justify-center items-center">
        <button className="py-2 px-4 bg-green-500 text-white rounded-md mr-2" onClick={handleIncrement}>
        +
        </button>
        <div className="py-2 px-4 bg-white text-gray-900 rounded-md mr-2">{count}</div>
        <button className="py-2 px-4 bg-red-500 text-white rounded-md" onClick={handleDecrement}>
        -
        </button>
    </div>
    );
}

export default Counter;
