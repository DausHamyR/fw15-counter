import {useState} from "react";
import Counter from "./components/Counter"

const App = () => {
    const [num, setNum] = useState(0)
    return (
        <div className="flex h-screen justify-center items-center flex-col">
            <div className="text-7xl">{num}</div>
            <Counter onChangeNumber={setNum}></Counter>
        </div>
    )
}

export default App