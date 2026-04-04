import React, {useMemo, useState, useCallback} from "react";
// import { List } from "react-window";

// - React re‑renders components when state or props change.
// - Sometimes these re‑renders are unnecessary and slow down the app.
// - Optimization tools help you avoid wasted renders and cache expensive work.

// 1. React.memo: Prevents re‑rendering of a component if its props haven’t changed.
export const GreetingMemo = React.memo(function GreetingMemo({name}) {
    console.log("Rendering Greeting");
    return <h2>Hello, {name}</h2>
})
// 👉 Only re‑renders when name changes.

// 2. useMemo: Caches the result of an expensive calculation.
export function ExpensiveCalc({ num }) {
    const [number, setNumber] = useState(num);
    const result = useMemo(() => {
        console.log("Calculating...");
        return number * 1000;
    }, [number]);
    return (
        <div>
            <input value={number} onChange={(e) => setNumber(e.target.value)}/>
            <p><strong>Result: </strong>{result}</p>
        </div>
    )
}
// 👉 Without useMemo, recalculates every render; with it, only when num changes.

// 3. useCallback: Caches a function so it doesn’t get recreated on every render.
export function CallbackCounter() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => setCount(c => c + 1), []);

    return <button onClick={increment}>Count: {count}</button>
}

// Exercises
// 1. Create a Greeting component and wrap it with React.memo.
export const GreetingMemo2 = React.memo(({ name }) => {
    console.log("Greeting rendered");
    return <h2>Hello, {name}!</h2>
})

// 2. Build an ExpensiveCalc component and optimize with useMemo.
export const ExpensiveCalc2 = ({num}) => {
    const result = useMemo(() => {
        console.log("Calculating total...");
        let total = 0;
        for(let i=0; i<100000000; i++) {
            total += i % num;
        }
        return total;
    }, [num]);

    return <p>Total Result: {result}</p>
    // return <p>Total Result: {total}</p>
}

// 3. Create a Counter and optimize its increment function with useCallback.
export const CallbackCounter2 = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}
// 👉 Prevents child components receiving increment from re‑rendering unnecessarily.


// 4. Render a list of 1000 items and try virtualization with react‑window.
// const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

// export const VirtualizedList = () => {
//     <List>
//         {({ index, style}) => {
//             <div style={style}>{items[index]}</div>
//         }}
//     </List>
// }
// 👉 Instead of rendering all 1000 items, only visible ones are mounted.

// 5. Compare performance with and without optimizations.