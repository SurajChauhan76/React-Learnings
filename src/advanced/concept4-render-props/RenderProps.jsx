import { useEffect, useState, createContext } from "react";

// - A Render Prop is a function prop that a component uses to decide what to render.
// - It allows you to share reusable logic while giving flexibility to the child component.
// - Think of it as: “I’ll handle the logic, you decide how to render it.”

// Basic 
export function DataProvider({ render}) {  // render is a function
    const data = "Hello Suraj! Welcome to render props";
    return render(data);
}

// Mouse Tracker
export function MouseTracker({ render}) {
    const [pos, setPos] = useState({x:0, y:0});

    const handleMove = (e) => setPos( {x: e.clientX, y: e.clientY});

    return (
        <div style={{ height:"200px", background:"yellow"}} onMouseMove={handleMove}>
            {render(pos)}
        </div>
    )
}

// Exercises
// 1. Create a DataProvider that passes a string and render it differently in two places.

export const DataProvider2 = ({ data, children}) => children(data);


// 2. Build a MouseTracker with Render Props to display coordinates.
export const MouseTracker2 = ({ children }) => {
    const [coords, setCoords] = useState({ x:0, y:0});

    const handleMouseMove = (e) => setCoords({ x:e.clientX, y: e.clientY});

    return (
        <div style={{ height:"150px", background:"blue", color:"red"}} onMouseMove={handleMouseMove}>
            {children(coords)}
        </div>
    )
}

// 3. Create a TimerProvider that passes elapsed time to children.
export const TimerProvider = ({ children }) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setTime((t) => t + 1), 1000);
        return () => clearInterval(interval);
    }, []); // empty array dependecy run once

    return children(time);
}

// 4. Compare the same logic implemented with HOCs vs Render Props.
// HOC (Auth)
const WithAuthHoc = (WrappedComponent) => (props) => props.isLoggedIn ? <WrappedComponent {...props} /> : <div>Login required</div>
export const AuthProviderHoc = WithAuthHoc(({name}) => <p>Hello, {name}, Welcome to HOC auth</p>);

// Render Props (Auth)
export const AuthProviderRender = ({ isLoggedIn, children }) => children(isLoggedIn);



// 5. Try combining Render Props with Context for flexible global data rendering.
const ThemeContext = createContext("light");

export const ThemeProviderContext = ({mytheme, children}) => {
    const [theme, setTheme] = useState(mytheme);

    return (
        <ThemeContext.Provider value={theme}>
            {children(theme)}
        </ThemeContext.Provider>
    )
}