import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div className="border-2 text-center rounded-2xl p-5 border-violet-600">
                <h1 >
                    Hello World
                </h1>
                <p>
                    Counter : {counter}
                </p>
            </div>
            <button 
            onClick={() => {
                setCounter(counter => counter + 1);
            }}
            className="border-2 rounded-2xl border-violet-600
            bg-violet-600 text-white p-1">
                Increase Counter
            </button>
        </>
    )
}

export default Counter;