import { useState } from 'react';
import LatihanCounter from './components/Latihan';

function Latihan() {
  const [count, setCount] = useState(0);
  const [errorIncrement, setErrorIncrement] = useState("");
  const [errorDecrement, setErrorDecrement] = useState("");

  const handleIncrement = () => {
    if (count >= 10) {
      setErrorIncrement("Maks 10");
      return; //supaya count tidak lebih dari 10
    }

    setCount(count + 1);
    setErrorDecrement(""); //menghilangkan error failed saat di tambah
  };

  const handleDecrement = () => {
    if (count <= 0) {
      setErrorDecrement("Failed");
      return; //supaya count tidak kurang dari 0
    }

    setCount(count - 1);
    setErrorIncrement(""); //menghilangkan error maks 10 saat di kurangi
  };

  return (
    <div className="container mx-auto h-[100vh] grid justify-items-center content-center">
      <h1 className='text-red-500 mt-2'>{errorIncrement} {errorDecrement}</h1>
      <LatihanCounter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    </div>
  );
}

export default Latihan;
