import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const [errorIncrement, setErrorIncrement] = useState("");
  const [errorDecrement, setErrorDecrement] = useState("");

  const handleIncrement = () => {
    if (count >= 10) {
      setErrorIncrement("Maks 10");
      setErrorDecrement("");
      return;
    }

    setCount(count + 1);
    setErrorIncrement("");
    setErrorDecrement("");
  };

  const handleDecrement = () => {
    if (count <= 0) {
      setErrorDecrement("Failed");
      setErrorIncrement("");
      return;
    }

    setCount(count - 1);
    setErrorDecrement("");
    setErrorIncrement("");
  };

  return (
    <div className="container mx-auto h-[70vh] grid justify-items-center content-center">
      <h1 className='text-red-500 mt-2'>{errorIncrement}</h1>
      <h1 className='text-red-500 mt-2'>{errorDecrement}</h1>
      <Counter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    </div>
  );
}

export default App;
