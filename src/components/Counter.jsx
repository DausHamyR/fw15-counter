import { useState, useEffect } from "react"
import propTypes from 'prop-types'

const Counter = (props) => {
    const [count, setCount] = useState(0)
    const [error, setError] = useState("")
    function decrement () {
        if(count > 0){
            setCount(count - 1)
            setError("")
        }else {
            setError("Minimum number exceeded")
        }
    }
    function increment () {
        if(count < 10) {
            setCount(count + 1)
            setError("")
        }else {
            setError("Max number exceeded")
        }
    }
    const {onChangeNumber} = props
    useEffect(()=> {
        function changeNumber(num) {
            onChangeNumber(num)
        }
        changeNumber(count)
    }, [count, onChangeNumber])
    return (
        <div>
            <div>{error}</div>
            <div className="flex gap-5">
                <button onClick={decrement} className="btn btn-primary">-</button>
                <button onClick={increment} className="btn btn-primary">+</button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    onChangeNumber: propTypes.func
}

export default Counter