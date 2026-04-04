import { useState, useEffect } from "react";

// - A custom hook is just a JavaScript function that starts with use and uses other React hooks inside.
// - Purpose: reuse stateful logic across multiple components.
// - They don’t add new features to React, but they let you organize and share logic cleanly.


// 1. useWindowWidth
export function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

// 2. useFetch
function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
        }
        fetchData();
    }, [url]);

    return data;
}

// usage
// export const post = useFetch("https://jsonplaceholder.typicode.com/posts/1");
// export const user = useFetch("https://jsonplaceholder.typicode.com/users/1");



// Exercises
// 1. Create a useCounter hook that manages a counter with increment/decrement.
const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);

    return {count, increment, decrement};
}
// Usage
export const CounterComponent = () => {
    const {count, increment, decrement} = useCounter(5);

    return (
        <div>
            <p><strong>Count: </strong>{count}</p>
            <button onClick={increment}>+</button> 
            <span> </span>
            <button onClick={decrement}>-</button>
        </div>
    )
}


// 2. Build a useToggle hook that flips between true and false.
const useToggle = (initialValue = false) => {
    const [state, setState] = useState(initialValue);
    const toggle = () => setState((s) => !s);
    return [state, toggle];
}

export const ToggleComponent = () => {
    const [isOn, toggle] = useToggle();
    return (
        <div>
            <p>{isOn ? "ON" : "OFF"}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

// 3. Create a useLocalStorage hook that saves and retrieves values from localStorage.
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// Usage
export const NameComponent = () => {
    const [name, setName] = useLocalStorage("username", "Suraj");
    
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p><strong>Stored name: </strong>{name}</p>
        </div>
    )
}


// 4. Build a useTimer hook that tracks elapsed time.
const useTimer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setTime((t) => t + 1), 1000);
    }, []);

    return time;
}

// Usage
export const TimerComponent = () => {
    const elapsed = useTimer();
    return <p>Elapsed: {elapsed} seconds</p>
}


// 5. Refactor your earlier useEffect examples into custom hooks.
// a. useLogger
const useLogger = (props) => {
    useEffect(() => {
        console.log("Props:", props);
    }, [props]);
}

// b. mouse tracker
const useMousePosition = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0});

    useEffect(() => {
        const handleMove = (e) => setCoords({ x: e.clientX, y: e.clientY});

        window.addEventListener("mousemove", handleMove);

        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return coords;
}

// Usage
export const RefactoredComponent = () => {
    
    const pos = useMousePosition();
    useLogger("Deva");
    return (
        <div style={{height:"100px", background:"red"}}>
            
            <p>Mouse position: ({pos.x}, {pos.y})</p>
        </div>
    )
}