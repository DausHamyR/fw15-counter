import { useState } from 'react';
import Counter from './components/Counter';

function App() {
    const [count, setCount] = useState(0);
    const [errorIncrement, setErrorIncrement] = useState(false);
    const [errorDecrement, setErrorDecrement] = useState(false);

    const handleIncrement = () => {
        if (count < 10) {
            setCount(count + 1);
            setErrorIncrement(false);
        } else {
        setErrorIncrement(true);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setErrorDecrement(false);
        } else {
        setErrorDecrement(true);
        }
    };

    return (
    <div className="container mx-auto h-[100vh] flex justify-center align-center">
        <Counter count={count} error={error} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    </div>
    );
}

export default App;
