function Counter({ count, handleIncrement, handleDecrement }) {
  return (
    <div className="flex justify-center items-center">
      <button className="py-2 px-4 bg-green-500 text-white rounded-md mr-2" onClick={handleIncrement}>
        +
      </button>
      <div className="mx-6">{count}</div>
      <button className="py-2 px-4 bg-red-500 text-white rounded-md" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
