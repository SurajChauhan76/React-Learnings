import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0); // count=0

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count Button</button>
            <p>Count: {count}</p>
        </div>
    )
}